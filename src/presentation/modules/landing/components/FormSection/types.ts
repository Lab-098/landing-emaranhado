import { ISocialMedia } from "@/presentation/shared/components/layout/Footer/types";

interface IFormFields {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface IForm {
  title: string;
  subtitle: string;
  socialMedia: ISocialMedia[];
}

interface IFormProps {
  data: IForm;
}

export type { IFormProps, IForm, IFormFields };
