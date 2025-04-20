import { Page } from "@/presentation/shared/components/layout";
import { Button } from "@/presentation/shared/components/form";

import { Illustrations } from "./components";

import * as S from "./styles";
import { IHeroProps } from "./types";

export function HeroSection({ data }: IHeroProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.TextContainer>
            <S.Title>{data.title}</S.Title>
            <S.SubTitle>{data.subtitle.toUpperCase()}</S.SubTitle>
          </S.TextContainer>

          <Button title="NOSSOS CASES" width={254} height={48} />
        </S.Content>
      </Page.Wrapper>

      <Illustrations />
    </S.Container>
  );
}
