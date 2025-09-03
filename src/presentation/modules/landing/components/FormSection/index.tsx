import React from "react";

import * as S from "./styles";

import { Page } from "@/presentation/shared/components/layout";

import Illustration from "@/public/images/core/emaranhado_left_azul.svg";

import { Form } from "./components/Form";
import { SocialMediaMobile } from "./components/SocialMediaMobile";

import { IFormProps } from "./types";
import { Info } from "./components/Info";

export function FormSection({ data }: IFormProps) {
  return (
    <S.Container id="contact">
      <Page.Wrapper>
        <S.Content>
          <Info title={data.title} subtitle={data.subtitle} />
          <Form />
          <SocialMediaMobile subtitle={data.subtitle} />
        </S.Content>
      </Page.Wrapper>
      <S.Illustration src={Illustration} alt="Illustração Emaranhado" />
    </S.Container>
  );
}
