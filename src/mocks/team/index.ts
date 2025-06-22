import { ITeamProps } from "@/presentation/modules/landing/components/TeamSection/types";

const BASE_URL = "/images/team";

export const teamMock: ITeamProps = {
  data: {
    title: "Nosso time",
    members: [
      {
        name: "Elber Abreu",
        role: "Fundador e Diretor Executivo",
        image: {
          id: "elber-abreu",
          url: `${BASE_URL}/Elber.jpg`,
          alt: "team photo",
        },
      },
      {
        name: "Willian Nunes",
        role: "Sócio e Diretor de Projetos",
        image: {
          id: "willian-nunes",
          url: `${BASE_URL}/Willian.jpg`,
          alt: "team photo",
        },
      },
      {
        name: "Victor Ramos",
        role: "Diretor de Arte",
        image: {
          id: "victor-ramos",
          url: `${BASE_URL}/Victor.png`,
          alt: "team photo",
        },
      },
      {
        name: "Ritta de Kassya",
        role: "Designer",
        image: {
          id: "ritta-kassya",
          url: `${BASE_URL}/Ritta.jpg`,
          alt: "team photo",
        },
      },
      {
        name: "Josias Bogéa",
        role: "Audiovisual",
        image: {
          id: "josias-bogea",
          url: `${BASE_URL}/Josias.png`,
          alt: "team photo",
        },
      },
      {
        name: "Darlan Gabriel",
        role: "Audiovisual",
        image: {
          id: "darlan-gabriel",
          url: `${BASE_URL}/Darlan.jpg`,
          alt: "team photo",
        },
      },
      {
        name: "Renan Irving",
        role: "Fotografia",
        image: {
          id: "renan-irving",
          url: `${BASE_URL}/Renan.jpg`,
          alt: "team photo",
        },
      },
      {
        name: "Cássia Nogueira",
        role: "Estagiária de Conteúdo",
        image: {
          id: "cassia-nogueira",
          url: `${BASE_URL}/Cassia.jpg`,
          alt: "team photo",
        },
      },
    ],
  },
};
