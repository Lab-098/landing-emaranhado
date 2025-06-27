import React from "react";
import Image from "next/image";

import * as S from "../styles";

import { IForm } from "../types";

export function Info({ title, subtitle, socialMedia }: IForm) {
  return (
    <S.Info>
      <S.Texts>
        <S.Title>{title}</S.Title>
        <S.DesktopContainer>
          <S.SubTitle>{subtitle}</S.SubTitle>
        </S.DesktopContainer>
      </S.Texts>
      <S.DesktopContainer>
        <S.SocialMediaContainer>
          {React.Children.toArray(
            socialMedia.map((social) => (
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
  );
}
