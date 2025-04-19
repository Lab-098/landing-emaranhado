"use client";

import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

  ${({ theme }) => css`
    background-color: ${theme.colors.orange[500]};
    padding: ${theme.spacing["9x"]} ${theme.spacing["8x"]};
    border-radius: ${theme.radius.lg};
    z-index: ${theme.elevation[1]};
  `}
`;

export const Illustration = styled(Image)`
  position: absolute;
  top: -102px;
  right: -81px;
`;
