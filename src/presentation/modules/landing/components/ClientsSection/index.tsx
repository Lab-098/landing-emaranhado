"use client";

import Image from "next/image";

import * as S from "./styles";

import { IClientsProps } from "./types";

import { Page } from "@/presentation/shared/components/layout";

import { containerVariants, imageVariants } from "./variants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function ClientsSection({ data }: IClientsProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.Title>{data.title}</S.Title>
          <S.DesktopContainer>
            <S.ImagesContainer
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.65 }}
            >
              {data.images.map((image) => (
                <S.ContainerImg key={image.id} variants={imageVariants}>
                  <Image src={image.url} alt={image.alt} fill />
                </S.ContainerImg>
              ))}
            </S.ImagesContainer>
          </S.DesktopContainer>

          <S.MobileContainer>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              spaceBetween={20}
              centeredSlides
              slidesPerView={1}
            >
              {data.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <S.ContainerImg>
                    <Image src={image.url} alt={image.alt} fill />
                  </S.ContainerImg>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.MobileContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
