type TOrientation = "top" | "bottom";

interface INumber {
  title: string;
  number: string;
  orientation?: TOrientation;
}

interface INumbers {
  title: string;
  numbers: INumber[];
}

interface INumbersProps {
  data: INumbers;
}

export type { INumbersProps, TOrientation };
