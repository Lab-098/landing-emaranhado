"use client";

import { motion } from "motion/react";
import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;

  ${({ theme }) => css`
    padding: ${theme.spacing["10x"]} ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      padding: ${theme.spacing["13x"]};
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};
  `}
`;

export const Title = styled.h5`
  text-align: center;
  font-weight: 400;

  ${({ theme }) => css`
    color: ${theme.colors.blue[800]};
    font-size: 18px;

    @media ${theme.media.desktop} {
      font-size: ${theme.fontSize.text_2xs};
    }
  `}
`;

export const ImagesContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerImg = styled(motion.div)`
  position: relative;
  width: 243px;
  height: 112px;
`;

export const DesktopContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: block;
    }
  `}
`;

export const MobileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: none;
    }
  `}

  .swiper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing["4x"]};
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination {
    margin-top: ${({ theme }) => theme.spacing["4x"]};
    position: relative;
  }

  .swiper-pagination-bullet {
    background: #cecece;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #949494;
  }
`;
