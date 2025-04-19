import * as S from "./styles";
import { IButtonProps } from "./types";

export function Button({ title, size, width, height, ...props }: IButtonProps) {
  return (
    <S.Container size={size} width={width} height={height} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
