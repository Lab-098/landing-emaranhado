"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10.2rem;
  position: relative;

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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      flex-direction: row;
      gap: ${theme.spacing["7x"]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;

export const CustomLink = styled(Link)`
  font-weight: 400;
  transition: filter 0.3s ease-in-out;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_sm};

    @media ${theme.media.desktop} {
      font-size: ${theme.fontSize.text_2xs};
    }
  `}

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonMenu = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  filter: brightness(0.8);
  transition: ease filter 0.2s;
`;

export const DesktopContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      width: auto;
      display: flex;
      justify-content: space-between;
    }
  `}
`;

export const MobileContainer = styled.div`
  display: flex;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`;
