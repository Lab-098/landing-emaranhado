import Spore from "@/public/images/core/hero_spore_orange.svg";
import EmaranhadoLeft from "@/public/images/core/hero_emaranhado_left.svg";
import EmaranhadoRight from "@/public/images/core/hero_emaranhado_right.svg";

import * as S from "./styles";

export function Illustrations() {
  return (
    <>
      <S.IllustrationSpore
        src={Spore}
        alt="Spore"
        size={36}
        top={17}
        left={17}
      />
      <S.IllustrationSpore
        src={Spore}
        alt="Spore"
        size={36}
        bottom={28}
        left={35}
      />
      <S.IllustrationSpore
        src={Spore}
        alt="Spore"
        top={11}
        right={29}
        size={60}
      />

      <S.IllustrationLeft
        src={EmaranhadoLeft}
        alt="Emaranhado da esquerda"
        height={535}
        width={542}
      />

      <S.IllustrationRight
        src={EmaranhadoRight}
        alt="Emaranhado da direita"
        height={269}
        width={459}
      />
    </>
  );
}
