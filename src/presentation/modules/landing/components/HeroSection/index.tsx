import { Page } from "@/presentation/shared/components/layout";
import { Button } from "@/presentation/shared/components/form";

import { Illustrations } from "./components";

import * as S from "./styles";

export function HeroSection() {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.TextContainer>
            <S.Title>+ que uma agência</S.Title>
            <S.SubTitle>
              SOMOS UM LAB DE CRIATIVIDADE, BRANDING E COMUNICAÇÃO
            </S.SubTitle>
          </S.TextContainer>

          <Button title="NOSSOS CASES" width={254} height={48} />
        </S.Content>
      </Page.Wrapper>

      <Illustrations />
    </S.Container>
  );
}
