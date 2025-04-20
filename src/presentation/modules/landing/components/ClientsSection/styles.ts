"use client";

import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;

  ${({ theme }) => css`
    padding: ${theme.spacing["13x"]} ${theme.spacing["7x"]};

    @media ${theme.media.desktop} {
      padding: ${theme.spacing["13x"]};
    }
  `}
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["7x"]};
  `}
`;

export const Title = styled.h5`
  text-align: center;
  font-weight: 400;

  ${({ theme }) => css`
    color: ${theme.colors.blue[800]};
    font-size: ${theme.fontSize.text_2xs};
  `}
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerImg = styled.div`
  width: 181px;
  height: 101px;
  position: relative;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      width: 243px;
      height: 136px;
    }
  `}
`;
