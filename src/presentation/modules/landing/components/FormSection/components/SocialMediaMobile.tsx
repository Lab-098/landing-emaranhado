import React from "react";
import Image from "next/image";

import * as S from "../styles";

import { IForm } from "../types";

export function SocialMediaMobile({
  subtitle,
  socialMedia,
}: Pick<IForm, "socialMedia" | "subtitle">) {
  return (
    <S.MobileContainer>
      <S.SubTitle>{subtitle}</S.SubTitle>
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
    </S.MobileContainer>
  );
}
