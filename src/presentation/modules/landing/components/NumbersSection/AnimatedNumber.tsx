import { MotionValue, useTransform } from "motion/react";

import * as S from "./styles";

export function AnimatedNumber({
  value,
  isPercentage = false,
}: {
  value: MotionValue<number>;
  isPercentage?: boolean;
}) {
  const number = useTransform(value, (latest) => Math.round(latest));
  const formattedNumber = useTransform(number, (val) =>
    isPercentage ? `${val}%` : `${val}`
  );

  return <S.Number>{formattedNumber}</S.Number>;
}
