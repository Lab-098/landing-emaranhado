"use client";

import Image from "next/image";
import { CldImage } from "next-cloudinary";
import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const Container = styled(motion.div)`
  width: 280px;
  height: 280px;
  display: flex;
  position: relative;
  border-radius: 20px;
  flex: 0 0 auto;
`;

export const StyledImage = styled(CldImage)`
  border-radius: 20px;
  position: absolute;
  z-index: ${({ theme }) => theme.elevation[2]};
  object-fit: cover;
`;

export const Wave = styled(Image)`
  width: 100%;
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.elevation[3]};
`;

export const Content = styled.div`
  height: 80px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => css`
    z-index: ${theme.elevation[4]};
    padding: ${theme.spacing["2x"]} ${theme.spacing["5x"]};
  `}
`;

export const Name = styled.p`
  font-weight: 600;
  line-height: 112%;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: 18px;
  `}
`;

export const Role = styled.p`
  font-weight: 300;
  line-height: 112%;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    opacity: 0.6;
    font-size: 14px;
  `}
`;
