"use client";

import styled, { css } from "styled-components";
import { IStyleButtonProps, TSizeMapProps } from "./types";

const sizeMap: TSizeMapProps = {
  xs: "3x",
  sm: "4x",
  md: "5x",
  lg: "6x",
};

export const Container = styled.button<IStyleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
  border: none;

  ${({ theme, width, height, size = "xs" }) => {
    const sizeKey = sizeMap[size];

    return css`
      width: ${width ? `${width}px` : "auto"};
      height: ${height ? `${height}px` : "auto"};
      gap: ${theme.spacing["1x"]};
      color: ${theme.colors.blue[800]};
      background: ${theme.colors.yellow[500]};
      padding: ${theme.spacing[sizeKey]} ${theme.spacing["6x"]};
      border-radius: ${theme.radius.xl};
    `;
  }}

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Title = styled.span`
  font-weight: 500;
  line-height: 150%;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.text_2xs};
  `};
`;
