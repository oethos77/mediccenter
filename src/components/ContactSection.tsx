import { useEffect, useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  ALL_TREATMENT_OPTIONS,
  buildWhatsAppUrl,
  CLINIC_INFO,
} from '../data/clinicData';

interface ContactSectionProps {
  selectedTreatment: string;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({ selectedTreatment }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(
    selectedTreatment || ALL_TREATMENT_OPTIONS[0],
  );
  const [period, setPeriod] = useState<'Manhã' | 'Tarde'>('Manhã');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedTreatment) {
      setTreatment(selectedTreatment);
    }
  }, [selectedTreatment]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanDigits = phone.replace(/\D/g, '');

    if (cleanName.length < 3) {
      setError('Informe seu nome completo para continuarmos o agendamento.');
      return;
    }
    if (cleanDigits.length < 10) {
      setError('Informe um telefone ou WhatsApp válido com DDD.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const compiledWhatsAppMessage = `Olá! Gostaria de agendar uma consulta na Medic Center.\n• Nome: ${name.trim()}\n• Telefone: ${phone}\n• Tratamento: ${treatment}\n• Turno de preferência: ${period}${notes.trim() ? `\n• Observações: ${notes.trim()}` : ''}`;

  return (
    <section
      id="contato"
      className="bg-[hsl(var(--bg-deep))] py-24 lg:py-32 text-[hsl(var(--text-on-deep))]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Direct Channels & Clinic Location */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-sm font-medium text-[hsl(var(--primary))]">
                Atendimento direto
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,3rem)] font-bold leading-tight tracking-tight text-white text-balance">
                Agende sua avaliação com tranquilidade.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[hsl(var(--text-muted-deep))]">
                Entre em contato por WhatsApp, telefone ou envie sua solicitação pelo formulário ao lado.
              </p>

              <dl className="mt-10 space-y-6 border-t border-[hsl(var(--border-deep))] pt-8">
                <div className="flex items-start gap-4">
                  <MapPin
                    className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--primary))]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-medium text-[hsl(var(--text-muted-deep))]">
                      Endereço
                    </dt>
                    <dd className="mt-1 text-base font-medium text-white">
                      {CLINIC_INFO.address}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--accent))]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-medium text-[hsl(var(--text-muted-deep))]">
                      Telefone e WhatsApp
                    </dt>
                    <dd className="mt-1 text-base font-medium text-white tabular-nums">
                      <a
                        href={CLINIC_INFO.phoneHref}
                        className="hover:text-[hsl(var(--primary))] transition-colors"
                      >
                        {CLINIC_INFO.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Direct Channel Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[hsl(var(--accent))] px-6 py-3 text-sm font-semibold text-[hsl(var(--bg-deep))] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[hsl(var(--primary))]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Conversar no WhatsApp
              </a>

              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[hsl(var(--border-deep))] bg-[hsl(var(--bg-deep-elevated))] px-5 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ligar
              </a>

              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[hsl(var(--border-deep))] bg-[hsl(var(--bg-deep-elevated))] px-5 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Right: Interactive Online Scheduling Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-[hsl(var(--bg-surface))] p-7 sm:p-10 text-[hsl(var(--text-primary))]">
              {submitted ? (
                <div className="py-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent-strong))]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-[hsl(var(--text-primary))]">
                    Solicitação pronta para envio.
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[hsl(var(--text-secondary))]">
                    Conclua a confirmação do horário diretamente no WhatsApp da Medic Center com os dados preenchidos:
                  </p>

                  <div className="mt-6 rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] p-5 text-sm text-[hsl(var(--text-primary))] space-y-1.5">
                    <p>
                      <span className="font-semibold">Paciente:</span> {name}
                    </p>
                    <p>
                      <span className="font-semibold">Contato:</span>{' '}
                      <span className="tabular-nums">{phone}</span>
                    </p>
                    <p>
                      <span className="font-semibold">Tratamento:</span> {treatment}
                    </p>
                    <p>
                      <span className="font-semibold">Turno:</span> {period}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href={buildWhatsAppUrl(compiledWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-6 py-3 text-sm font-semibold text-[hsl(var(--bg-deep))] transition-colors hover:bg-[hsl(var(--primary))]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Confirmar pelo WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setPhone('');
                        setNotes('');
                      }}
                      className="inline-flex min-h-[44px] items-center px-3 text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] cursor-pointer"
                    >
                      Editar dados
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-[hsl(var(--text-primary))]">
                    Pré-agendamento online
                  </h3>
                  <p className="mt-1.5 text-sm text-[hsl(var(--text-secondary))]">
                    Retornamos com as opções de horário disponíveis.
                  </p>

                  {error && (
                    <div
                      role="alert"
                      className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                    >
                      {error}
                    </div>
                  )}

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[hsl(var(--text-primary))]"
                      >
                        Nome completo
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="mt-2 block w-full min-h-[46px] rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 text-sm text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--primary))] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[hsl(var(--text-primary))]"
                      >
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(formatBrazilPhone(e.target.value))}
                        placeholder="(38) 90000-0000"
                        className="mt-2 block w-full min-h-[46px] rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 text-sm tabular-nums text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--primary))] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-treatment"
                        className="block text-sm font-medium text-[hsl(var(--text-primary))]"
                      >
                        Tratamento de interesse
                      </label>
                      <select
                        id="contact-treatment"
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="mt-2 block w-full min-h-[46px] rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 text-sm text-[hsl(var(--text-primary))] focus:border-[hsl(var(--primary))] focus:outline-none"
                      >
                        {ALL_TREATMENT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <span className="block text-sm font-medium text-[hsl(var(--text-primary))]">
                        Turno de preferência
                      </span>
                      <div className="mt-2 inline-flex rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] p-1">
                        {(['Manhã', 'Tarde'] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setPeriod(opt)}
                            className={`min-h-[38px] rounded-lg px-5 text-sm font-medium transition-colors cursor-pointer ${
                              period === opt
                                ? 'bg-[hsl(var(--primary-strong))] text-white'
                                : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-notes"
                        className="block text-sm font-medium text-[hsl(var(--text-primary))]"
                      >
                        Observação (opcional)
                      </label>
                      <textarea
                        id="contact-notes"
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Alguma dúvida ou preferência específica?"
                        className="mt-2 block w-full rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 py-3 text-sm text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--primary))] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[hsl(var(--primary-strong))] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--bg-deep))] cursor-pointer"
                  >
                    Solicitar agendamento
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
