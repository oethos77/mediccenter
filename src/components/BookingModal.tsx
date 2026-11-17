import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, MessageCircle, X } from 'lucide-react';
import { ALL_TREATMENT_OPTIONS, buildWhatsAppUrl } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  initialTreatment?: string;
  onClose: () => void;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function BookingModal({
  isOpen,
  initialTreatment,
  onClose,
}: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(
    initialTreatment || ALL_TREATMENT_OPTIONS[0],
  );
  const [period, setPeriod] = useState<'Manhã' | 'Tarde'>('Manhã');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTreatment) {
      setTreatment(initialTreatment);
    }
  }, [initialTreatment]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanDigits = phone.replace(/\D/g, '');

    if (cleanName.length < 3) {
      setError('Informe seu nome completo.');
      return;
    }
    if (cleanDigits.length < 10) {
      setError('Informe um telefone ou WhatsApp válido com DDD.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError(null);
    onClose();
  };

  const whatsappMessage = `Olá! Gostaria de agendar uma avaliação na Medic Center.\n• Nome: ${name.trim()}\n• Telefone: ${phone}\n• Tratamento: ${treatment}\n• Turno de preferência: ${period}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] p-7 sm:p-9 shadow-2xl">
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Fechar janela de agendamento"
          className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-lg text-[hsl(var(--text-secondary))] transition-colors hover:bg-[hsl(var(--bg-canvas))] hover:text-[hsl(var(--text-primary))] cursor-pointer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {submitted ? (
          <div className="py-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent-soft))] text-[hsl(var(--accent-strong))]">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3
              id="booking-modal-title"
              className="mt-5 font-display text-2xl font-bold text-[hsl(var(--text-primary))]"
            >
              Agendamento encaminhado.
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
              Envie sua solicitação pelo WhatsApp da clínica para confirmarmos o melhor horário para você.
            </p>
            <div className="mt-6 rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] p-4 text-sm space-y-1">
              <p>
                <span className="font-semibold">Paciente:</span> {name}
              </p>
              <p>
                <span className="font-semibold">Tratamento:</span> {treatment}
              </p>
              <p>
                <span className="font-semibold">Turno:</span> {period}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-xl bg-[hsl(var(--accent))] px-5 py-3 text-sm font-semibold text-[hsl(var(--bg-deep))] transition-colors hover:bg-[hsl(var(--primary))]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Confirmar no WhatsApp
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-[hsl(var(--border-hairline))] px-4 py-3 text-sm font-medium text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))] cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="text-xs font-medium text-[hsl(var(--primary-strong))]">
              Agendamento Online
            </p>
            <h3
              id="booking-modal-title"
              className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[hsl(var(--text-primary))]"
            >
              Marcar avaliação na Medic Center
            </h3>

            {error && (
              <div
                role="alert"
                className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-800"
              >
                {error}
              </div>
            )}

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-sm font-medium text-[hsl(var(--text-primary))]"
                >
                  Nome completo
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="mt-1.5 block w-full min-h-[46px] rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 text-sm text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--primary))] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-sm font-medium text-[hsl(var(--text-primary))]"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(formatBrazilPhone(e.target.value))}
                  placeholder="(38) 90000-0000"
                  className="mt-1.5 block w-full min-h-[46px] rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 text-sm tabular-nums text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] focus:border-[hsl(var(--primary))] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-treatment"
                  className="block text-sm font-medium text-[hsl(var(--text-primary))]"
                >
                  Especialidade
                </label>
                <select
                  id="modal-treatment"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="mt-1.5 block w-full min-h-[46px] rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 text-sm text-[hsl(var(--text-primary))] focus:border-[hsl(var(--primary))] focus:outline-none"
                >
                  {ALL_TREATMENT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium text-[hsl(var(--text-primary))]">
                  Turno de preferência
                </span>
                <div className="mt-1.5 inline-flex rounded-xl border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] p-1">
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
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[hsl(var(--primary-strong))] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--bg-deep))] cursor-pointer"
            >
              Continuar para confirmação
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
