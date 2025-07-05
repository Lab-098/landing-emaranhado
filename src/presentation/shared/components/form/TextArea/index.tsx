import * as S from "./styles";
import { ITextAreaProps } from "./types";

export function TextArea({ label, error, ...props }: ITextAreaProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.TextArea name={label} {...props} />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
