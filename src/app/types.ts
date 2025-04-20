import { IAboutProps } from "@/presentation/modules/landing/components/AboutSection/types";
import { IClientsProps } from "@/presentation/modules/landing/components/ClientsSection/types";
import { IHeroProps } from "@/presentation/modules/landing/components/HeroSection/types";
import { IServicesProps } from "@/presentation/modules/landing/components/ServicesSection/types";

interface IImagesProps {
  id: string;
  url: string;
  alt: string;
}

interface ILandingProps {
  landing: {
    hero: IHeroProps;
    clients: IClientsProps;
    about: IAboutProps;
    services: IServicesProps;
  };
}

export type { ILandingProps, IImagesProps };
