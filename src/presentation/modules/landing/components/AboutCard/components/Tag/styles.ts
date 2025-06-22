"use client";

import styled, { css } from "styled-components";
import { IStyledTagProps } from "./types";

export const Container = styled.div<IStyledTagProps>`
  position: absolute;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, top, left, right, bottom }) => css`
    background-color: ${theme.colors.blue[500]};
    border: 1px solid ${theme.colors.white[100]};
    padding: 6px 18px;
    border-radius: ${theme.radius.xl};
    z-index: ${theme.elevation[1]};
    color: ${theme.colors.white[100]};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_xs};
    line-height: 142%;

    @media ${theme.media.desktop} {
      position: relative;
    }

    @media ${theme.media.mobile} {
      top: ${top ? `${top}px` : "auto"};
      left: ${left ? `${left}px` : "auto"};
      right: ${right ? `${right}px` : "auto"};
      bottom: ${bottom ? `${bottom}px` : "auto"};
    }
  `}
`;
