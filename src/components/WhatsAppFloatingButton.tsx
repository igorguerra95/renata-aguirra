import { MessageCircle } from 'lucide-react';
import { DADOS_CONTATO } from '../data/clinic';

export function WhatsAppFloatingButton() {
  const href = `https://wa.me/${DADOS_CONTATO.telefoneWhatsapp}?text=${encodeURIComponent(
    'Olá, gostaria de entrar em contato para agendar uma avaliação na Renata Aguirra - Quiropraxia.'
  )}`;

  return (
    <div className="fixed right-5 bottom-5 z-40">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-primary/45 animate-ping motion-reduce:animate-none"
      />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Entrar em contato via WhatsApp ${DADOS_CONTATO.telefone}`}
        title={`WhatsApp: ${DADOS_CONTATO.telefone}`}
        className="relative flex h-13 w-13 items-center justify-center rounded-full border border-border-quartz bg-primary-deep text-primary-foreground shadow-elevated transition-transform duration-200 hover:scale-105 hover:bg-primary-deep-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
