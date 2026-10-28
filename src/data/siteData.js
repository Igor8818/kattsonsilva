import {
  Briefcase,
  Building2,
  ShieldCheck,
  Scale,
  Users,
  GraduationCap,
  Award,
  FileText,
  HeartHandshake,
  Landmark,
  Gavel,
  BadgeCheck,
} from 'lucide-react';

// ============================================================================
// DADOS OFICIAIS — DR. KATTSON SILVA | KATTSON SILVA ADVOGADOS ASSOCIADOS
// OAB/BA 47.242 | Lattes CNPq ID: 0386822377510664
// Instagram Oficial: @kattsonsilva.advocacia
// ============================================================================

export const PROFILE_INFO = {
  name: 'Dr. Kattson Silva',
  fullName: 'Kattson Danesse Barbosa da Silva',
  oab: 'OAB/BA 47.242',
  shortName: 'Dr. Kattson Silva',
  role: 'Advogado • Sócio-Fundador',
  tagline: 'Defesa combativa, inteligência jurídica estratégica e compromisso intransigente com os seus direitos.',
  education: 'UNIME Itabuna • Pós-Graduado em Direito do Trabalho, Cível e Previdenciário (CESUPI) • IMADEC',
  instagramUrl: 'https://www.instagram.com/kattsonsilva.advocacia/',
  instagramHandle: '@kattsonsilva.advocacia',
  officeName: 'Kattson Silva Advogados Associados',
  officeShort: 'Kattson Silva Advogados',
  officeSince: 'Advocacia Consolidada & Atuação Regional',
  phoneDirect: '+55 (73) 98800-0000', // Canal principal direto
  whatsappNumber: '5573988000000',
  whatsappUrl: 'https://wa.me/?text=Ol%C3%A1%2C%20Dr.%20Kattson%20Silva!%20Gostaria%20de%20agendar%20uma%20consulta%20jur%C3%ADdica.',
  officePhone: '(73) 3613-0000',
  emailOffice: 'contato@kattsonsilva.adv.br',
  city: 'Itabuna & Ilhéus — Bahia',
  coverage: 'Atendimento presencial no sul da Bahia e telepresencial em todo o Brasil',
  lattesUrl: 'http://lattes.cnpq.br/0386822377510664',
  lattesId: '0386822377510664',
};

export const DEFAULT_PHOTOS = {
  hero: './images/kattson-silva-hero.jpg',
  about: './images/kattson-office-portrait.jpg',
  team: './images/equipe-kattson-silva.jpg',
  plaque: './images/kattson-escritorio.jpg',
};

export const METRICAS_DESTAQUE = [
  {
    value: 'OAB/BA',
    label: '47.242',
    description: 'Inscrição regular e atuação firme',
  },
  {
    value: 'Pós-Graduado',
    label: 'Trabalho & Previdenciário',
    description: 'Especialista pela CESUPI e IMADEC',
  },
  {
    value: '+10 Anos',
    label: 'De Experiência Jurídica',
    description: 'Dedicação ao contencioso e consultivo',
  },
];

export const AREAS_ATUACAO = [
  {
    id: 'direito-do-trabalho',
    title: 'Direito do Trabalho & Dano Moral Trabalhista',
    shortDesc:
      'Defesa combativa para trabalhadores e consultoria preventiva para empresas: horas extras, verbas rescisórias, adicionais de insalubridade, assédio e dano moral laboral.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80',
    icon: Briefcase,
    fullContent: [
      'As relações de trabalho exigem técnica apurada e profundo domínio jurisprudencial. Nossa atuação é alicerçada na pesquisa acadêmica e vivência prática sobre Dano Moral Trabalhista, garantindo que ofensas à dignidade do trabalhador e descumprimentos contratuais sejam rigorosamente reparados.',
      'Para empresas e empregadores, estruturamos diagnósticos preventivos, compliance trabalhista e mitigação de passivos em rotinas de contratação, remuneração e rescisões.',
      'Perante a Justiça do Trabalho (TRT-5 e instâncias superiores), atuamos com oratória combativa, produção probatória qualificada e negociação estratégica de acordos.'
    ],
    highlights: [
      'Reclamações trabalhistas: horas extraordinárias, equiparação e verbas rescisórias',
      'Indenizações por Dano Moral Trabalhista e assédio moral ou sexual no trabalho',
      'Adicionais de periculosidade, insalubridade e acidentes de trabalho',
      'Consultoria preventiva empresarial, auditoria de folha e defesa patronal'
    ]
  },
  {
    id: 'direito-previdenciario',
    title: 'Direito Previdenciário & Aposentadorias',
    shortDesc:
      'Planejamento previdenciário e concessão ágil de aposentadorias, pensões, auxílios por incapacidade e BPC/LOAS perante o INSS e a Justiça Federal.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
    icon: ShieldCheck,
    fullContent: [
      'O acesso aos benefícios da Seguridade Social é um direito sagrado conquistado após anos de dedicação laborativa. Com as sucessivas reformas previdenciárias, planejar o momento correto de requerer a aposentadoria tornou-se indispensável para não perder valor monetário.',
      'Oferecemos cálculo previdenciário minucioso, averbação de tempo rural, reconhecimento de atividade especial (insalubre/perigosa) e correção de CNIS.',
      'Em casos de negativa indevida pelo INSS, ajuizamos ações na Justiça Federal para restabelecimento imediato de auxílio-doença, concessão de aposentadoria por invalidez e BPC/LOAS para idosos e pessoas com deficiência.'
    ],
    highlights: [
      'Planejamento Previdenciário e simulação do melhor benefício financeiro',
      'Aposentadoria Especial para profissionais com exposição a agentes nocivos',
      'Aposentadoria por Idade, Tempo de Contribuição e Transição das Reformas',
      'Benefício Assistencial BPC/LOAS, Auxílio-Incapacidade e Pensão por Morte'
    ]
  },
  {
    id: 'direito-civel-e-contratos',
    title: 'Direito Cível & Responsabilidade Civil',
    shortDesc:
      'Ações indenizatórias, resolução estratégica de disputas patrimoniais, elaboração de contratos complexos, inventários e cobranças executivas.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
    icon: Building2,
    fullContent: [
      'O Direito Cível é a base da segurança jurídica nas relações interpessoais e corporativas. Atuamos com foco na prevenção de litígios e na célere reparação de prejuízos decorrentes do inadimplemento ou de atos ilícitos.',
      'Assessoramos na redação de contratos civis e comerciais seguros, negociações extrajudiciais e execuções de títulos de crédito.',
      'No campo familiar e sucessório, conduzimos inventários consensuais ou contenciosos e partilhas com acolhimento, agilidade e proteção do patrimônio familiar.'
    ],
    highlights: [
      'Ações de responsabilidade civil e reparação de danos morais e materiais',
      'Redação, análise e rescisão de contratos civis e empresariais',
      'Execução de dívidas, recuperação de créditos e cobrança judicial',
      'Inventários, partilhas judiciais ou em cartório e planejamento patrimonial'
    ]
  },
  {
    id: 'direito-do-consumidor',
    title: 'Direito do Consumidor & Defesa Contra Abusos',
    shortDesc:
      'Combate a cobranças indevidas, fraudes bancárias, negativas de planos de saúde, cancelamento de voos e negativação ilícita nos órgãos de proteção ao crédito.',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80',
    icon: Scale,
    fullContent: [
      'O consumidor frequentemente se encontra em posição de vulnerabilidade perante grandes corporações, concessionárias públicas e bancos.',
      'Nossa banca atua com firmeza para reequilibrar essa relação, ajuizando medidas de urgência (liminares) para restabelecimento de serviços essenciais, cancelamento de contratos fraudulentos e exclusão de cadastros indevidos no SPC/Serasa.',
      'Garantimos a devolução em dobro de quantias retidas indevidamente e a indenização justa pelos transtornos sofridos decorrentes de falhas na prestação de serviços.'
    ],
    highlights: [
      'Indenização por inscrição indevida em cadastros de inadimplentes (SPC/Serasa)',
      'Golpes cibernéticos, fraudes bancárias e juros abusivos em financiamentos',
      'Cancelamento ou atraso injustificado de voos e extravio de bagagens',
      'Ações contra concessionárias de água, energia e operadoras de telefonia'
    ]
  }
];

export const EQUIPE_INFO = {
  headline: 'Uma banca jurídica estruturada para defender os seus interesses.',
  description:
    'No escritório Kattson Silva Advogados Associados, unimos a liderança técnica do Dr. Kattson Silva a uma equipe jurídica qualificada, focada em entregar soluções assertivas, ágeis e personalizadas para pessoas físicas e jurídicas.',
  members: [
    {
      name: 'Dr. Kattson Silva',
      role: 'Sócio-Fundador & Diretor Jurídico',
      badge: 'OAB/BA 47.242',
      image: './images/kattson-silva-hero.jpg',
      bio:
        'Advogado pós-graduado em Direito do Trabalho, Cível e Previdenciário pela CESUPI, com especialização avançada em Prática Trabalhista (IMADEC) e graduação pela UNIME Itabuna. Lidera a estratégia contenciosa e institucional da banca.',
      specialties: ['Direito do Trabalho', 'Direito Previdenciário', 'Contencioso Estratégico']
    },
    {
      name: 'Corpo Jurídico Associado',
      role: 'Advogados Associados & Consultores',
      badge: 'Equipe Especializada',
      image:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
      bio:
        'Equipe multidisciplinar composta por advogados atuantes nas searas Cível, Consumidor e Previdenciária, prestando suporte célere, elaboração de peças técnicas, cálculos e acompanhamento diário das demandas no tribunal.',
      specialties: ['Prática Processual', 'Cálculos Previdenciários', 'Defesa do Consumidor']
    },
    {
      name: 'Controladoria & Atendimento',
      role: 'Gestão Processual & Suporte ao Cliente',
      badge: 'Atendimento Ágil',
      image:
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
      bio:
        'Núcleo responsável pelo acolhimento humano inicial, triagem documental e informação transparente ao cliente em tempo real sobre o andamento e desdobramentos de cada processo.',
      specialties: ['Triagem de Casos', 'Comunicação Transparente', 'Prazos Judiciais']
    }
  ]
};

export const CREDENCIAIS_TABS = {
  formacao: {
    label: 'Formação & Especializações',
    icon: GraduationCap,
    items: [
      {
        period: 'Especialização',
        title: 'Pós-Graduação em Prática Trabalhista',
        institution: 'Instituto IMADEC Ensino Jurídico (340h)',
        description:
          'Aprofundamento de alto nível em estratégias processuais trabalhistas, audiências, recursos nos Tribunais Regionais e Tribunal Superior do Trabalho (TST).'
      },
      {
        period: '2016 — 2018',
        title: 'Pós-Graduação em Direito do Trabalho, Cível e Previdenciário',
        institution: 'CESUPI — Faculdade de Ilhéus (432h)',
        description:
          'Especialização Lato Sensu com ênfase na defesa de direitos fundamentais. Título da pesquisa e monografia: "Dano Moral Trabalhista".'
      },
      {
        period: '2010 — 2015',
        title: 'Bacharelado em Direito',
        institution: 'IUNI Educacional — UNIME Itabuna',
        description:
          'Graduação em Ciências Jurídicas com Trabalho de Conclusão de Curso dedicado ao tema "Valoração do Dano Moral no Âmbito da Justiça do Trabalho".'
      }
    ]
  },
  escritorio: {
    label: 'Escritório & Prática Forense',
    icon: Building2,
    items: [
      {
        period: 'Atuação Consolidada',
        title: 'Kattson Silva Advogados Associados',
        institution: 'Itabuna - BA • Atendimento Estadual e Nacional',
        description:
          'Liderança de banca jurídica com atuação marcante perante a Justiça do Trabalho (TRT-5), Justiça Federal e Justiça Comum da Bahia.'
      },
      {
        period: 'Desde 2015',
        title: 'Advogado Sócio-Fundador',
        institution: 'Ordem dos Advogados do Brasil (OAB/BA 47.242)',
        description:
          'Mais de uma década de exercício ininterrupto da advocacia pautada na ética, independência técnica e combatividade na defesa de clientes.'
      },
      {
        period: 'Prática Forense',
        title: 'Contencioso e Negociações Estratégicas',
        institution: 'Tribunais Regionais e Varas do Trabalho',
        description:
          'Vasta vivência em sustentação oral, audiências de instrução e conciliação, e celebração de acordos que maximizam os direitos representados.'
      }
    ]
  },
  pesquisa: {
    label: 'Pesquisa & Temas de Destaque',
    icon: Award,
    items: [
      {
        period: 'Especialidade',
        title: 'Dano Moral no Âmbito da Justiça do Trabalho',
        institution: 'Monografia de Pós-Graduação (CESUPI)',
        description:
          'Estudo sobre a quantificação, critérios de arbitramento e reparação integral por danos à honra, à imagem e à integridade psíquica do trabalhador.'
      },
      {
        period: 'Pesquisa Jurídica',
        title: 'Valoração do Dano Moral Laboral',
        institution: 'Trabalho Acadêmico de Conclusão (UNIME)',
        description:
          'Análise comparativa das decisões dos Tribunais do Trabalho frente aos parâmetros da Constituição Federal e da Consolidação das Leis do Trabalho.'
      },
      {
        period: 'CNPq',
        title: 'Currículo Lattes Certificado',
        institution: 'Plataforma Lattes / CNPq',
        description:
          'Registro acadêmico oficial comprovando a trajetória contínua de aperfeiçoamento e especializações no ramo do Direito.'
      }
    ]
  }
};

export const ARTIGOS_LATTES = [
  {
    id: 'dano-moral-trabalhista',
    category: 'Direito do Trabalho & Dignidade Humana',
    year: 'Artigo Especializado',
    title: 'A Valoração do Dano Moral no Âmbito da Justiça do Trabalho',
    excerpt:
      'Uma análise dos critérios técnicos e constitucionais para fixação de indenizações justas diante do assédio moral e violações laborais.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min de leitura',
    reference:
      'Pesquisa acadêmica e monografia de especialização — Faculdade de Ilhéus (CESUPI) e UNIME Itabuna. Autor: SILVA, K.',
    content: [
      'O dano moral nas relações de emprego decorre da violação a direitos da personalidade do trabalhador, como honra, intimidade, imagem e integridade física ou psíquica.',
      'A quantificação da indenização não pode ser tarifada de forma que desampare a vítima, devendo observar a extensão do agravo, a capacidade financeira do ofensor e o caráter pedagógico e punitivo da condenação.',
      'Nossa banca defende a aplicação rigorosa dos precedentes do TST e do STF para assegurar reparações integrais e proporcionais à gravidade do ilícito.'
    ]
  },
  {
    id: 'planejamento-previdenciario-inss',
    category: 'Direito Previdenciário & Seguridade',
    year: 'Guia Prático',
    title: 'Como o Planejamento Previdenciário Evita Prejuízos na Aposentadoria',
    excerpt:
      'Descubra a importância de analisar regras de transição, averbação de tempo especial e correção do CNIS antes de solicitar o benefício.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min de leitura',
    reference:
      'Artigo de orientação institucional — Kattson Silva Advogados Associados.',
    content: [
      'Dar entrada na aposentadoria sem um cálculo prévio minucioso é um dos erros mais comuns e onerosos que os segurados do INSS cometem.',
      'A escolha precipitada da regra de transição pode gerar uma perda de até 40% no valor do benefício mensal pelo resto da vida.',
      'Com o planejamento previdenciário, avaliam-se todas as possibilidades legais, corrigem-se inconsistências no extrato previdenciário (CNIS) e define-se a data exata para obter a melhor renda mensal possível.'
    ]
  },
  {
    id: 'fraudes-bancarias-direitos-consumidor',
    category: 'Direito do Consumidor & Proteção Bancária',
    year: 'Artigo Prático',
    title: 'Fraudes Bancárias e Empréstimos Não Contratados: Como Proteger seus Direitos',
    excerpt:
      'Orientações jurídicas sobre como cancelar contratos fraudulentos, suspender descontos indevidos e pleitear indenização por danos morais.',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min de leitura',
    reference:
      'Artigo informativo — Núcleo de Direito do Consumidor e Cível do escritório Kattson Silva Advogados.',
    content: [
      'O crescimento vertiginoso de golpes bancários, abertura de contas fraudulentas e empréstimos consignados não autorizados afeta milhares de cidadãos, especialmente aposentados.',
      'De acordo com a Súmula 479 do STJ, as instituições financeiras respondem objetivamente pelos danos gerados por fortuito interno relativo a fraudes e delitos praticados por terceiros no âmbito de operações bancárias.',
      'Diante do desconto indevido, é cabível ação com pedido liminar para cessar imediatamente os débitos, com devolução das quantias e compensação por danos morais.'
    ]
  }
];
