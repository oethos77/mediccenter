export interface FlagshipService {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: 'sun' | 'layers' | 'shield';
}

export interface ExtraService {
  id: string;
  title: string;
  description: string;
  icon: 'droplets' | 'smile' | 'scan';
}

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
}

export const CLINIC_INFO = {
  name: 'Medic Center',
  specialty: 'Clínica Odontológica',
  address: 'Brasília, 121 - Centro, Itacarambi',
  phoneDisplay: '(38) 92179-116',
  phoneHref: 'tel:+553892179116',
  whatsappDigits: '553892179116',
  croLabel: 'CRO-MG Ativo',
  instagramUrl: 'https://www.instagram.com/',
  heroImage: '/src/assets/images/hero_dental_clinic_1794890511781.jpg',
  dentistImage: '/src/assets/images/about_dentist_portrait_1794890514928.jpg',
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Olá, gostaria de agendar uma avaliação odontológica na Medic Center.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${CLINIC_INFO.whatsappDigits}?text=${text}`;
}

export const FLAGSHIP_SERVICES: FlagshipService[] = [
  {
    id: 'clareamento',
    index: '01',
    title: 'Clareamento Dental',
    subtitle: 'Estética conservadora',
    description:
      'Protocolos clínicos personalizados para devolver luminosidade natural ao esmalte sem sensibilidade excessiva.',
    image: '/src/assets/images/service_whitening_1794890512312.jpg',
    imageAlt:
      'Paciente sorrindo após tratamento de clareamento dental em consultório odontológico iluminado',
    icon: 'sun',
  },
  {
    id: 'ortodontia',
    index: '02',
    title: 'Ortodontia Invisível',
    subtitle: 'Alinhadores transparentes',
    description:
      'Alinhamento dentário discreto e previsível com placas transparentes removíveis planejadas digitalmente.',
    image: '/src/assets/images/service_aligners_1794890512717.jpg',
    imageAlt:
      'Par de alinhadores ortodônticos transparentes para ortodontia invisível sobre superfície clínica',
    icon: 'layers',
  },
  {
    id: 'implantes',
    index: '03',
    title: 'Implantes Dentários',
    subtitle: 'Reabilitação definitiva',
    description:
      'Reposição unitária ou total com implantes de titânio e próteses cerâmicas de alta estabilidade mastigatória.',
    image: '/src/assets/images/service_implants_1794890512733.jpg',
    imageAlt:
      'Coroa cerâmica e componente protético para implante dentário em bandeja de laboratório odontológico',
    icon: 'shield',
  },
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: 'limpeza',
    title: 'Profilaxia e Limpeza',
    description:
      'Remoção ultrassônica de tártaro, polimento e prevenção periodontal periódica.',
    icon: 'droplets',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatria',
    description:
      'Acompanhamento acolhedor e preventivo para a saúde bucal infantil.',
    icon: 'smile',
  },
  {
    id: 'scanner-3d',
    title: 'Scanner Intraoral 3D',
    description:
      'Moldagem digital de alta precisão, ágil e livre de massas desconfortáveis.',
    icon: 'scan',
  },
];

export const ALL_TREATMENT_OPTIONS = [
  'Avaliação Geral',
  'Clareamento Dental',
  'Ortodontia Invisível',
  'Implantes Dentários',
  'Profilaxia e Limpeza',
  'Odontopediatria',
  'Scanner Intraoral 3D',
] as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    initials: 'CR',
    name: 'Camila Ribeiro',
    treatment: 'Clareamento Dental',
    quote:
      'Ambiente impecável e atendimento sereno do início ao fim. O resultado ficou natural e sem desconforto.',
    rating: 5,
  },
  {
    id: 'dep-2',
    initials: 'RM',
    name: 'Rafael Mendes',
    treatment: 'Ortodontia Invisível',
    quote:
      'O planejamento digital trouxe clareza sobre cada etapa do alinhamento. Pontualidade e cuidado técnico exemplares.',
    rating: 5,
  },
  {
    id: 'dep-3',
    initials: 'AS',
    name: 'Aparecida Souza',
    treatment: 'Implantes Dentários',
    quote:
      'Recuperei a segurança ao mastigar e sorrir. Equipe atenciosa que explica cada procedimento com calma.',
    rating: 5,
  },
];
