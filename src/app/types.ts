import { IAboutProps } from "@/presentation/modules/landing/components/AboutSection/types";
import { IClientsProps } from "@/presentation/modules/landing/components/ClientsSection/types";

interface IImagesProps {
  id: string;
  url: string;
  alt: string;
}

interface ILandingProps {
  landing: {
    clients: IClientsProps;
    about: IAboutProps;
  };
}

export type { ILandingProps, IImagesProps };
