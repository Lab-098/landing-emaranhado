"use client";

import { useRouter } from "next/navigation";
import { Page } from "@/presentation/shared/components/layout";
import { HiBars3 } from "react-icons/hi2";

import * as S from "./styles";
import { Logo, Navigation } from "./components";
import { Button } from "@/presentation/shared/components/form";
import { useState } from "react";
import { Mobile } from "./components/Mobile";

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirectContact = () => {
    router.push("#contact");
  };

  const handleToogleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Container id="header">
      <Page.Wrapper>
        <S.Content>
          <Logo />
          <S.DesktopContainer>
            <Navigation />
            <Button title="ENTRE EM CONTATO" onClick={handleRedirectContact} />
          </S.DesktopContainer>
          <S.MobileContainer>
            <S.ButtonMenu onClick={handleToogleMenu}>
              <HiBars3 color="#FFF" size={42} />
            </S.ButtonMenu>
          </S.MobileContainer>
        </S.Content>
      </Page.Wrapper>

      {isOpen ? <Mobile handleToogleMenu={handleToogleMenu} /> : null}
    </S.Container>
  );
}
