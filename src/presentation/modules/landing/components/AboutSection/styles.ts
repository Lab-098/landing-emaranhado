"use client";

import styled, { css } from "styled-components";

import { Title } from "@/presentation/shared/components/layout";
import Image from "next/image";
import { theme } from "@/presentation/external/styled";
import { motion } from "motion/react";

export const Container = styled.section`
  width: 100%;
  position: relative;
  margin-bottom: 72px;

  ${({ theme }) => css`
    z-index: ${theme.elevation[1]};
    padding: ${theme.spacing["10x"]} ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      padding: ${theme.spacing["13x"]};
      margin-bottom: 0;
    }
  `}
`;

export const Content = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["10x"]};
    z-index: ${theme.elevation[1]};

    @media ${theme.media.desktop} {
      gap: ${theme.spacing["13x"]};
    }
  `}
`;

export const StyledTitle = styled(Title).attrs({
  color: theme.colors.blue[800],
})``;

export const ContainerImg = styled.div`
  width: 100%;
  height: 28rem;
  position: relative;
  margin-top: -50px;
  transform: translateY(40%);

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      margin: 0;
      transform: translateY(0);
      width: 58.6rem;
      height: 39.4rem;
      border-radius: ${theme.radius.lg};
    }
  `}
`;

export const StyledImage = styled(Image)`
  object-fit: cover;

  ${({ theme }) => css`
    border-radius: ${theme.radius.md};

    @media ${theme.media.desktop} {
      border-radius: ${theme.radius.lg};
    }
  `}
`;

export const LeftIllustration = styled(Image)`
  position: absolute;
  top: 106px;
  left: -100px;
  width: 348px;
  height: auto;

  ${({ theme }) => css`
    z-index: ${theme.elevation[0]};

    @media ${theme.media.desktop} {
      width: auto;
      height: auto;
      top: 108px;
      left: 0px;
    }
  `}
`;

export const RightIllustration = styled(Image)`
  position: absolute;
  bottom: -55px;
  right: 0px;
  width: 368px;
  height: 199px;

  ${({ theme }) => css`
    z-index: ${theme.elevation[0]};

    @media ${theme.media.desktop} {
      width: auto;
      height: auto;
    }
  `}
`;
