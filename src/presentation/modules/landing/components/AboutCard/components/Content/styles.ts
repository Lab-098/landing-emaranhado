"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      max-width: 42%;
    }
  `}
`;

export const Title = styled.h3`
  font-weight: 700;
  line-height: 37px;
  letter-spacing: 2%;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_xl};
  `}
`;

export const Description = styled.p`
  font-weight: 300;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_md};
    line-height: 138%;
  `}
`;
