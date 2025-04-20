"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 368px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      width: 384px;
    }
  `}
`;
