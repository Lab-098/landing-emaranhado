"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 259px;
  background: radial-gradient(at 0% 100%, #034de2 34%, #07adff 100%);

  ${({ theme }) => css`
    border: 1px solid #07adff;
    border-radius: 0px 0px ${theme.radius.lg} ${theme.radius.lg};
    padding: ${theme.spacing["6x"]};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled.h5`
  font-weight: 500;
  line-height: 132%;

  ${({ theme }) => css`
    color: ${theme.colors.white[100]};
    font-size: ${theme.fontSize.text_2xs};
  `}
`;

export const TagsContainer = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;

  ${({ theme }) => css`
    gap: ${theme.spacing["2x"]};
  `}
`;

export const Tag = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.orange[500]};
    border-radius: ${theme.radius.xl};
    color: ${theme.colors.white[100]};
    font-weight: 500;
    padding: 2px 4px;
    font-size: 14px;
  `}
`;
