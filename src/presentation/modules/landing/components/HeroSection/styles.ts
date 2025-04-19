"use client";

import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 54.5rem;
  position: relative;

  ${({ theme }) => css`
    background: ${theme.colors.blue[500]};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["10x"]};
  `}
`;

export const TextContainer = styled.div`
  max-width: 104.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    gap: ${theme.spacing["3x"]};
  `}
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_4xl};
  `}
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-weight: 500;
  line-height: 110%;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_4xl};
  `}
`;
