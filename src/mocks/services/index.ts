import { IServicesProps } from "@/presentation/modules/landing/components/ServicesSection/types";

export const servicesMock: IServicesProps = {
  data: {
    title: "Nossos serviços",
    cards: [
      {
        id: "1",
        title: "Branding",
        description:
          "O branding é a alma da sua marca. Ele molda a percepção, cria conexões emocionais e diferencia sua marca.",
        tags: [
          "consultoria de branding",
          "experiência do cliente",
          "design estratégico de identidade visual",
          "treinamentos e workshops para times",
        ],
      },
      {
        id: "2",
        title: "Comunicação",
        description:
          "A comunicação para nós gera vínculos. É a linguagem que transcende, transmitindo não apenas mensagens, mas emoções e significados.",
        tags: [
          "assessoria de comunicação",
          "criação de conteúdo",
          "pr e assessoria de imprensa",
          "planejamento e gestão de redes sociais",
        ],
      },
      {
        id: "3",
        title: "Criatividade",
        description:
          "A criatividade é a força propulsora da inovação. É a chama que acende a originalidade, a imaginação que desafia os limites convencionais.",
        tags: [
          "cobertura de eventos",
          "ensaio fotográfico",
          "webdesign & seo",
          "direção criativa e produção audivisual",
        ],
      },
    ],
  },
};
