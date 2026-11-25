import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutAndTestimonialsSection } from './components/AboutAndTestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import type { Especialidade } from './data/clinic';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] =
    useState<Especialidade['id']>('quiropraxia');

  const scrollToContact = (especialidade?: Especialidade['id']) => {
    if (especialidade) {
      setSelectedSpecialty(especialidade);
    }
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      window.setTimeout(() => {
        const nameInput = document.getElementById('contato-nome');
        nameInput?.focus({ preventScroll: true });
      }, 450);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onContactClick={() => scrollToContact()} />

      <main>
        <HeroSection onContactClick={() => scrollToContact()} />

        <SpecialtiesSection
          onSelectSpecialtyForContact={(id) => scrollToContact(id)}
        />

        <AboutAndTestimonialsSection onContactClick={() => scrollToContact()} />

        <ContactSection preselectedSpecialty={selectedSpecialty} />
      </main>

      <Footer />

      <WhatsAppFloatingButton />
    </div>
  );
}
