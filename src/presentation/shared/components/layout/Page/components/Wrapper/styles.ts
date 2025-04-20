"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      max-width: calc(100% - 22.4rem);
    }
  `}
`;
