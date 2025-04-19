"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 199px;
  background: linear-gradient(to right, #0046ff 0%, #19398e 100%);

  position: relative;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 32%,
    90% 50%,
    100% 68%,
    100% 100%,
    0% 100%
  );

  ${({ theme }) => css`
    border-radius: ${theme.radius.lg} ${theme.radius.lg} 0px 0px;
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    gap: ${theme.spacing["1x"]};
  `}
`;

export const Title = styled.h5`
  font-weight: 500;
  text-align: center;
  line-height: 152%;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_xl};
  `}
`;
