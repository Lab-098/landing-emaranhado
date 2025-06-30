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
}

interface IFormProps {
  data: IForm;
}

export type { IFormProps, IForm, IFormFields };
