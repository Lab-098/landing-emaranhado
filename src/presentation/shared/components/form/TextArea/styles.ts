"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2x"]};
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.8s;

  color: ${({ theme }) => theme.colors.white[200]};
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 180px;

  ${({ theme }) => css`
    padding: ${theme.spacing["3x"]} 10px;
    color: ${theme.colors.white[100]};
    background-color: ${theme.colors.blue["900"]};
    border: 1px solid ${theme.colors.blue["200"]};
    border-radius: ${theme.radius.sm};
    outline: none;
    font-weight: 300;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: ${theme.colors.blue["100"]};
    }

    &:focus,
    &:active {
      outline: 2px solid ${theme.colors.blue["200"]};
    }

    &::placeholder {
      color: ${theme.colors.white[200]};
      font-family: ${theme.fonts.primary};
      opacity: 0.3;
    }
  `}
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8s;

  color: ${({ theme }) => theme.colors.red[800]};
`;
