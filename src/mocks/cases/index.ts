import { ICasesProps } from "@/presentation/modules/landing/components/CasesSection/types";

const BASE_URL = "/images/cases";

export const casesMock: ICasesProps = {
  data: {
    title: "Principais cases",
    cases: [
      {
        id: "case-1",
        logoClient: {
          id: "JA Brasil",
          url: `${BASE_URL}/ja_brasil/logo_ja_brasil.svg`,
          alt: "Logo JA",
        },
        images: [
          {
            id: "JA Brasil 1",
            url: `${BASE_URL}/ja_brasil/image_case_01.png`,
            alt: "Imagem do evento JA Brasil",
          },
          {
            id: "JA Brasil 2",
            url: `${BASE_URL}/ja_brasil/image_case_02.png`,
            alt: "Imagem do evento JA Brasil",
          },
        ],
        description:
          "Evento realizado pela Junior Achievement em 3 capitais: Distrito Federal, Amapá e Salvador, impactando mais de 7.000 jovens.",
        aboutService:
          "Identidade visual, posicionamento estratégico, presença digital e entregas publicitárias.",
        mainServices: [
          "Assessoria de Comunicação",
          "Criação de Conteúdo",
          "Cobertura audiovisual e fotográfica.",
        ],
        link: "https://www.instagram.com/p/DC6llOMJ2RU/?img_index=8",
      },
      {
        id: "case-ja-pernambuco",
        logoClient: {
          id: "JA Pernambuco",
          url: `${BASE_URL}/ja_pernambuco/logo_ja_pernambuco.svg`,
          alt: "Logo JA",
        },
        images: [
          {
            id: "JA Brasil 1",
            url: `${BASE_URL}/ja_pernambuco/image_case_01.png`,
            alt: "Imagem do evento JA Brasil",
          },
          {
            id: "JA Brasil 2",
            url: `${BASE_URL}/ja_pernambuco/image_case_02.png`,
            alt: "Imagem do evento JA Brasil",
          },
        ],
        description:
          "Unidade da Junior Achievement focada em programas de educação empreendedora.",
        aboutService:
          "Criação do site oficial, fortalecendo a presença digital e facilitando o acesso a informações e inscrições.",
        mainServices: ["Site."],
        link: "https://jape.org.br/",
      },
      {
        id: "case-paraiba",
        logoClient: {
          id: "Paraiba",
          url: `${BASE_URL}/paraiba/logo_paraiba.svg`,
          alt: "Logo JA",
        },
        images: [
          {
            id: "Paraiba 1",
            url: `${BASE_URL}/paraiba/image_case_01.png`,
            alt: "Imagem do evento Paraiba",
          },
          {
            id: "Paraiba 2",
            url: `${BASE_URL}/paraiba/image_case_02.png`,
            alt: "Imagem do evento Paraiba",
          },
        ],
        description: "Uma das maiores redes de varejo do Nordeste.",
        aboutService:
          "Gestão de carreiras de influenciadores, com Rayssa Reis em campanhas de marketing e ações promocionais.",
        mainServices: [
          "Gestão de Carreiras de Influenciadores",
          "Campanhas Publicitárias.",
        ],
        link: "https://www.instagram.com/p/DC7Jsb5pZ5l/",
      },
    ],
  },
};
