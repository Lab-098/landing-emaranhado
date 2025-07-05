"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  position: relative;

  ${({ theme }) => css`
    padding: ${theme.spacing["10x"]} ${theme.spacing["4x"]};
    background-color: ${theme.colors.blue[500]};

    @media ${theme.media.desktop} {
      padding: ${theme.spacing["13x"]} ${theme.spacing["13x"]}
        ${theme.spacing["7x"]} ${theme.spacing["13x"]};
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["8x"]};
  `}
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    gap: ${theme.spacing["10x"]};

    @media ${theme.media.desktop} {
      align-items: start;
      flex-direction: row;
      gap: ${theme.spacing["4x"]};
    }
  `}
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["4x"]};

    @media ${theme.media.desktop} {
      align-items: start;
      justify-content: start;
    }
  `}
`;

export const ContainerImg = styled.div`
  width: 100px;
  height: 70px;
  position: relative;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      width: 120px;
      height: 82px;
    }
  `}
`;

export const StyledImage = styled(Image)``;

export const Title = styled.p`
  font-weight: 300;
  max-width: 200px;
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_xs};

    @media ${theme.media.desktop} {
      text-align: start;
    }
  `}
`;

export const Main = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["8x"]};

    @media ${theme.media.desktop} {
      gap: 230px;
      text-align: start;
      flex-direction: row;
    }
  `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["3x"]};

    @media ${theme.media.desktop} {
      align-items: start;
    }
  `}
`;

export const TitleColumn = styled.p`
  font-weight: 500;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: 18px;
  `}
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["6x"]};
  `}
`;

export const Item = styled.p`
  font-weight: 300;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_2xs};
  `}
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

export const CopyrightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      align-items: flex-start;
      text-align: end;
      gap: ${theme.spacing["1x"]};
    }
  `}
`;

export const Text = styled.p`
  font-weight: 300;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_3xs};
  `}
`;

export const Redirect = styled(Link)`
  font-weight: 500;
  transition: filter 0.3s;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_3xs};
  `}

  &:hover {
    filter: brightness(0.8);
  }
`;

export const BackToTop = styled(Link)`
  font-weight: 400;
  transition: filter 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_2xs};
    gap: ${theme.spacing["1x"]};
  `}

  &:hover {
    filter: brightness(0.8);
  }
`;
