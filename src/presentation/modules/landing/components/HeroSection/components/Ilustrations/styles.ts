"use client";

import Image from "next/image";

import styled, { css } from "styled-components";
import { IStyleIllustrationProps } from "./types";

export const IllustrationSpore = styled(Image)<IStyleIllustrationProps>`
  position: absolute;

  ${({ size, top, left, right, bottom }) => css`
    height: ${size ? `${size}px` : "auto"};
    width: ${size ? `${size}px` : "auto"};
    top: ${top ? `${top}%` : "auto"};
    left: ${left ? `${left}%` : "auto"};
    right: ${right ? `${right}%` : "auto"};
    bottom: ${bottom ? `${bottom}%` : "auto"};
  `}
`;

export const IllustrationLeft = styled(Image)`
  position: absolute;
  top: 88%;
  left: -96px;
  transform: translateY(-50%) rotate(34deg);
  width: 305px;
  height: 137px;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      top: 71%;
      left: -94px;
      width: 649px;
      height: 292px;
      transform: translateY(-50%) rotate(36.88deg);
    }
  `}
`;

export const IllustrationRight = styled(Image)`
  position: absolute;
  top: 94%;
  right: 0;
  transform: translateY(-50%);
  width: 245px;
  height: 140px;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      top: 81%;
      width: 480px;
      height: 274px;
    }
  `}
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
  display: block;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`;
