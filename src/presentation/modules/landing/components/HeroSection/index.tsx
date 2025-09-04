"use client";

import { Page } from "@/presentation/shared/components/layout";
import { Button } from "@/presentation/shared/components/form";

import { Illustrations } from "./components";

import { IHeroProps } from "./types";

import * as S from "./styles";
import { useRouter } from "next/navigation";

export function HeroSection({ data }: IHeroProps) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("#cases");
  };

  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.TextContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <S.Title>{data.title}</S.Title>
            <S.SubTitle>{data.subtitle.toUpperCase()}</S.SubTitle>
          </S.TextContainer>

          <Button width={254} height={48} onClick={handleRedirect}>
            NOSSOS CASES
          </Button>
        </S.Content>
      </Page.Wrapper>

      <Illustrations />
    </S.Container>
  );
}
