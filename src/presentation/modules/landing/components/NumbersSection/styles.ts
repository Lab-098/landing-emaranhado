"use client";

import styled, { css } from "styled-components";
import { TOrientation } from "./types";

export const Container = styled.section`
  width: 100%;
  position: relative;
  margin-top: -102px;

  ${({ theme }) => css`
    padding: ${theme.spacing["12x"]} ${theme.spacing["7x"]};
    padding: 20.4rem ${theme.spacing["7x"]} ${theme.spacing["12x"]}
      ${theme.spacing["7x"]};
    background-color: ${theme.colors.blue[800]};
    z-index: ${theme.elevation[1]};

    @media ${theme.media.desktop} {
      padding: 20.4rem ${theme.spacing["13x"]} ${theme.spacing["13x"]}
        ${theme.spacing["13x"]};
      margin-top: -94px;
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["10x"]};
  `}
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      flex-direction: row;
      gap: 0;
    }
  `}
`;

export const Card = styled.div<{ orientation: TOrientation }>`
  height: 23.8rem;
  width: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme, orientation }) => css`
    gap: ${theme.spacing["4x"]};

    ${orientation === "top" &&
    css`
      border-top-left-radius: 17rem;
      border-top-right-radius: 17rem;
      background: ${theme.colors.white[200]};
      color: ${theme.colors.orange[500]};
    `}

    ${orientation === "bottom" &&
    css`
      border-bottom-left-radius: 17rem;
      border-bottom-right-radius: 17rem;
      background: ${theme.colors.orange[500]};
      color: ${theme.colors.white[100]};
    `}
  `}
`;

export const Number = styled.h5`
  font-weight: 500;
  text-align: center;
  line-height: 150%;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_5xl};
  `}
`;

export const Title = styled.p`
  font-weight: 300;
  text-align: center;
  line-height: 122%;
  max-width: 50%;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.text_2xs};
  `}
`;
