import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { ClinicalImage } from './ClinicalImage';
import { CountUpMetric } from './CountUpMetric';
import { METRICAS_CLINICAS } from '../data/clinic';
import heroClinicImg from '../assets/images/hero_quiropraxia_clinic_1795629955936.jpg';

interface HeroSectionProps {
  onContactClick: () => void;
}

const EASE_CLINICAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-background bg-quartz-veil"
    >
      <div className="mineral-grain pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Editorial Principal */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0, ease: EASE_CLINICAL }}
                className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-wide text-primary-deep sm:text-sm"
              >
                <span>Renata Aguirra — Quiropraxia</span>
                <span aria-hidden="true" className="text-muted-foreground">
                  ·
                </span>
                <span className="text-muted-foreground">
                  Coluna Vertebral, Nervos &amp; Acupuntura
                </span>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: EASE_CLINICAL }}
                className="mt-5 font-display text-[clamp(3rem,5.3vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-foreground"
              >
                Coluna alinhada. Dor silenciada na origem.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16, ease: EASE_CLINICAL }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Atendimento clínico de alta precisão em quiropraxia, acupuntura e
                descompressão miofascial. Restaure a mobilidade articular, alivie a
                sobrecarga sobre raízes nervosas e retome sua rotina sem limitações.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24, ease: EASE_CLINICAL }}
                className="mt-8 flex flex-wrap items-center gap-5"
              >
                <Button size="lg" onClick={onContactClick}>
                  Entrar em contato
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <a
                  href="#especialidades"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-primary-deep hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm whitespace-nowrap shrink-0"
                >
                  Explorar especialidades
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32, ease: EASE_CLINICAL }}
              className="mt-10 border-t border-border pt-6"
            >
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                Conduta baseada em exame ortopédico, palpação vertebral e neuromodulação
                integrativa — sem protocolos genéricos.
              </p>
            </motion.div>
          </div>

          {/* Coluna Visual Arquitetônica */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: EASE_CLINICAL }}
            className="lg:col-span-5"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-border-quartz bg-surface-elevated p-2 shadow-card">
              <ClinicalImage
                src={heroClinicImg}
                alt="Sala clínica minimalista da Renata Aguirra - Quiropraxia com maca em travertino, linho branco e detalhes em rosa quartzo"
                fallbackTitle="Ambiente Clínico — Renata Aguirra Quiropraxia"
                priority
                className="h-72 w-full rounded-xl sm:h-96 lg:h-full lg:min-h-[440px]"
              />
              <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-xl border border-border/80 bg-background/92 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="font-display font-semibold text-foreground">
                    Avaliação Biomecânica &amp; Neural
                  </span>
                  <span className="text-primary-deep font-medium whitespace-nowrap">
                    Atendimento individual
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Faixa de Métricas Clínicas (4 colunas abaixo do split principal) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {METRICAS_CLINICAS.map((metrica) => (
            <div
              key={metrica.id}
              className="flex flex-col justify-between bg-surface-elevated p-6 transition-colors duration-200 hover:bg-surface-quartz/50"
            >
              <p className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <CountUpMetric
                  value={metrica.valor}
                  prefix={metrica.prefixo}
                  suffix={metrica.sufixo}
                />
              </p>
              <div className="mt-3">
                <p className="text-sm font-semibold text-foreground">{metrica.rotulo}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {metrica.contexto}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
