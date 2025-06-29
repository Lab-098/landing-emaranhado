import { INumbersProps } from "@/presentation/modules/landing/components/NumbersSection/types";

export const numbersMock: INumbersProps = {
  data: {
    title: "Nossos números",
    numbers: [
      {
        title: "engajamento digital em campanhas",
        number: 250,
        orientation: "top",
        isPercentage: true,
      },
      {
        title: "marcas impactadas por nossas estratégias de branding",
        number: 80,
        orientation: "bottom",
      },
      {
        title: "estados brasileiros",
        number: 7,
        orientation: "top",
      },
    ],
  },
};
