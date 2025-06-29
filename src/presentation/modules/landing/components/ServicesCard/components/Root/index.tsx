import * as S from "./styles";
import { IRootProps } from "./types";

export function Root({ children, ...props }: IRootProps) {
  return (
    <S.Container whileHover={{ scale: 1.1 }} {...props}>
      {children}
    </S.Container>
  );
}
