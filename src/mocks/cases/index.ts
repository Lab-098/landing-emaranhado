import { ICasesProps } from "@/presentation/modules/landing/components/CasesSection/types";

export const casesMock: ICasesProps = {
  data: {
    title: "Principais cases",
    cases: [
      {
        id: "case-ja-brasil",
        logoClient: {
          id: "JA Brasil",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129730/logo_ja_brasil_kiq5iy.svg",
          alt: "Logo JA",
        },
        images: [
          {
            id: "JA Brasil 1",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751672226/FOTO_4_1_r0zmc7.png",
            alt: "Imagem do evento JA Brasil",
          },
          {
            id: "JA Brasil 2",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751672140/foto_1_trn7yv.jpg",
            alt: "Imagem do evento JA Brasil",
          },
        ],
        description:
          "NAUFest (Festival Internacional de Empreendedorismo e Inovação) evento realizado pela Junior Achievement em 3 capitais: Distrito Federal, Amapá e Salvador, impactando mais de 7.000 jovens. ",
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
            id: "JA Pernambuco 1",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751676938/JA-Case_1_nxatob.png",
            alt: "Imagem do evento JA Pernambuco",
          },
          {
            id: "JA Pernambuco 2",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129826/image_case_01_fdxs0p.png",
            alt: "Imagem do evento JA Pernambuco",
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
        id: "bw",
        logoClient: {
          id: "BW",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129980/logo_bw_mpnt4d.svg",
          alt: "Logo BW",
        },
        images: [
          {
            id: "BW 1",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751671943/4_vwpvzi.png",
            alt: "Imagem do evento BW",
          },
          {
            id: "BW 2",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751672072/case_bw_otwsem.png",
            alt: "Imagem do evento BW",
          },
        ],
        description:
          "Empresa estratégica com foco em eventos e assessoria empresarial.",
        aboutService:
          "Desenvolvimento de branding completo e design visual estratégico para posicionamento no mercado.",
        mainServices: ["Branding e Design Visual Estratégico."],
        link: "https://www.instagram.com/p/C8e5pYWRx0t/",
      },
      {
        id: "casas-brasil",
        logoClient: {
          id: "Casas Brasil",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751129968/logo_casas_brasil_mc9yth.svg",
          alt: "Casas Brasil",
        },
        images: [
          {
            id: "Casas Brasil 1",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751672105/KV-MES-DAS-MA%CC%83ES_PEC%CC%A7AS-PEC%CC%A7A-CONCEITO-_ugrdwc.png",
            alt: "Imagem do evento Casas Brasil",
          },
          {
            id: "Casas Brasil 2",
            url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751672105/Fotos-Produtos-1_kywoff.jpg",
            alt: "Imagem do evento Casas Brasil",
          },
        ],
        description:
          "Rede varejista com foco em artigos para o lar e utilidades domésticas.",
        aboutService:
          "Gestão de conteúdo digital, crescimento de +2 mil seguidores em menos de 1 ano e média de 100 mil visualizações mensais.",
        mainServices: ["Conteúdo Digital e Presença Digital"],
        link: "https://www.instagram.com/casasbrasiloficial/",
      },
    ],
  },
};
