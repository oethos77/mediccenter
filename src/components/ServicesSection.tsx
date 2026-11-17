import {
  ArrowUpRight,
  Droplets,
  Layers,
  ScanLine,
  ShieldCheck,
  Smile,
  Sun,
} from 'lucide-react';
import { motion } from 'motion/react';
import { EXTRA_SERVICES, FLAGSHIP_SERVICES } from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectTreatment: (treatment: string) => void;
}

function FlagshipIcon({ type }: { type: 'sun' | 'layers' | 'shield' }) {
  if (type === 'sun') {
    return <Sun className="h-5 w-5 text-[hsl(var(--primary-strong))]" aria-hidden="true" />;
  }
  if (type === 'layers') {
    return <Layers className="h-5 w-5 text-[hsl(var(--primary-strong))]" aria-hidden="true" />;
  }
  return <ShieldCheck className="h-5 w-5 text-[hsl(var(--accent))]" aria-hidden="true" />;
}

function ExtraIcon({ type }: { type: 'droplets' | 'smile' | 'scan' }) {
  if (type === 'droplets') {
    return <Droplets className="h-5 w-5 text-[hsl(var(--primary-strong))]" aria-hidden="true" />;
  }
  if (type === 'smile') {
    return <Smile className="h-5 w-5 text-[hsl(var(--accent-strong))]" aria-hidden="true" />;
  }
  return <ScanLine className="h-5 w-5 text-[hsl(var(--primary-strong))]" aria-hidden="true" />;
}

export function ServicesSection({ onSelectTreatment }: ServicesSectionProps) {
  const [whitening, aligners, implants] = FLAGSHIP_SERVICES;

  return (
    <section
      id="servicos"
      className="border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[hsl(var(--accent-strong))]">
              Especialidades clínicas
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.85rem,3vw,2.75rem)] font-bold leading-tight tracking-tight text-[hsl(var(--text-primary))] text-balance">
              Tratamentos desenhados para durar.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[hsl(var(--text-secondary))]">
            Protocolos integrados da prevenção estética à reabilitação oral completa.
          </p>
        </motion.div>

        {/* Asymmetric Editorial Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* 01. Clareamento Dental — Wide Split Card (7 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group lg:col-span-7 grid grid-cols-1 md:grid-cols-12 overflow-hidden rounded-2xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))]"
          >
            <div className="md:col-span-6 h-64 md:h-full min-h-[280px] overflow-hidden">
              <ResilientImage
                src={whitening.image}
                alt={whitening.imageAlt}
                fallbackLabel={whitening.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="md:col-span-6 flex flex-col justify-between p-7 lg:p-9">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[hsl(var(--text-muted))]">
                    {whitening.index}. {whitening.subtitle}
                  </span>
                  <FlagshipIcon type={whitening.icon} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-[hsl(var(--text-primary))]">
                  {whitening.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[hsl(var(--text-secondary))]">
                  {whitening.description}
                </p>
              </div>
              <div className="mt-8 pt-5 border-t border-[hsl(var(--border-hairline))]">
                <button
                  type="button"
                  onClick={() => onSelectTreatment(whitening.title)}
                  className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[hsl(var(--primary-strong))] transition-colors hover:text-[hsl(var(--accent-strong))] cursor-pointer"
                >
                  Agendar avaliação
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* 02. Ortodontia Invisível — Vertical Card (5 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-2xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface-ocean))]"
          >
            <div className="h-56 sm:h-64 w-full overflow-hidden">
              <ResilientImage
                src={aligners.image}
                alt={aligners.imageAlt}
                fallbackLabel={aligners.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-7 lg:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[hsl(var(--primary-strong))]">
                    {aligners.index}. {aligners.subtitle}
                  </span>
                  <FlagshipIcon type={aligners.icon} />
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[hsl(var(--text-primary))]">
                  {aligners.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[hsl(var(--text-secondary))]">
                  {aligners.description}
                </p>
              </div>
              <div className="mt-6 pt-5 border-t border-[hsl(var(--border-hairline))]">
                <button
                  type="button"
                  onClick={() => onSelectTreatment(aligners.title)}
                  className="inline-flex min-h-[40px] items-center gap-2 text-sm font-semibold text-[hsl(var(--primary-strong))] transition-colors hover:text-[hsl(var(--accent-strong))] cursor-pointer"
                >
                  Agendar avaliação
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.article>

          {/* 03. Implantes Dentários — Full-width Dark Ocean Contrast Feature (12 cols) */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-2xl bg-[hsl(var(--bg-deep))] text-[hsl(var(--text-on-deep))]"
          >
            <div className="lg:col-span-5 flex flex-col justify-between p-8 lg:p-11">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[hsl(var(--primary))]">
                    {implants.index}. {implants.subtitle}
                  </span>
                  <FlagshipIcon type={implants.icon} />
                </div>
                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {implants.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[hsl(var(--text-muted-deep))]">
                  {implants.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[hsl(var(--border-deep))]">
                <button
                  type="button"
                  onClick={() => onSelectTreatment(implants.title)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-[hsl(var(--bg-deep))] transition-colors duration-150 hover:bg-[hsl(var(--primary))] cursor-pointer"
                >
                  Solicitar avaliação de implante
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-[340px] overflow-hidden">
              <ResilientImage
                src={implants.image}
                alt={implants.imageAlt}
                fallbackLabel={implants.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.article>
        </div>

        {/* Extra Services Hairline Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-12 border-t border-[hsl(var(--border-hairline))]"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[hsl(var(--border-hairline))]">
            {EXTRA_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={`flex flex-col justify-between ${
                  idx === 0
                    ? 'md:pr-8'
                    : idx === 1
                      ? 'md:px-8'
                      : 'md:pl-8'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <ExtraIcon type={service.icon} />
                    <h3 className="font-display text-lg font-bold text-[hsl(var(--text-primary))]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => onSelectTreatment(service.title)}
                    className="inline-flex min-h-[36px] items-center gap-1 text-xs font-semibold text-[hsl(var(--primary-strong))] hover:text-[hsl(var(--accent-strong))] cursor-pointer"
                  >
                    Agendar
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
