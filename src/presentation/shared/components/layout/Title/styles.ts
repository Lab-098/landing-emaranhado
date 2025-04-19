"use client";

import styled, { css } from "styled-components";

export const Title = styled.h1<{ color?: string }>`
  font-weight: 500;

  ${({ theme, color }) => css`
    color: ${color || theme.colors.white[100]};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_4xl};
  `}
`;
