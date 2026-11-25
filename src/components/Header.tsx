import { useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet } from './ui/sheet';
import { DADOS_CONTATO } from '../data/clinic';

interface HeaderProps {
  onContactClick: () => void;
}

const NAV_ITEMS = [
  { href: '#inicio', label: 'Início' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
] as const;

export function Header({ onContactClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNav = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileContact = () => {
    setMobileOpen(false);
    onContactClick();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zona 1: Wordmark em linha única */}
        <a
          href="#inicio"
          className="font-display text-lg font-semibold tracking-tight text-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
        >
          {DADOS_CONTATO.marcaCurta}
        </a>

        {/* Zona 2: Links de navegação limpos */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary-deep after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xs"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Ação principal única + Gatilho do drawer mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:block">
            <Button size="sm" onClick={onContactClick}>
              Entrar em contato
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-elevated text-foreground transition-colors hover:bg-surface-quartz focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Sheet
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        title={DADOS_CONTATO.nomeClinica}
      >
        <nav aria-label="Navegação móvel" className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleMobileNav(item.href)}
              className="flex min-h-12 w-full items-center justify-between rounded-lg px-3 text-left font-display text-lg font-medium text-foreground transition-colors hover:bg-surface-quartz focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="border-t border-border pt-5">
          <p className="mb-3 text-xs text-muted-foreground">
            {DADOS_CONTATO.telefone} · {DADOS_CONTATO.endereco}
          </p>
          <Button size="lg" className="w-full" onClick={handleMobileContact}>
            Entrar em contato
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Sheet>
    </header>
  );
}
