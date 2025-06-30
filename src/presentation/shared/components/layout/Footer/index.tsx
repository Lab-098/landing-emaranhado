import Link from "next/link";
import * as S from "./styles";

import { IFooterProps } from "./types";

import React from "react";
import { Page } from "../Page";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

export function Footer({ data }: IFooterProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.TopContainer>
            <S.About>
              <S.ContainerImg>
                <S.StyledImage
                  src={data.logo.url}
                  alt={data.logo.alt}
                  layout="fill"
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
              <S.Text>{data.developerFor}</S.Text>
              <S.Text>{data.copyright}</S.Text>
            </S.CopyrightContainer>
          </S.BottomContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
