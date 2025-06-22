import { IImagesProps } from "@/app/types";

interface ICase {
  id: string;
  logoClient: IImagesProps;
  description: string;
  aboutService: string;
  mainServices: string[];
  images: IImagesProps[];
  link: string;
}

interface ICases {
  title: string;
  cases: ICase[];
}

interface ICasesProps {
  data: ICases;
}

export type { ICasesProps, ICase };
