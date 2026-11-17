import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onOpenBooking: (treatment?: string) => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Headline + Single Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6 lg:py-8"
          >
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[hsl(var(--primary-strong))]">
              Biossegurança rigorosa
              <span className="mx-2 text-[hsl(var(--text-muted))]" aria-hidden="true">
                ·
              </span>
              {CLINIC_INFO.croLabel}
              <span className="mx-2 text-[hsl(var(--text-muted))]" aria-hidden="true">
                ·
              </span>
              Horários flexíveis
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.35rem,4.3vw,3.95rem)] font-bold leading-[1.06] tracking-tight text-[hsl(var(--text-primary))] text-balance">
              Odontologia de precisão para sorrisos reais.
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[hsl(var(--text-secondary))]">
              Tratamentos estéticos e reabilitadores em Itacarambi com planejamento digital, acolhimento clínico e cuidado em cada detalhe.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contato"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[hsl(var(--primary))] px-7 py-3.5 text-sm sm:text-base font-semibold text-[hsl(var(--bg-deep))] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[hsl(var(--primary-strong))] hover:text-white"
              >
                Entrar em contato
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm sm:text-base font-semibold text-[hsl(var(--text-primary))] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[hsl(var(--accent-strong))] cursor-pointer"
              >
                Agendar avaliação online
              </button>
            </div>
          </motion.div>

          {/* Right Column: Full-bleed Architectural Clinic Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] w-full overflow-hidden rounded-2xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface-ocean))]">
              <ResilientImage
                src={CLINIC_INFO.heroImage}
                alt="Consultório odontológico contemporâneo da Medic Center com iluminação natural e cadeira ergonômica"
                loading="eager"
                fallbackLabel="Consultório Medic Center"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
