import Spore from "@/public/images/core/spore.png";
import EmaranhadoLeft from "@/public/images/core/hero_left.png";
import EmaranhadoRight from "@/public/images/core/hero_right.png";

import * as S from "./styles";

export function Illustrations() {
  return (
    <>
      <S.DesktopContainer>
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
      </S.DesktopContainer>
      <S.MobileContainer>
        <S.IllustrationSpore
          src={Spore}
          alt="Spore"
          size={28}
          top={39}
          left={11}
        />
        <S.IllustrationSpore
          src={Spore}
          alt="Spore"
          size={28}
          bottom={32}
          left={17}
        />
        <S.IllustrationSpore
          src={Spore}
          alt="Spore"
          top={5}
          right={16}
          size={40}
        />
      </S.MobileContainer>
      <S.IllustrationLeft
        src={EmaranhadoLeft}
        alt="Emaranhado da esquerda"
        width={649}
        height={292}
        priority
      />

      <S.IllustrationRight
        src={EmaranhadoRight}
        alt="Emaranhado da direita"
        width={480}
        height={274}
        priority
      />
    </>
  );
}
