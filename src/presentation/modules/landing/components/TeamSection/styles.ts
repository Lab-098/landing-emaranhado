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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
