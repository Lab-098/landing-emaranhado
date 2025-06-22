"use client";

import styled, { css } from "styled-components";

import { Title } from "@/presentation/shared/components/layout";
import Image from "next/image";
import { theme } from "@/presentation/external/styled";

export const Container = styled.section`
  width: 100%;
  position: relative;

  ${({ theme }) => css`
    z-index: ${theme.elevation[1]};
    padding: ${theme.spacing["13x"]} ${theme.spacing["7x"]};

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
    gap: ${theme.spacing["10x"]};

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
  top: 105px;
  left: -88px;
  width: 428px;
  height: auto;

  ${({ theme }) => css`
    z-index: ${theme.elevation[0]};

    @media ${theme.media.desktop} {
      width: 1083px;
      height: 423px;
      top: 80px;
      left: 0px;
    }
  `}
`;

export const RightIllustration = styled(Image)`
  position: absolute;
  bottom: -90px;
  right: 0px;
  width: 428px;
  height: auto;

  ${({ theme }) => css`
    z-index: ${theme.elevation[0]};

    @media ${theme.media.desktop} {
      width: 1083px;
      height: 423px;
    }
  `}
`;
