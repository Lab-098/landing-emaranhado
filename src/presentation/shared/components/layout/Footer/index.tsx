import Link from "next/link";
import * as S from "./styles";

import { IFooterProps } from "./types";
import Image from "next/image";
import React from "react";
import { Page } from "../Page";

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
                  {React.Children.toArray(
                    data.socialMedia.map((social) => (
                      <Link key={social.title} href={social.url}>
                        <Image
                          src={social.icon.url}
                          alt={social.icon.alt}
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))
                  )}
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
