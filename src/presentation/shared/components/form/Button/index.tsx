import * as S from "./styles";
import { IButtonProps } from "./types";

export function Button({
  children,
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
      <S.Content weight={weight}>{children}</S.Content>
    </S.Container>
  );
}
