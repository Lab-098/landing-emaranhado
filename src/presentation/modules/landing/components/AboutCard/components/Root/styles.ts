"use client";

import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;

  ${({ theme }) => css`
    background-color: ${theme.colors.orange[500]};
    padding: ${theme.spacing["7x"]} ${theme.spacing["6x"]};
    border-radius: ${theme.radius.lg};
    z-index: ${theme.elevation[1]};

    @media ${theme.media.desktop} {
      height: auto;
      flex-direction: row;
      justify-content: space-between;
      padding: ${theme.spacing["9x"]} ${theme.spacing["8x"]};
    }
  `}
`;

export const Illustration = styled(Image)`
  display: none;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      position: absolute;
      top: -102px;
      right: -81px;
    }
  `}
`;
