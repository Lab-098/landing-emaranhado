"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 58%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  position: absolute;
  bottom: -20px;
  left: -20px;
`;

export const TagsTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

export const TagsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  padding: 0 2rem;
  margin-top: -0.5rem;
`;

export const DesktopContainer = styled.div`
  display: none;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: block;
    }
  `}
`;

export const MobileContainer = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ theme }) => css`
    @media ${theme.media.desktop} {
      display: none;
    }
  `}
`;
