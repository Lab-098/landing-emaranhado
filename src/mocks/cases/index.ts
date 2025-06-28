import { ICasesProps } from "@/presentation/modules/landing/components/CasesSection/types";

export const casesMock: ICasesProps = {
  data: {
    title: "Principais cases",
    cases: [
      {
        id: "case-1",
        logoClient: {
          id: "JA Brasil",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129730/logo_ja_brasil_kiq5iy.svg",
          alt: "Logo JA",
        },
        images: [
          {
            id: "JA Brasil 1",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129729/image_case_02_tqfovs.png",
            alt: "Imagem do evento JA Brasil",
          },
          {
            id: "JA Brasil 2",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129729/image_case_02_tqfovs.png",
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
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129827/logo_ja_pernambuco_kmxckn.svg",
          alt: "Logo JA",
        },
        images: [
          {
            id: "JA Brasil 1",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129826/image_case_01_fdxs0p.png",
            alt: "Imagem do evento JA Brasil",
          },
          {
            id: "JA Brasil 2",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129826/image_case_02_axj7oc.png",
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
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129753/logo_paraiba_zqpghh.svg",
          alt: "Logo JA",
        },
        images: [
          {
            id: "Paraiba 1",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129750/image_case_01_iweazw.png",
            alt: "Imagem do evento Paraiba",
          },
          {
            id: "Paraiba 2",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129752/image_case_02_iwb4jz.png",
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
