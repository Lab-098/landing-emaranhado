import { IImagesProps } from "@/app/types";

interface INavigation {
  title: string;
  url: string;
}

interface ISocialMedia {
  title: string;
  url: string;
  icon: IImagesProps;
}

interface IFooter {
  logo: IImagesProps;
  title: string;
  navigation: INavigation[];
  email: string;
  phone: string;
  socialMedia: ISocialMedia[];
  developerFor: string;
  copyright: string;
}

interface IFooterProps {
  data: IFooter;
}

export type { IFooterProps, ISocialMedia };
