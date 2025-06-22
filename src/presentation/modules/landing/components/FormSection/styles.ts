"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  position: relative;

  ${({ theme }) => css`
    padding: ${theme.spacing["13x"]} ${theme.spacing["7x"]};
    background-color: ${theme.colors.blue["800"]};

    @media ${theme.media.desktop} {
      padding-top: ${theme.spacing["13x"]};
      padding-bottom: 220px;
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["10x"]};

    @media ${theme.media.desktop} {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["5x"]};
  `}
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["3x"]};

    ${({ theme }) => css`
      @media ${theme.media.desktop} {
        justify-content: start;
        align-items: start;
        text-align: start;
        gap: ${theme.spacing["7x"]};
      }
    `}
  `}
`;

export const Title = styled.h1`
  font-weight: 500;
  max-width: 488px;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_xl};

    @media ${theme.media.desktop} {
      font-size: ${theme.fontSize.text_4xl};
    }
  `}
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_xs};
    max-width: 247px;

    @media ${theme.media.desktop} {
      font-size: ${theme.fontSize.text_2xs};
      text-align: start;
    }
  `}
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};
  `}
`;

export const SocialMediaIcon = styled(Link)`
  height: 58px;
  width: 58px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    border-radius: ${theme.radius.xl};
    background-color: ${theme.colors.blue[500]};
  `}
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["7x"]};

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      width: 698px;
    }
  `}
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["7x"]};

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      flex-direction: row;
    }
  `}
`;

export const Illustration = styled(Image)`
  position: absolute;
  bottom: 13px;
  left: 0px;
  display: none;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: block;
    }
  `}
`;

export const DesktopContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: flex;
    }
  `}
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["5x"]};

    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`;
