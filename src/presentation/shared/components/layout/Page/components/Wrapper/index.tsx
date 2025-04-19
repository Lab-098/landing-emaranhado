import * as S from "./styles";
import { IWrapperProps } from "./types";

export function Wrapper({ children }: IWrapperProps) {
  return <S.Container>{children}</S.Container>;
}
