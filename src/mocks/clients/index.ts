import { IClientsProps } from "@/presentation/modules/landing/components/ClientsSection/types";

const BASE_URL = "/images/clients";

export const clientsMock: IClientsProps = {
  data: {
    title: "Empresas que confiam no nosso trabalho",
    images: [
      {
        id: "1",
        url: `${BASE_URL}/CasasBrasil.svg`,
        alt: "Imagem da empresa Casas Brasil",
      },
      {
        id: "2",
        url: `${BASE_URL}/Buriti.svg`,
        alt: "Imagem da empresa Buriti",
      },
      {
        id: "3",
        url: `${BASE_URL}/Timber.svg`,
        alt: "Imagem da empresa Timber",
      },
      {
        id: "4",
        url: `${BASE_URL}/Gomes.svg`,
        alt: "Imagem da empresa Gomes",
      },
      {
        id: "5",
        url: `${BASE_URL}/BW.svg`,
        alt: "Imagem da empresa BW",
      },
      {
        id: "6",
        url: `${BASE_URL}/Equatorial.svg`,
        alt: "Imagem da empresa Equatorial",
      },
      {
        id: "7",
        url: `${BASE_URL}/Mateus.svg`,
        alt: "Imagem da empresa Mateus",
      },
      {
        id: "8",
        url: `${BASE_URL}/Paraiba.svg`,
        alt: "Imagem da empresa Paraiba",
      },
      {
        id: "9",
        url: `${BASE_URL}/JA.svg`,
        alt: "Imagem da empresa JA",
      },
    ],
  },
};
