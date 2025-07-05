"use client";

import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  position: relative;

  ${({ theme }) => css`
    padding: ${theme.spacing["10x"]} ${theme.spacing["7x"]};
    background-color: ${theme.colors.blue[500]};
    border-bottom-left-radius: ${theme.spacing["9x"]};
    border-bottom-right-radius: ${theme.spacing["9x"]};
    z-index: ${theme.elevation[4]};

    @media ${theme.media.desktop} {
      padding: ${theme.spacing["13x"]};
      height: 74.4rem;
      border-bottom-left-radius: ${theme.spacing["12x"]};
      border-bottom-right-radius: ${theme.spacing["12x"]};
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ${({ theme }) => css`
    gap: ${theme.spacing["8x"]};
    @media ${theme.media.desktop} {
      flex-direction: row;
      gap: 0px;
    }
  `}
`;

export const CaseContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ theme }) => css`
    gap: ${theme.spacing["8x"]};
  `}
`;

export const TextContent = styled.div`
  max-width: 60rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};
  `}
`;

export const ActionContent = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["4x"]};
  `}
`;

export const ButtonMenu = styled.button`
  width: 3.8rem;
  height: 3.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  filter: brightness(0.8);
  transition: ease filter 0.2s;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.white[100]};
    border-radius: ${theme.radius.xl};
  `}
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      width: auto;
      justify-content: start;
    }
  `}
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
`;

export const Description = styled.p`
  font-weight: 400;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_xs};
    line-height: 148%;
  `}
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["3x"]};
  `}
`;

export const AboutTitle = styled.h5`
  font-weight: 500;
  line-height: 142%;

  ${({ theme }) => css`
    color: ${theme.colors.orange[500]};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_md};
  `}
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutService = styled.p`
  font-weight: 400;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_xs};
    line-height: 142%;
  `}
`;

export const MainServices = styled.p`
  font-weight: 400;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_xs};
    line-height: 142%;
  `}
`;

export const CasesImagesContainer = styled.div`
  position: absolute;
  top: 530px;
  right: 0px;

  display: flex;
  align-items: center;

  ${({ theme }) => css`
    z-index: ${theme.elevation[4]};

    @media ${theme.media.desktop} {
      top: 74px;
    }
  `}
`;

export const ContainerImg = styled.div`
  width: 174px;
  height: 223px;
  position: relative;

  ${({ theme }) => css`
    border-radius: ${theme.spacing["5x"]};

    @media ${theme.media.desktop} {
      width: 366px;
      height: 457px;
    }
  `}
`;

export const ContainerImgLogo = styled.div`
  position: relative;
  width: 207px;
  height: 65px;
`;

export const FirstImageCase = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.spacing["3x"]};

    @media ${theme.media.desktop} {
      transform: rotate(-3.6deg);
      transition:
        transform 0.4s ease,
        z-index 0.4s ease;
      margin-top: 60px;
      margin-left: 138px;
      border-radius: ${theme.spacing["5x"]};
      z-index: ${theme.elevation[5]};
      &:hover {
        transform: rotate(1deg) scale(1.05);
        z-index: ${({ theme }) => theme.elevation[6]};
      }
    }
  `}
`;

export const SecondImageCase = styled(Image)`
  ${({ theme }) => css`
    border-radius: ${theme.spacing["3x"]};

    @media ${theme.media.desktop} {
      transform: rotate(6.54deg);
      margin-top: -64px;

      transition:
        transform 0.4s ease,
        z-index 0.4s ease;

      border-radius: ${theme.spacing["5x"]};
      z-index: ${theme.elevation[4]};

      &:hover {
        transform: rotate(-2deg) scale(1.05);
        z-index: ${({ theme }) => theme.elevation[6]};
      }
    }
  `}
`;

export const MobileCasesImagesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    gap: ${theme.spacing["5x"]};
    margin-bottom: ${theme.spacing["6x"]};

    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`;

export const ContainerIllustration = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  height: 100%;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: block;
    }
  `}
`;

export const ContainerImgIllustration = styled.div`
  width: 311px;
  height: 800px;
  position: relative;
`;

export const MobileContainer = styled.div`
  width: 100%;
  display: flex;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`;

export const DesktopContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: flex;
      width: 487px;
    }
  `}
`;
