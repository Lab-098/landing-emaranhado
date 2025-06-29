type TOrientation = "top" | "bottom";

interface INumber {
  title: string;
  number: number;
  orientation?: TOrientation;
  isPercentage?: boolean;
}

interface INumbers {
  title: string;
  numbers: INumber[];
}

interface INumbersProps {
  data: INumbers;
}

export type { INumbersProps, TOrientation };
