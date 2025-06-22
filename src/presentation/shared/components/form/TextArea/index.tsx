import * as S from "./styles";
import { ITextAreaProps } from "./types";

export function TextArea({ label, ...props }: ITextAreaProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.TextArea name={label} {...props} />
    </S.Container>
  );
}
