type TTag =
  | "Branding"
  | "Resultados"
  | "Estratégias"
  | "Criatividade"
  | "Comunicação";

interface ITagProps {
  tags: string[];
}

export type { ITagProps, TTag };
