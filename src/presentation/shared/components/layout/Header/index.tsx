"use client";

import { useRouter } from "next/navigation";
import { Page } from "@/presentation/shared/components/layout";
import { HiBars3 } from "react-icons/hi2";

import * as S from "./styles";
import { Logo, Navigation } from "./components";
import { Button } from "@/presentation/shared/components/form";
import { useState } from "react";
import { Mobile } from "./components/Mobile";
import { AnimatePresence } from "motion/react";

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirectContact = () => {
    router.push("#contact");
  };

  const handleToogleMenu = () => {
    if (isOpen) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }

    setIsOpen((prev) => !prev);
  };

  return (
    <S.Container id="header">
      <Page.Wrapper>
        <S.Content>
          <Logo />
          <S.DesktopContainer>
            <Navigation />
            <Button onClick={handleRedirectContact}>ENTRE EM CONTATO</Button>
          </S.DesktopContainer>
          <S.MobileContainer>
            <S.ButtonMenu onClick={handleToogleMenu}>
              <HiBars3 color="#FFF" size={42} />
            </S.ButtonMenu>
          </S.MobileContainer>
        </S.Content>
      </Page.Wrapper>

      <AnimatePresence>
        {isOpen ? <Mobile handleToogleMenu={handleToogleMenu} /> : null}
      </AnimatePresence>
    </S.Container>
  );
}
