import * as S from "./styles";
import { IInputProps } from "./types";

export function Input({ label, ...props }: IInputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input name={label} {...props} />
    </S.Container>
  );
}
