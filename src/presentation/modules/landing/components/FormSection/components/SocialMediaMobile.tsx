import React from "react";

import * as S from "../styles";

import { IForm } from "../types";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

export function SocialMediaMobile({ subtitle }: Pick<IForm, "subtitle">) {
  return (
    <S.MobileContainer>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <S.SocialMediaContainer>
        <S.SocialMediaIcon
          href="https://api.whatsapp.com/send?phone=5598985956037&text=Oi%2C%20Elber.%20Tudo%20bem%3F"
          target="_blank"
        >
          <FaWhatsapp size={33} color="#FFF" />
        </S.SocialMediaIcon>
        <S.SocialMediaIcon
          href="https://www.instagram.com/emaranhadocriativo/"
          target="_blank"
        >
          <FaInstagram size={33} color="#FFF" />
        </S.SocialMediaIcon>
        <S.SocialMediaIcon
          href="https://www.linkedin.com/company/emaranhadocriativolab/posts/?feedView=all"
          target="_blank"
        >
          <SiLinkedin size={26} color="#FFF" />
        </S.SocialMediaIcon>
      </S.SocialMediaContainer>
    </S.MobileContainer>
  );
}
