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
  top: 77%;
  left: 0;
  transform: translateY(-50%);
`;

export const IllustrationRight = styled(Image)`
  position: absolute;
  top: 81%;
  right: 0;
  transform: translateY(-50%);
`;
