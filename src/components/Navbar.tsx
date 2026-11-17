import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (treatment?: string) => void;
}

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[hsl(var(--bg-surface))]/92 backdrop-blur-md border-b border-[hsl(var(--border-hairline))]'
          : 'bg-[hsl(var(--bg-canvas))]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="font-display text-xl font-bold tracking-tight text-[hsl(var(--text-primary))] whitespace-nowrap shrink-0"
        >
          {CLINIC_INFO.name}
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[hsl(var(--text-secondary))]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[hsl(var(--primary-strong))] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[hsl(var(--primary))] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="hidden md:inline-flex items-center justify-center rounded-lg bg-[hsl(var(--primary-strong))] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--bg-deep))] cursor-pointer"
          >
            Agendar consulta
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex md:hidden h-11 w-11 items-center justify-center rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] text-[hsl(var(--text-primary))]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] px-6 py-5">
          <nav
            aria-label="Navegação móvel"
            className="flex flex-col gap-1"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="flex min-h-[44px] items-center text-base font-medium text-[hsl(var(--text-primary))] hover:text-[hsl(var(--primary-strong))]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-3 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[hsl(var(--primary-strong))] px-5 py-3 text-sm font-semibold text-white"
            >
              Agendar consulta
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
