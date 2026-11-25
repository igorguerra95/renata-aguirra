import { motion } from 'motion/react';
import { ArrowUpRight, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { ClinicalImage } from './ClinicalImage';
import { DEPOIMENTOS_ALIVIO, PILARES_SOBRE } from '../data/clinic';
import sobreColunaImg from '../assets/images/sobre_coluna_anatomia_1795629957484.jpg';

interface AboutAndTestimonialsSectionProps {
  onContactClick: () => void;
}

export function AboutAndTestimonialsSection({
  onContactClick,
}: AboutAndTestimonialsSectionProps) {
  return (
    <section
      id="sobre"
      className="border-b border-border bg-background py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Parte 1: Sobre — Foco em Coluna e Nervos */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Imagem Escultural da Coluna (5 colunas) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface-elevated p-2 shadow-card">
              <ClinicalImage
                src={sobreColunaImg}
                alt="Escultura anatômica da coluna vertebral em alabastro branco ilustrando precisão clínica em saúde neural e vertebral"
                fallbackTitle="Anatomia da Coluna Vertebral — Renata Aguirra"
                className="h-80 w-full rounded-xl sm:h-[420px] lg:h-full"
              />
            </div>
          </motion.div>

          {/* Filosofia Clínica: Coluna & Sistema Nervoso (7 colunas) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-xs font-medium tracking-wide text-primary-deep sm:text-sm">
                Sobre o Método · Eixo Vertebral &amp; Sistema Nervoso
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground">
                Quando a coluna perde mobilidade, todo o sistema nervoso responde com dor.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Na clínica <strong className="font-semibold text-foreground">Renata Aguirra - Quiropraxia</strong>,
                cada sintoma é investigado a partir da relação direta entre vértebras,
                discos intervertebrais e raízes nervosas. Pequenas restrições biomecânicas
                alteram a sinalização neural, geram compensações musculares e perpetuam
                quadros de dor lombar, cervicalgia e formigamentos.
              </p>
            </div>

            {/* Pilares Numerados */}
            <div className="mt-8 divide-y divide-border border-y border-border">
              {PILARES_SOBRE.map((pilar) => (
                <div
                  key={pilar.numero}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <div className="sm:col-span-5">
                    <p className="font-display text-base font-semibold tracking-tight text-foreground">
                      <span className="mr-2 text-primary-deep tabular-nums">
                        {pilar.numero}
                      </span>
                      {pilar.titulo}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-7">
                    {pilar.descricao}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs font-medium text-muted-foreground sm:text-sm">
                Atendimento criterioso, avaliação física detalhada e respeito absoluto ao
                limite anatômico de cada paciente.
              </p>
              <Button size="md" onClick={onContactClick}>
                Entrar em contato
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Parte 2: Depoimentos de Alívio (adjacente à proposta clínica) */}
        <div className="mt-20 border-t border-border pt-16 sm:mt-24 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-medium tracking-wide text-primary-deep sm:text-sm">
                Relatos Clínicos · Evolução Funcional
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl">
                Depoimentos de quem voltou a se mover sem dor.
              </h3>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Histórias reais de recuperação da autonomia funcional e controle de crises
              vertebrais e neurais.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {DEPOIMENTOS_ALIVIO.map((depoimento, index) => (
              <motion.article
                key={depoimento.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                className="flex flex-col justify-between rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-quartz hover:shadow-card sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-primary-deep">
                      {depoimento.protocolo}
                    </span>
                    <Quote className="h-4 w-4 text-primary-deep/60" aria-hidden="true" />
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground">
                    “{depoimento.relato}”
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <div className="space-y-1.5 text-xs">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Quadro inicial:</span>{' '}
                      {depoimento.antes}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary-deep">Desfecho:</span>{' '}
                      {depoimento.resultado}
                    </p>
                  </div>

                  <div className="mt-4 border-t border-border/70 pt-3">
                    <p className="font-display text-sm font-semibold text-foreground">
                      {depoimento.nome}
                    </p>
                    <p className="text-xs text-muted-foreground">{depoimento.ocupacao}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
