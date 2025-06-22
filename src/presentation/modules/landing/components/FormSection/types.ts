import { ISocialMedia } from "@/presentation/shared/components/layout/Footer/types";

interface IForm {
  title: string;
  subtitle: string;
  socialMedia: ISocialMedia[];
}

interface IFormProps {
  data: IForm;
}

export type { IFormProps };
