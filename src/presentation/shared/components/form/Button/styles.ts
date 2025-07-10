"use client";

import styled, { css, keyframes } from "styled-components";
import { IStyleButtonProps, TSizeMapProps } from "./types";

const sizeMap: TSizeMapProps = {
  xs: "3x",
  sm: "4x",
  md: "5x",
  lg: "6x",
};

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.button<IStyleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  outline: none;
  border: none;

  ${({ theme, width, height, size = "xs", layout }) => {
    const sizeKey = sizeMap[size];

    return css`
      width: ${width ? `${width}px` : "auto"};
      height: ${height ? `${height}px` : "auto"};
      gap: ${theme.spacing["1x"]};
      color: ${theme.colors.blue[800]};
      background: ${theme.colors.yellow[500]};
      padding: ${theme.spacing[sizeKey]} ${theme.spacing["6x"]};
      border-radius: ${theme.radius.xl};

      ${layout === "full" &&
      css`
        width: 100%;
      `}
    `;
  }}

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Content = styled.span<{ weight: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: ${({ weight }) => weight};
  line-height: 150%;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.text_2xs};
    gap: ${theme.spacing["2x"]};
  `};
`;

export const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 3px solid rgba(0, 50, 104, 0.3);

  ${({ theme }) => css`
    border-top: 3px solid ${theme.colors.blue[800]};
  `};
  border-radius: 50%;
  animation: ${rotate} 0.7s linear infinite;
`;
