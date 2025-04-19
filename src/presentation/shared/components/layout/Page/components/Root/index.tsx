import * as S from "./styles";
import { IRootProps } from "./types";

export function Root({ children }: IRootProps) {
  return <S.Container>{children}</S.Container>;
}
