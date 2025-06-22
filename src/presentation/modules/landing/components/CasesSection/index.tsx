"use client";

import React, { useState } from "react";

import { Page, Title } from "@/presentation/shared/components/layout";
import * as S from "./styles";
import { ICase, ICasesProps } from "./types";
import { Button } from "@/presentation/shared/components/form";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

import SporeIllustration from "@/public/images/cases/spore.svg";
import Image from "next/image";

export function CasesSection({ data }: ICasesProps) {
  const [activeIndexCase, setActiveIndexCase] = useState<number>(0);

  const currentCase: ICase = data.cases[activeIndexCase];
  const [topImageCase, bottomImageCase] = currentCase.images;
  const hasMainServices = Boolean(currentCase.mainServices.length);

  const handleBackCase = () => {
    if (activeIndexCase === 0) return;

    setActiveIndexCase((prev) => prev - 1);
  };

  const handleNextCase = () => {
    if (activeIndexCase === data.cases.length - 1) return;

    setActiveIndexCase((prev) => prev + 1);
  };

  const handleRedirectToCase = () => {
    if (currentCase.link) {
      window.open(currentCase.link, "_blank");
    }
  };

  if (!currentCase) return null;

  return (
    <S.Container id="cases">
      <Page.Wrapper>
        <S.Content>
          <S.CaseContent>
            <S.TitleSection>
              <Title title={data.title} />
              <S.ActionContent>
                <S.ButtonMenu type="button" onClick={handleBackCase}>
                  <HiArrowSmallLeft color="#FFF" size={19} />
                </S.ButtonMenu>
                <S.ButtonMenu type="button" onClick={handleNextCase}>
                  <HiArrowSmallRight color="#FFF" size={19} />
                </S.ButtonMenu>
              </S.ActionContent>
            </S.TitleSection>

            <S.ContainerImgLogo>
              <S.StyledImage
                src={currentCase.logoClient.url}
                alt={currentCase.logoClient.alt}
                fill
                quality={100}
              />
            </S.ContainerImgLogo>

            <S.TextContent>
              <S.Description>{currentCase.description}</S.Description>
              <S.AboutSection>
                <S.AboutTitle>O que o emaranhado fez:</S.AboutTitle>
                <S.TextsContainer>
                  <S.AboutService>{currentCase.aboutService}</S.AboutService>

                  {hasMainServices && (
                    <S.MainServices>
                      <strong>Principal Serviço: </strong>
                      {currentCase.mainServices.join(", ")}
                    </S.MainServices>
                  )}
                </S.TextsContainer>
              </S.AboutSection>
            </S.TextContent>

            <S.DesktopContainer>
              <Button
                title="Conferir o case"
                layout="full"
                onClick={handleRedirectToCase}
              />
            </S.DesktopContainer>
          </S.CaseContent>
          <S.CasesImagesContainer>
            <S.ContainerImg>
              <S.TopImageCase
                src={topImageCase.url}
                alt={topImageCase.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </S.ContainerImg>
            <S.ContainerImg>
              <S.BottomImageCase
                src={bottomImageCase.url}
                alt={bottomImageCase.alt}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </S.ContainerImg>
          </S.CasesImagesContainer>

          <S.MobileContainer>
            <Button
              title="Conferir o case"
              layout="full"
              onClick={handleRedirectToCase}
            />
          </S.MobileContainer>

          <S.ContainerIllustration>
            <S.ContainerImgIllustration>
              <Image
                src={SporeIllustration}
                alt="illustraçao"
                objectFit="cover"
                quality={100}
              />
            </S.ContainerImgIllustration>
          </S.ContainerIllustration>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
