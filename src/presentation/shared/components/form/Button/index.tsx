import * as S from "./styles";
import { IButtonProps } from "./types";

export function Button({
  title,
  size,
  width,
  height,
  layout = "default",
  weight = 500,
  ...props
}: IButtonProps) {
  return (
    <S.Container
      size={size}
      width={width}
      height={height}
      layout={layout}
      {...props}
    >
      <S.Title weight={weight}>{title}</S.Title>
    </S.Container>
  );
}
