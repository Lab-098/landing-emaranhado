import * as S from "./styles";
import { IContentProps } from "./types";

export function Content({ title, description }: IContentProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
