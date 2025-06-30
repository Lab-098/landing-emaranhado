import { HiMiniXMark } from "react-icons/hi2";
import { Navigation } from "../Navigation";
import * as S from "./styles";
import { IMobileProps } from "./types";
import { motion } from "motion/react";

export function Mobile({ handleToogleMenu }: IMobileProps) {
  return (
    <S.Container>
      <S.Shadow />
      <S.ContainerMenu
        as={motion.div}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
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
