"use client";

import styled, { css } from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  overflow: hidden;
  ${({ theme }) => css`
    z-index: ${theme.elevation.max - 1};
  `}
`;

export const ContainerMenu = styled.div`
  width: 29.3rem;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;

  ${({ theme }) => css`
    padding: ${theme.spacing["8x"]} ${theme.spacing["7x"]};
    background: ${theme.colors.blue[500]};
    color: ${theme.colors.white[100]};
    z-index: ${theme.elevation.max};
  `}
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  ${({ theme }) => css`
    background: ${theme.colors.black[0]};
    z-index: ${theme.elevation.max - 1};
  `}
`;

export const ButtonMenu = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  filter: brightness(0.8);
  transition: ease filter 0.2s;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["15x"]};
  `}
`;
