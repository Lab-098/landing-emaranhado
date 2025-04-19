import { IAboutProps } from "@/presentation/modules/landing/components/AboutSection/types";

const BASE_URL = "/images/about";

export const aboutMock: IAboutProps = {
  data: {
    title: "Sobre nós",
    content: {
      title: "Nascemos para explorar o potencial criativo da sua marca",
      description:
        "Somos um lab de Branding, Comunicação e Criatividade. Pesquisamos, experimentamos e criamos estratégias únicas para potencializar sua marca, estabelecer conexões genuínas com sua comunidade e alcançar resultados consistentes.",
      tags: [
        "Branding",
        "Comunicação",
        "Criatividade",
        "Estratégias",
        "Resultados",
      ],
      image: {
        id: "Time Emaranhado",
        url: `${BASE_URL}/time_emaranhado.svg`,
        alt: "Foto composta pelos integrantes do time do Emaranhado Criativo",
      },
    },
  },
};
