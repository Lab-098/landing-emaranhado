"use client";

import { theme } from "@/presentation/external/styled";
import { Title } from "@/presentation/shared/components/layout";
import styled, { css } from "styled-components";
import bgDivider from "@/public/images/core/star.svg";
import { motion } from "motion/react";

export const Container = styled.section`
  width: 100%;
  position: relative;

  ${({ theme }) => css`
    padding: ${theme.spacing["13x"]} ${theme.spacing["7x"]};
    background-color: ${theme.colors.white["100"]};

    @media ${theme.media.desktop} {
      padding: ${theme.spacing["13x"]};
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["14x"]};
  `}
`;

export const Divider = styled.div`
  width: 100%;
  height: 109px;
  background-image: url(${bgDivider.src});
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  z-index: ${({ theme }) => theme.elevation[4]};
`;

export const StyledTitle = styled(Title).attrs({
  color: theme.colors.blue[800],
})`
  text-align: center;
`;

export const CardsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    pointer-events: none;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.08), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.08), transparent);
  }

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      overflow: visible;
      scroll-snap-type: none;
      &::before,
      &::after {
        display: none;
      }
    }
  `}
`;
