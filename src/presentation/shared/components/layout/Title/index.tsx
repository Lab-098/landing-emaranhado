import * as S from "./styles";
import { ITitleProps } from "./types";

export function Title({ title, color }: ITitleProps) {
  return <S.Title color={color}>{title}</S.Title>;
}
