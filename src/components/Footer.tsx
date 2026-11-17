import { CLINIC_INFO } from '../data/clinicData';

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border-deep))] bg-[hsl(var(--bg-deep))] py-12 text-[hsl(var(--text-muted-deep))]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-white">
            {CLINIC_INFO.name}
          </p>
          <p className="mt-1.5 text-sm">
            {CLINIC_INFO.specialty}
            <span className="mx-2 opacity-60" aria-hidden="true">
              ·
            </span>
            {CLINIC_INFO.croLabel}
          </p>
          <p className="mt-1 text-xs opacity-80">
            {CLINIC_INFO.address}
            <span className="mx-2" aria-hidden="true">
              ·
            </span>
            <span className="tabular-nums">{CLINIC_INFO.phoneDisplay}</span>
          </p>
        </div>

        <nav
          aria-label="Rodapé"
          className="flex flex-wrap items-center gap-6 text-sm"
        >
          <a
            href="#inicio"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Início
          </a>
          <a
            href="#servicos"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Serviços
          </a>
          <a
            href="#sobre"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Contato
          </a>
        </nav>

        <p className="text-xs opacity-75">
          © {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
