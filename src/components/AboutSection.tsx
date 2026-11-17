import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, TESTIMONIALS } from '../data/clinicData';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface-ocean))] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Dentist Bio Split: Portrait Left, Editorial Bio & Metrics Right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))]">
              <ResilientImage
                src={CLINIC_INFO.dentistImage}
                alt="Cirurgiã-dentista responsável técnica da Medic Center em consultório odontológico"
                fallbackLabel="Direção Clínica Medic Center"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-medium text-[hsl(var(--primary-strong))]">
              Direção clínica
              <span className="mx-2 text-[hsl(var(--text-muted))]" aria-hidden="true">
                ·
              </span>
              Formação USP &amp; UNICAMP
              <span className="mx-2 text-[hsl(var(--text-muted))]" aria-hidden="true">
                ·
              </span>
              {CLINIC_INFO.croLabel}
            </p>

            <h2 className="mt-4 font-display text-[clamp(1.85rem,3vw,2.75rem)] font-bold leading-tight tracking-tight text-[hsl(var(--text-primary))] text-balance">
              Rigor científico e escuta atenta em cada consulta.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[hsl(var(--text-secondary))]">
              Com formação acadêmica consolidada pela USP e especialização pela UNICAMP, nossa liderança clínica conduz cada diagnóstico com foco em preservação biológica, conforto do paciente e previsibilidade estética.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[hsl(var(--text-secondary))]">
              Na Medic Center, cada plano terapêutico é explicado com transparência antes de qualquer intervenção, respeitando o tempo e as necessidades individuais de quem nos confia o sorriso.
            </p>

            {/* Clean Tabular Clinical Metrics */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-[hsl(var(--border-hairline))]">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[hsl(var(--text-primary))] tabular-nums">
                  +3.200
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--text-secondary))]">
                  Pacientes atendidos
                </p>
              </div>
              <div>
                <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[hsl(var(--accent-strong))] tabular-nums">
                  4,9 / 5,0
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--text-secondary))]">
                  Avaliação média
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[hsl(var(--primary-strong))]">
                  CRO-MG
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--text-secondary))]">
                  Registro profissional ativo
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Claim-to-Proof Adjacency: Patient Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-16 border-t border-[hsl(var(--border-hairline))]"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-[hsl(var(--accent-strong))]">
                Experiências reais
              </p>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[hsl(var(--text-primary))]">
                A confiança de quem já passou por aqui.
              </h3>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] p-7"
              >
                <div>
                  <div
                    className="flex items-center gap-1"
                    aria-label={`Avaliação de ${item.rating} de 5 estrelas`}
                  >
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-[hsl(var(--text-primary))]">
                    “{item.quote}”
                  </p>
                </div>

                <footer className="mt-6 flex items-center gap-3.5 pt-5 border-t border-[hsl(var(--border-hairline))]">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary-soft))] font-display text-xs font-bold text-[hsl(var(--primary-strong))]"
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold text-[hsl(var(--text-primary))] truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-[hsl(var(--text-secondary))] truncate">
                      {item.treatment}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
