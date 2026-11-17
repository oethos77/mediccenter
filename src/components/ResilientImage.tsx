import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackLabel?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackLabel,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[hsl(var(--bg-surface-ocean))] to-[hsl(var(--accent-soft))] text-[hsl(var(--text-secondary))] p-6 text-center ${className}`}
      >
        <ShieldCheck
          className="h-8 w-8 text-[hsl(var(--primary-strong))]"
          aria-hidden="true"
        />
        <span className="font-display text-sm font-semibold text-[hsl(var(--text-primary))]">
          {fallbackLabel || 'Medic Center Odontologia'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
