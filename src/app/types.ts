import { IAboutProps } from "@/presentation/modules/landing/components/AboutSection/types";
import { ICasesProps } from "@/presentation/modules/landing/components/CasesSection/types";
import { IClientsProps } from "@/presentation/modules/landing/components/ClientsSection/types";
import { IFormProps } from "@/presentation/modules/landing/components/FormSection/types";
import { IHeroProps } from "@/presentation/modules/landing/components/HeroSection/types";
import { INumbersProps } from "@/presentation/modules/landing/components/NumbersSection/types";
import { IServicesProps } from "@/presentation/modules/landing/components/ServicesSection/types";
import { ITeamProps } from "@/presentation/modules/landing/components/TeamSection/types";
import { IFooterProps } from "@/presentation/shared/components/layout/Footer/types";

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
    cases: ICasesProps;
    numbers: INumbersProps;
    team: ITeamProps;
    form: IFormProps;
    footer: IFooterProps;
  };
}

export type { ILandingProps, IImagesProps };
