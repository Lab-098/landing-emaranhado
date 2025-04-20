"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.blue[500]};
    border: 1px solid ${theme.colors.white[100]};
    padding: 6px 18px;
    border-radius: ${theme.radius.xl};
    z-index: ${theme.elevation[1]};
    color: ${theme.colors.white[100]};
    font-family: ${theme.fonts.secondary};
    font-size: ${theme.fontSize.text_xs};
    line-height: 142%;
  `}
`;
