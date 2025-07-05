import { IFooterProps } from "@/presentation/shared/components/layout/Footer/types";

const year = new Date().getFullYear();

export const footerMock: IFooterProps = {
  data: {
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
    copyright: `© ${year} Emaranhado Criativo. Todos os direitos reservados.`,
  },
};
