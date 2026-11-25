import { DADOS_CONTATO } from '../data/clinic';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">
              {DADOS_CONTATO.nomeClinica}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cuidado clínico especializado em quiropraxia, acupuntura e
              ventosaterapia com foco na integridade da coluna vertebral e sistema
              nervoso.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-foreground">Navegação</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#inicio" className="transition-colors hover:text-primary-deep">
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#especialidades"
                  className="transition-colors hover:text-primary-deep"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#sobre" className="transition-colors hover:text-primary-deep">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="transition-colors hover:text-primary-deep">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-foreground">Dados da Clínica</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Endereço: {DADOS_CONTATO.endereco}</li>
              <li className="tabular-nums">Telefone: {DADOS_CONTATO.telefone}</li>
              <li>Horário: {DADOS_CONTATO.horario}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {DADOS_CONTATO.nomeClinica}. Todos os direitos reservados.
          </p>
          <p>Conteúdo informativo — não substitui avaliação clínica presencial.</p>
        </div>
      </div>
    </footer>
  );
}
