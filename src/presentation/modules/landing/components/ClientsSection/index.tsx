"use client";

import Image from "next/image";

import * as S from "./styles";

import { IClientsProps } from "./types";

import { Page } from "@/presentation/shared/components/layout";

import { containerVariants, imageVariants } from "./variants";

export function ClientsSection({ data }: IClientsProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.Title>{data.title}</S.Title>
          <S.ImagesContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.65 }}
          >
            {data.images.map((image) => (
              <S.ContainerImg key={image.id} variants={imageVariants}>
                <Image src={image.url} alt={image.alt} layout="fill" />
              </S.ContainerImg>
            ))}
          </S.ImagesContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
