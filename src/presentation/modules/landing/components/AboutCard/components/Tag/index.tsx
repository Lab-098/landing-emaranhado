import * as S from "./styles";
import { ITagProps } from "./types";

export function Tag({ text }: ITagProps) {
  return <S.Container>{text}</S.Container>;
}
