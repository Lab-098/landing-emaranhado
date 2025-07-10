"use client";

import styled, { css, keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      top: 20px;
      right: 20px;
    }
  `}
`;

export const Container = styled.div`
  width: 100dvw;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: ${slideIn} 0.3s ease-out;

  ${({ theme }) => css`
    padding: ${theme.spacing["4x"]};
    background-color: ${theme.colors.white[200]};
    border: 1px solid #ededed;
    z-index: ${theme.elevation.max};

    @media ${theme.media.desktop} {
      width: 340px;
      height: 74px;
      border-radius: 6px;
    }
  `}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

export const Title = styled.h3`
  font-weight: 600;

  ${({ theme }) => css`
    color: ${theme.colors.blue[800]};
    font-size: ${theme.fontSize.text_2xs};
  `}
`;

export const Description = styled.p`
  font-weight: 400;
  opacity: 0.6;

  ${({ theme }) => css`
    color: ${theme.colors.blue[800]};
    font-size: 1.3rem;
  `}
`;

export const Circle = styled.div<{ type: "sucess" | "error" }>`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme, type }) => css`
    background-color: ${type === "sucess" ? "#C1FFE1" : "#FFC1C1"};
    border-radius: ${theme.radius.xl};
  `}
`;
