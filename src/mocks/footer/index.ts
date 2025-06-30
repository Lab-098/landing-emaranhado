import { IFooterProps } from "@/presentation/shared/components/layout/Footer/types";

const year = new Date().getFullYear();

export const footerMock: IFooterProps = {
  data: {
    logo: {
      id: "emaranhado-logo",
      url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751130115/logo_white_pqnido.svg",
      alt: "Emaranhado Criativo Logo",
    },
    title: "Somos um negócio do Emaranhado Hub.",
    navigation: [
      {
        title: "Início",
        url: "#header",
      },
      {
        title: "Sobre nós",
        url: "#about",
      },
      {
        title: "Serviços",
        url: "#services",
      },
      {
        title: "Cases",
        url: "#cases",
      },
      {
        title: "Time",
        url: "#team",
      },
    ],
    email: "emaranhado@gmail.com",
    phone: "(98) 98595-6037",
    developerFor: "Desenvolvido por Lab098.",
    copyright: `© ${year} Emaranhado Criativo. Todos os direitos reservados.`,
  },
};
