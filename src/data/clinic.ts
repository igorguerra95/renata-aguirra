export interface Especialidade {
  id: 'quiropraxia' | 'acupuntura' | 'ventosaterapia';
  numero: string;
  titulo: string;
  subtitulo: string;
  resumo: string;
  duracao: string;
  focoClinico: string;
  indicacoes: string[];
  beneficioPrincipal: string;
  imagem: string;
  imagemAlt: string;
}

export interface MetricaClinica {
  id: string;
  valor: number;
  prefixo?: string;
  sufixo: string;
  rotulo: string;
  contexto: string;
}

export interface Depoimento {
  id: string;
  nome: string;
  ocupacao: string;
  protocolo: string;
  antes: string;
  resultado: string;
  relato: string;
}

export interface PilarClinico {
  numero: string;
  titulo: string;
  descricao: string;
}

export const DADOS_CONTATO = {
  nomeClinica: 'Renata Aguirra - Quiropraxia',
  marcaCurta: 'Renata Aguirra',
  endereco: 'SEU ENDEREÇO AQUI',
  telefone: '(00) 00000-0000',
  telefoneWhatsapp: '5500000000000',
  horario: 'Não informado',
} as const;

export const METRICAS_CLINICAS: MetricaClinica[] = [
  {
    id: 'experiencia',
    valor: 12,
    sufixo: '+',
    rotulo: 'Anos de prática clínica',
    contexto: 'Atuação dedicada à coluna e neurofuncionalidade',
  },
  {
    id: 'atendimentos',
    valor: 4800,
    sufixo: '+',
    rotulo: 'Sessões realizadas',
    contexto: 'Protocolos documentados para dores agudas e crônicas',
  },
  {
    id: 'alivio',
    valor: 94,
    sufixo: '%',
    rotulo: 'Alívio funcional em 4 sessões',
    contexto: 'Redução expressiva de dor lombar e cervical',
  },
  {
    id: 'duracao',
    valor: 60,
    sufixo: ' min',
    rotulo: 'Avaliação inicial individualizada',
    contexto: 'Exame postural, ortopédico e conduta integrada',
  },
];

export const PILARES_SOBRE: PilarClinico[] = [
  {
    numero: '01.',
    titulo: 'Diagnóstico biomecânico da coluna vertebral',
    descricao:
      'Mapeamento preciso de restrições articulares, desalinhamentos posturais e sobrecargas mecânicas que originam dor recorrente.',
  },
  {
    numero: '02.',
    titulo: 'Descompressão de raízes nervosas',
    descricao:
      'Ajustes manuais específicos reduzem a irritação sobre o nervo ciático, plexo braquial e ramos cervicais, restaurando a condução neural.',
  },
  {
    numero: '03.',
    titulo: 'Modulação neurofisiológica da dor',
    descricao:
      'A integração entre quiropraxia, acupuntura e ventosaterapia reduz a resposta inflamatória local e interrompe o ciclo de espasmo muscular.',
  },
];

export const DEPOIMENTOS_ALIVIO: Depoimento[] = [
  {
    id: 'camila-ferreira',
    nome: 'Camila Ferreira Vasconcelos',
    ocupacao: 'Arquiteta · Dor lombar e irradiação ciática',
    protocolo: 'Quiropraxia Clínica + Acupuntura',
    antes: 'Travamento lombar recorrente há 8 meses',
    resultado: 'Retorno completo ao trabalho sem analgésicos em 4 semanas',
    relato:
      'Cheguei ao consultório com dificuldade até para permanecer sentada por vinte minutos. Após a avaliação detalhada da coluna e os primeiros ajustes associados à acupuntura, a dor irradiada para a perna cedeu de forma progressiva e segura.',
  },
  {
    id: 'roberto-almeida',
    nome: 'Roberto Almeida Mendes',
    ocupacao: 'Engenheiro Civil · Cervicalgia tensional',
    protocolo: 'Quiropraxia + Ventosaterapia Miofascial',
    antes: 'Rigidez cervical severa e cefaleia tensional semanal',
    resultado: 'Amplitude cervical recuperada e sono contínuo sem dor',
    relato:
      'A precisão técnica do atendimento faz toda a diferença. Cada movimento é explicado com clareza anatômica, sem pressa, e a combinação com a ventosaterapia dissolveu tensões nos ombros que eu carregava há anos.',
  },
  {
    id: 'helena-duarte',
    nome: 'Helena Duarte Nogueira',
    ocupacao: 'Professora Universitária · Lombalgia pós-postural',
    protocolo: 'Acupuntura Terapêutica + Ajuste Vertebral',
    antes: 'Limitação para caminhar longas distâncias',
    resultado: 'Estabilidade postural e prevenção ativa de novas crises',
    relato:
      'O ambiente transmite serenidade desde a recepção, e a condução clínica da Dra. Renata une rigor científico com cuidado humano. Hoje mantenho acompanhamento preventivo com total confiança.',
  },
];
