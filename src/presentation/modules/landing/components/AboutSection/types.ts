import { IImagesProps } from "@/app/types";

interface IContent {
  title: string;
  description: string;
  image: IImagesProps;
  tags: string[];
}

interface IAbout {
  title: string;
  content: IContent;
}

interface IAboutProps {
  data: IAbout;
}

export type { IAboutProps };
