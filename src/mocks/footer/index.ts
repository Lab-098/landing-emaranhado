import {
  IFooterProps,
  ISocialMedia,
} from "@/presentation/shared/components/layout/Footer/types";

const BASE_URL = "/images/core";

const year = new Date().getFullYear();

export const socialMediaMock: ISocialMedia[] = [
  {
    title: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=5598985956037&text=Oi%2C%20Elber.%20Tudo%20bem%3F",
    icon: {
      id: "whatsapp",
      url: `${BASE_URL}/whatsapp.svg`,
      alt: "whatsapp icon",
    },
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/emaranhadocriativo/",
    icon: {
      id: "instagram",
      url: `${BASE_URL}/instagram.svg`,
      alt: "instagram icon",
    },
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/company/emaranhadocriativolab/posts/?feedView=all",
    icon: {
      id: "linkedin",
      url: `${BASE_URL}/linkedin.svg`,
      alt: "linkedin icon",
    },
  },
];

export const footerMock: IFooterProps = {
  data: {
    logo: {
      id: "emaranhado-logo",
      url: `${BASE_URL}/logo_white.svg`,
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
    socialMedia: socialMediaMock,
    developerFor: "Desenvolvido por Lab098.",
    copyright: `© ${year} Emaranhado Criativo. Todos os direitos reservados.`,
  },
};
