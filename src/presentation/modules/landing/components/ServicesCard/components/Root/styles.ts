"use client";

import { motion } from "motion/react";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.13s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      width: 384px;
    }
  `}
`;
