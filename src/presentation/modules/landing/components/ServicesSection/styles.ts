"use client";

import { theme } from "@/presentation/external/styled";
import { Title } from "@/presentation/shared/components/layout";
import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;

  ${({ theme }) => css`
    padding: ${theme.spacing["13x"]};
    background-color: ${theme.colors.white[200]};
    border-top-left-radius: ${theme.spacing["16x"]};
    border-top-right-radius: ${theme.spacing["16x"]};
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    gap: ${theme.spacing["13x"]};
  `}
`;

export const StyledTitle = styled(Title).attrs({
  color: theme.colors.blue[800],
})``;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
