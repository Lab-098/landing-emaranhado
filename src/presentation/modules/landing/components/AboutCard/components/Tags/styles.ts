"use client";

import styled from "styled-components";

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
