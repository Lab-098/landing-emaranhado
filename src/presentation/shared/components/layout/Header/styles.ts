"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10.2rem;
 
  ${({ theme }) => css`
    padding: ${theme.spacing["2x"]} ${theme.spacing["4x"]};
    background: ${theme.colors.blue[500]};
    color: ${theme.colors.white[100]};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};
  `}
`;

export const CustomLink = styled(Link)`
  font-weight: 400;
  transition: filter 0.3s ease-in-out;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_2xs};
  `}

  &:hover {
    filter: brightness(0.8);
  }
`;