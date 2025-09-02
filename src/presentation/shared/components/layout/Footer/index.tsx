import Link from "next/link";
import * as S from "./styles";

import { IFooterProps } from "./types";

import React from "react";
import { Page } from "../Page";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import LogoImg from "@/public/images/core/logo.png";

export function Footer({ data }: IFooterProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.TopContainer>
            <S.About>
              <S.ContainerImg>
                <S.StyledImage
                  src={LogoImg}
                  alt="Logo Emaranhado Criativo"
                  fill
                />
              </S.ContainerImg>
              <S.Title>{data.title}</S.Title>
            </S.About>
            <S.Main>
              <S.Column>
                <S.TitleColumn>Navegação</S.TitleColumn>
                {React.Children.toArray(
                  data.navigation.map((item) => (
                    <Link key={item.title} href={item.url}>
                      <S.Item>{item.title}</S.Item>
                    </Link>
                  ))
                )}
              </S.Column>
              <S.Column>
                <S.TitleColumn>Contato</S.TitleColumn>
                <S.Item>{data.email}</S.Item>
                <S.Item>{data.phone}</S.Item>
              </S.Column>
              <S.Column>
                <S.TitleColumn>Redes sociais</S.TitleColumn>
                <S.SocialMediaContainer>
                  <Link
                    href="https://api.whatsapp.com/send?phone=5598985956037&text=Oi%2C%20Elber.%20Tudo%20bem%3F"
                    target="_blank"
                  >
                    <FaWhatsapp size={22} color="#FFF" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/emaranhadocriativo/"
                    target="_blank"
                  >
                    <FaInstagram size={22} color="#FFF" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/emaranhadocriativolab/posts/?feedView=all"
                    target="_blank"
                  >
                    <SiLinkedin size={18} color="#FFF" />
                  </Link>
                </S.SocialMediaContainer>
              </S.Column>
            </S.Main>
          </S.TopContainer>
          <S.BottomContainer>
            <S.CopyrightContainer>
              <S.Text>
                Desenvolvido por{" "}
                <S.Redirect href="https://www.linkedin.com/in/marcus-vinicius-silva-costa/">
                  Marcus Vinícius
                </S.Redirect>{" "}
                e{" "}
                <S.Redirect href="https://www.linkedin.com/in/mirelescastro/">
                  Mirele Castro
                </S.Redirect>
                .
              </S.Text>
              <S.Text>{data.copyright}</S.Text>
            </S.CopyrightContainer>
            <S.BackToTop href="#header">
              Voltar ao topo <FaArrowUp size={16} color="#FFC400" />
            </S.BackToTop>
          </S.BottomContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
