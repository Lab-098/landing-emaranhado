import { HiMiniXMark } from "react-icons/hi2";
import { Navigation } from "../Navigation";
import * as S from "./styles";
import { IMobileProps } from "./types";

export function Mobile({ handleToogleMenu }: IMobileProps) {
  return (
    <S.Container>
      <S.Shadow />
      <S.ContainerMenu>
        <S.Content>
          <S.ButtonMenu onClick={handleToogleMenu}>
            <HiMiniXMark color="#FFF" size={42} />
          </S.ButtonMenu>
          <Navigation />
        </S.Content>
      </S.ContainerMenu>
    </S.Container>
  );
}
