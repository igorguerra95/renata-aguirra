import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ClinicalImage } from './ClinicalImage';
import type { Especialidade } from '../data/clinic';
import quiroImg from '../assets/images/especialidade_quiropraxia_1795629957151.jpg';
import acupunturaImg from '../assets/images/especialidade_acupuntura_1795629957168.jpg';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForContact: (especialidadeId: Especialidade['id']) => void;
}

const ESPECIALIDADES: Especialidade[] = [
  {
    id: 'quiropraxia',
    numero: '01.',
    titulo: 'Quiropraxia Clínica',
    subtitulo: 'Ajustes articulares de precisão vertebral',
    resumo:
      'Correção manual de subluxações e restrições de movimento na coluna cervical, torácica e lombar, reduzindo a compressão sobre discos e raízes nervosas.',
    duracao: '50 a 60 minutos',
    focoClinico: 'Alinhamento vertebral e alívio mecânico imediato',
    indicacoes: [
      'Hérnia de disco e protusões lombares',
      'Dor irradiada no nervo ciático',
      'Cervicalgia, torcicolo e cefaleia tensional',
      'Desequilíbrios posturais e restrição articular',
    ],
    beneficioPrincipal: 'Restaura a biomecânica articular sem uso contínuo de medicamentos.',
    imagem: quiroImg,
    imagemAlt:
      'Especialista realizando avaliação e alinhamento vertebral preciso em clínica de quiropraxia',
  },
  {
    id: 'acupuntura',
    numero: '02.',
    titulo: 'Acupuntura Terapêutica',
    subtitulo: 'Neuromodulação periférica e controle da dor',
    resumo:
      'Estímulo de pontos neuroanatômicos com agulhas filiformes estéreis para liberação de endorfinas endógenas, redução de processos inflamatórios e regulação neural.',
    duracao: '50 minutos',
    focoClinico: 'Analgesia clínica e equilíbrio neurovegetativo',
    indicacoes: [
      'Dores crônicas refratárias e fibromialgia',
      'Enxaqueca e nevralgias cervicais',
      'Distúrbios do sono associados à dor',
      'Inflamações tendíneas e bursites',
    ],
    beneficioPrincipal: 'Acalma a hiperexcitabilidade neural e potencializa o ajuste quiroprático.',
    imagem: acupunturaImg,
    imagemAlt:
      'Agulhas estéreis de acupuntura em bandeja de porcelana ao lado de quartzo rosa e ventosas cerâmicas',
  },
  {
    id: 'ventosaterapia',
    numero: '03.',
    titulo: 'Ventosaterapia Miofascial',
    subtitulo: 'Descompressão tecidual por pressão negativa',
    resumo:
      'Aplicação controlada de sucção terapêutica que eleva a fáscia muscular, amplia a microcirculação local e dissolve aderências em pontos-gatilho profundos.',
    duracao: '35 a 45 minutos',
    focoClinico: 'Oxigenação muscular e soltura miofascial profunda',
    indicacoes: [
      'Contraturas paravertebrais e trapézio tenso',
      'Rigidez escapular por trabalho em computador',
      'Recuperação muscular pós-sobrecarga física',
      'Pontos-gatilho miofasciais persistentes',
    ],
    beneficioPrincipal: 'Prepara a musculatura profunda para ajustes vertebrais mais fluidos e confortáveis.',
    imagem: acupunturaImg,
    imagemAlt:
      'Instrumentos de ventosaterapia cerâmica e preparação clínica para descompressão miofascial',
  },
];

export function SpecialtiesSection({
  onSelectSpecialtyForContact,
}: SpecialtiesSectionProps) {
  const [selectedId, setSelectedId] = useState<Especialidade['id']>('quiropraxia');
  const activeSpecialty =
    ESPECIALIDADES.find((item) => item.id === selectedId) ?? ESPECIALIDADES[0];

  return (
    <section
      id="especialidades"
      className="border-b border-border bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-primary-deep sm:text-sm">
              Especialidades Terapêuticas · Protocolos Integrados
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground">
              Três frentes clínicas para interromper o ciclo da dor.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Cada atendimento combina avaliação ortopédica e neurofuncional para escolher
              a técnica exata que seu quadro exige — de forma isolada ou complementar.
            </p>
          </div>
        </motion.div>

        {/* Grade Assimétrica Bento (12 colunas) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Card 01: Destaque Largo (7 colunas) */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:-translate-y-1 hover:border-border-quartz hover:shadow-card lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 md:h-full">
              <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-6">
                <div>
                  <p className="text-xs font-medium text-primary-deep">
                    {ESPECIALIDADES[0].numero} {ESPECIALIDADES[0].subtitulo}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {ESPECIALIDADES[0].titulo}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {ESPECIALIDADES[0].resumo}
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary-deep" aria-hidden="true" />
                    <span>Sessão média: {ESPECIALIDADES[0].duracao}</span>
                  </div>
                  <div className="mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => onSelectSpecialtyForContact('quiropraxia')}
                    >
                      Entrar em contato
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6">
                <ClinicalImage
                  src={ESPECIALIDADES[0].imagem}
                  alt={ESPECIALIDADES[0].imagemAlt}
                  fallbackTitle={ESPECIALIDADES[0].titulo}
                  className="h-64 w-full md:h-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </motion.article>

          {/* Card 02: Acupuntura (5 colunas) */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-all duration-300 hover:-translate-y-1 hover:border-border-quartz hover:shadow-card lg:col-span-5"
          >
            <ClinicalImage
              src={ESPECIALIDADES[1].imagem}
              alt={ESPECIALIDADES[1].imagemAlt}
              fallbackTitle={ESPECIALIDADES[1].titulo}
              className="h-52 w-full sm:h-56"
              imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <p className="text-xs font-medium text-primary-deep">
                  {ESPECIALIDADES[1].numero} {ESPECIALIDADES[1].subtitulo}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {ESPECIALIDADES[1].titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {ESPECIALIDADES[1].resumo}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <span className="text-xs font-medium text-muted-foreground">
                  {ESPECIALIDADES[1].duracao}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onSelectSpecialtyForContact('acupuntura')}
                >
                  Entrar em contato
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </motion.article>

          {/* Card 03: Ventosaterapia Miofascial (12 colunas horizontal) */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.14, ease: 'easeOut' }}
            className="overflow-hidden rounded-2xl border border-border bg-surface-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-quartz hover:shadow-card sm:p-8 lg:col-span-12"
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-medium text-primary-deep">
                  {ESPECIALIDADES[2].numero} {ESPECIALIDADES[2].subtitulo}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {ESPECIALIDADES[2].titulo}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {ESPECIALIDADES[2].resumo}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 border-y border-border py-5 sm:grid-cols-2 lg:col-span-4 lg:border-y-0 lg:border-x lg:px-8 lg:py-0">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Foco clínico</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {ESPECIALIDADES[2].focoClinico}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Duração média</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {ESPECIALIDADES[2].duracao}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 lg:col-span-3 lg:items-end">
                <p className="text-xs leading-relaxed text-muted-foreground lg:text-right">
                  {ESPECIALIDADES[2].beneficioPrincipal}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onSelectSpecialtyForContact('ventosaterapia')}
                >
                  Entrar em contato
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Explorador Interativo de Indicações Clínicas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-10 rounded-2xl border border-border-quartz bg-clinical-band p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-medium text-primary-deep">
                Indicador Clínico Interativo
              </p>
              <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Consulte as indicações por especialidade
              </h3>
            </div>

            {/* Controles segmentados interativos (botões funcionais) */}
            <div
              role="tablist"
              aria-label="Selecionar especialidade para ver indicações"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-border bg-surface-elevated p-1"
            >
              {ESPECIALIDADES.map((item) => {
                const isActive = item.id === selectedId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedId(item.id)}
                    className={`min-h-10 rounded-lg px-4 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      isActive
                        ? 'bg-primary-deep text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-surface-quartz hover:text-foreground'
                    }`}
                  >
                    {item.titulo}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            aria-label={activeSpecialty.titulo}
            className="mt-6 grid grid-cols-1 gap-6 border-t border-border/80 pt-6 lg:grid-cols-12 lg:items-center"
          >
            <div className="lg:col-span-7">
              <p className="text-xs font-medium text-muted-foreground">
                Principais quadros atendidos em {activeSpecialty.titulo}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeSpecialty.indicacoes.map((indicacao) => (
                  <li
                    key={indicacao}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep"
                      aria-hidden="true"
                    />
                    <span>{indicacao}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-4 rounded-xl border border-border bg-surface-elevated p-5 lg:col-span-5">
              <div className="flex items-start gap-3">
                <Sparkles
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-foreground">
                  {activeSpecialty.beneficioPrincipal}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                <span className="text-xs text-muted-foreground">
                  Duração: {activeSpecialty.duracao}
                </span>
                <Button
                  size="sm"
                  onClick={() => onSelectSpecialtyForContact(activeSpecialty.id)}
                >
                  Entrar em contato
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
