"use client";

import { useRouter } from "next/navigation";
import { Page } from "@/presentation/shared/components/layout";

import * as S from "./styles";
import { Logo, Navigation } from "./components";
import { Button } from "@/presentation/shared/components/form";

export function Header() {
  const router = useRouter();

  const handleRedirectContact = () => {
    router.push("#contact");
  };

  return (
    <S.Container id="header">
      <Page.Wrapper>
        <S.Content>
          <Logo />
          <Navigation />
          <Button title="ENTRE EM CONTATO" onClick={handleRedirectContact} />
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
