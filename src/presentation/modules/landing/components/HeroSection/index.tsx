import { Page } from "@/presentation/shared/components/layout";
import { Button } from "@/presentation/shared/components/form";

import { Illustrations } from "./components";

import { IHeroProps } from "./types";

import * as S from "./styles";

export function HeroSection({ data }: IHeroProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <S.TextContainer>
            <S.Title>{data.title}</S.Title>
            <S.SubTitle>{data.subtitle.toUpperCase()}</S.SubTitle>
          </S.TextContainer>

          <Button width={254} height={48}>
            NOSSOS CASES
          </Button>
        </S.Content>
      </Page.Wrapper>

      <Illustrations />
    </S.Container>
  );
}
