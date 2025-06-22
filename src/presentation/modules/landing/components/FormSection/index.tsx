import React from "react";

import Image from "next/image";

import * as S from "./styles";

import { IFormProps } from "./types";
import { Button, Input, TextArea } from "@/presentation/shared/components/form";

import Illustration from "@/public/images/core/emaranhado_left_azul.svg";
import { Page } from "@/presentation/shared/components/layout";

export function FormSection({ data }: IFormProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.Info>
            <S.Texts>
              <S.Title>{data.title}</S.Title>
              <S.DesktopContainer>
                <S.SubTitle>{data.subtitle}</S.SubTitle>
              </S.DesktopContainer>
            </S.Texts>
            <S.DesktopContainer>
              <S.SocialMediaContainer>
                {React.Children.toArray(
                  data.socialMedia.map((social) => (
                    <S.SocialMediaIcon key={social.title} href={social.url}>
                      <Image
                        src={social.icon.url}
                        alt={social.icon.alt}
                        width={36}
                        height={36}
                      />
                    </S.SocialMediaIcon>
                  ))
                )}
              </S.SocialMediaContainer>
            </S.DesktopContainer>
          </S.Info>
          <S.Form>
            <S.Row>
              <Input label="Nome" placeholder="Digite seu nome" type="text" />
              <Input
                label="Empresa"
                placeholder="Digite sua empresa"
                type="text"
              />
            </S.Row>
            <S.Row>
              <Input
                label="E-mail corporativo"
                placeholder="Digite seu e-mail corporativo"
                type="email"
              />
              <Input
                label="Telefone"
                placeholder="Digite seu telefone"
                type="text"
              />
            </S.Row>

            <TextArea
              label="Mensagem"
              placeholder="Informe o assunto da sua mensagem"
            />

            <Button title="ENVIAR" size="sm" weight={700} />
          </S.Form>
          <S.MobileContainer>
            <S.SubTitle>{data.subtitle}</S.SubTitle>
            <S.SocialMediaContainer>
              {React.Children.toArray(
                data.socialMedia.map((social) => (
                  <S.SocialMediaIcon key={social.title} href={social.url}>
                    <Image
                      src={social.icon.url}
                      alt={social.icon.alt}
                      width={36}
                      height={36}
                    />
                  </S.SocialMediaIcon>
                ))
              )}
            </S.SocialMediaContainer>
          </S.MobileContainer>
        </S.Content>
      </Page.Wrapper>
      <S.Illustration src={Illustration} alt="Illustração Emaranhado" />
    </S.Container>
  );
}
