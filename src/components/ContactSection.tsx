import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  CalendarCheck2,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react';
import { Button } from './ui/button';
import { DADOS_CONTATO, type Especialidade } from '../data/clinic';

interface ContactSectionProps {
  preselectedSpecialty: Especialidade['id'];
}

interface FormState {
  nome: string;
  telefone: string;
  especialidade: Especialidade['id'];
  turno: 'manha' | 'tarde' | 'flexivel';
  queixa: string;
}

interface FormErrors {
  nome?: string;
  telefone?: string;
  queixa?: string;
}

const LABELS_ESPECIALIDADE: Record<Especialidade['id'], string> = {
  quiropraxia: 'Quiropraxia Clínica',
  acupuntura: 'Acupuntura Terapêutica',
  ventosaterapia: 'Ventosaterapia Miofascial',
};

const LABELS_TURNO: Record<FormState['turno'], string> = {
  manha: 'Período da manhã',
  tarde: 'Período da tarde',
  flexivel: 'Horário flexível',
};

function formatPhoneBr(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactSection({ preselectedSpecialty }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    nome: '',
    telefone: '',
    especialidade: preselectedSpecialty,
    turno: 'flexivel',
    queixa: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    setForm((prev) => ({ ...prev, especialidade: preselectedSpecialty }));
  }, [preselectedSpecialty]);

  const validate = (state: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (state.nome.trim().length < 3) {
      nextErrors.nome = 'Informe seu nome completo para registrarmos a avaliação.';
    }
    const digits = state.telefone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.telefone = 'Informe um telefone ou WhatsApp válido com DDD.';
    }
    if (state.queixa.trim().length < 8) {
      nextErrors.queixa =
        'Descreva brevemente a região da dor ou objetivo do atendimento.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;
    setSubmittedData(form);
  };

  const buildWhatsappHref = (data: FormState) => {
    const mensagem = `Olá, gostaria de entrar em contato com Renata Aguirra - Quiropraxia.\nNome: ${data.nome}\nTelefone: ${data.telefone}\nEspecialidade: ${LABELS_ESPECIALIDADE[data.especialidade]}\nPreferência: ${LABELS_TURNO[data.turno]}\nQueixa principal: ${data.queixa}`;
    return `https://wa.me/${DADOS_CONTATO.telefoneWhatsapp}?text=${encodeURIComponent(
      mensagem
    )}`;
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setForm({
      nome: '',
      telefone: '',
      especialidade: preselectedSpecialty,
      turno: 'flexivel',
      queixa: '',
    });
  };

  return (
    <section
      id="contato"
      className="bg-surface bg-quartz-veil py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna Esquerda: Informações Institucionais & Canal Direto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-medium tracking-wide text-primary-deep sm:text-sm">
                Contato &amp; Agendamento Online
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.5vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground">
                Agende sua avaliação clínica.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Preencha o pré-agendamento ao lado com sua queixa principal ou utilize o
                canal direto pelo telefone para definir o melhor horário de atendimento.
              </p>

              {/* Bloco de Informações Oficiais */}
              <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-surface-elevated">
                <div className="flex items-start gap-3.5 p-5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-deep"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Endereço</p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                      {DADOS_CONTATO.endereco}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-5">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-deep"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Telefone / WhatsApp
                    </p>
                    <a
                      href={`tel:${DADOS_CONTATO.telefone.replace(/\D/g, '')}`}
                      className="mt-0.5 inline-block text-sm font-semibold text-foreground underline-offset-4 hover:text-primary-deep hover:underline tabular-nums"
                    >
                      {DADOS_CONTATO.telefone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-5">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-deep"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Horário de atendimento
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                      {DADOS_CONTATO.horario}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-border-quartz bg-surface-quartz/60 p-5">
              <p className="text-xs font-medium text-primary-deep">
                Etapas da primeira consulta
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                Anamnese clínica · Testes ortopédicos e neurológicos · Primeiro ajuste ou
                conduta terapêutica personalizada.
              </p>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Agendamento Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-card sm:p-8 lg:p-10">
              {submittedData ? (
                <div className="space-y-6 py-4" role="status" aria-live="polite">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success-soft text-success">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-success">
                      Pré-agendamento registrado com sucesso
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                      Solicitação pronta para confirmação.
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Recebemos seus dados preliminares. Para agilizar o encaixe na
                      agenda clínica, encaminhe o resumo abaixo diretamente pelo WhatsApp
                      ou aguarde nosso retorno pelo telefone informado.
                    </p>
                  </div>

                  <div className="divide-y divide-border rounded-xl border border-border bg-surface p-4 text-sm">
                    <div className="flex justify-between gap-4 py-2">
                      <span className="text-muted-foreground">Paciente</span>
                      <span className="font-medium text-foreground text-right">
                        {submittedData.nome}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 py-2">
                      <span className="text-muted-foreground">Telefone</span>
                      <span className="font-medium text-foreground tabular-nums">
                        {submittedData.telefone}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 py-2">
                      <span className="text-muted-foreground">Especialidade</span>
                      <span className="font-medium text-foreground text-right">
                        {LABELS_ESPECIALIDADE[submittedData.especialidade]}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 py-2">
                      <span className="text-muted-foreground">Preferência</span>
                      <span className="font-medium text-foreground text-right">
                        {LABELS_TURNO[submittedData.turno]}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={buildWhatsappHref(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-deep px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary-deep-hover whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Entrar em contato via WhatsApp
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>

                    <Button variant="outline" size="lg" onClick={handleReset}>
                      Nova solicitação
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        Agendamento Online
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                        Preencha os campos para priorizarmos seu atendimento.
                      </p>
                    </div>
                    <CalendarCheck2
                      className="h-6 w-6 shrink-0 text-primary-deep"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contato-nome"
                        className="block text-xs font-medium text-foreground sm:text-sm"
                      >
                        Nome completo
                      </label>
                      <input
                        id="contato-nome"
                        name="nome"
                        type="text"
                        autoComplete="name"
                        value={form.nome}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, nome: e.target.value }));
                          if (errors.nome) setErrors((prev) => ({ ...prev, nome: undefined }));
                        }}
                        placeholder="Ex.: Mariana Souza Lima"
                        aria-invalid={Boolean(errors.nome)}
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary-deep focus:outline-none focus:ring-2 focus:ring-ring/20"
                      />
                      {errors.nome && (
                        <p className="mt-1.5 text-xs text-destructive" role="alert">
                          {errors.nome}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contato-telefone"
                        className="block text-xs font-medium text-foreground sm:text-sm"
                      >
                        Telefone / WhatsApp
                      </label>
                      <input
                        id="contato-telefone"
                        name="telefone"
                        type="tel"
                        autoComplete="tel"
                        value={form.telefone}
                        onChange={(e) => {
                          const masked = formatPhoneBr(e.target.value);
                          setForm((prev) => ({ ...prev, telefone: masked }));
                          if (errors.telefone) {
                            setErrors((prev) => ({ ...prev, telefone: undefined }));
                          }
                        }}
                        placeholder="(00) 00000-0000"
                        aria-invalid={Boolean(errors.telefone)}
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground tabular-nums placeholder:text-muted-foreground/70 transition-colors focus:border-primary-deep focus:outline-none focus:ring-2 focus:ring-ring/20"
                      />
                      {errors.telefone && (
                        <p className="mt-1.5 text-xs text-destructive" role="alert">
                          {errors.telefone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contato-especialidade"
                        className="block text-xs font-medium text-foreground sm:text-sm"
                      >
                        Especialidade desejada
                      </label>
                      <select
                        id="contato-especialidade"
                        name="especialidade"
                        value={form.especialidade}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            especialidade: e.target.value as Especialidade['id'],
                          }))
                        }
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground transition-colors focus:border-primary-deep focus:outline-none focus:ring-2 focus:ring-ring/20"
                      >
                        <option value="quiropraxia">Quiropraxia Clínica</option>
                        <option value="acupuntura">Acupuntura Terapêutica</option>
                        <option value="ventosaterapia">Ventosaterapia Miofascial</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contato-turno"
                        className="block text-xs font-medium text-foreground sm:text-sm"
                      >
                        Preferência de período
                      </label>
                      <select
                        id="contato-turno"
                        name="turno"
                        value={form.turno}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            turno: e.target.value as FormState['turno'],
                          }))
                        }
                        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3.5 text-sm text-foreground transition-colors focus:border-primary-deep focus:outline-none focus:ring-2 focus:ring-ring/20"
                      >
                        <option value="manha">Período da manhã</option>
                        <option value="tarde">Período da tarde</option>
                        <option value="flexivel">Horário flexível</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contato-queixa"
                      className="block text-xs font-medium text-foreground sm:text-sm"
                    >
                      Queixa principal ou região da dor
                    </label>
                    <textarea
                      id="contato-queixa"
                      name="queixa"
                      rows={3}
                      value={form.queixa}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, queixa: e.target.value }));
                        if (errors.queixa) setErrors((prev) => ({ ...prev, queixa: undefined }));
                      }}
                      placeholder="Ex.: Dor lombar com irradiação para a perna direita há duas semanas."
                      aria-invalid={Boolean(errors.queixa)}
                      className="mt-2 w-full rounded-lg border border-border bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary-deep focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                    {errors.queixa && (
                      <p className="mt-1.5 text-xs text-destructive" role="alert">
                        {errors.queixa}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      Atendimento particular com avaliação clínica individualizada.
                    </p>
                    <Button type="submit" size="lg">
                      Entrar em contato
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
