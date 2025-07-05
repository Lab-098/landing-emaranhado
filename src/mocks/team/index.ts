import { ITeamProps } from "@/presentation/modules/landing/components/TeamSection/types";

// const BASE_URL = "/images/team";

export const teamMock: ITeamProps = {
  data: {
    title: "Nosso time",
    members: [
      {
        name: "Elber Abreu",
        role: "Fundador e Diretor Executivo",
        image: {
          id: "elber-abreu",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1750775623/Emaranhado_Criativo_-_RND_8249_ovmfpb.jpg",
          alt: "team photo",
        },
      },
      {
        name: "Willian Nunes",
        role: "Sócio e Diretor de Projetos",
        image: {
          id: "willian-nunes",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1750775623/Emaranhado_Criativo_-_RND_8255_kr8eev.jpg",
          alt: "team photo",
        },
      },
      {
        name: "Victor Ramos",
        role: "Diretor de Arte",
        image: {
          id: "victor-ramos",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751125801/victor_pzqqs5.jpg",
          alt: "team photo",
        },
      },

      {
        name: "Darlan Gabriel",
        role: "Audiovisual",
        image: {
          id: "darlan-gabriel",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1750775623/Emaranhado_Criativo_-_RND_8394_k9i645.jpg",
          alt: "team photo",
        },
      },
      {
        name: "Renan Irving",
        role: "Fotografia",
        image: {
          id: "renan-irving",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1750775623/Emaranhado_Criativo_-_RND_8414_uasat8.jpg",
          alt: "team photo",
        },
      },
      {
        name: "Sávio Luís",
        role: "Analista de Projetos",
        image: {
          id: "savio-luis",
          url: "https://res.cloudinary.com/dvgciqf3e/image/upload/v1751677347/Emaranhado_Criativo_-_RND_8248_olupbe.jpg",
          alt: "team photo",
        },
      },
    ],
  },
};
