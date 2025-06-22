import React from "react";

import { Page, Title } from "@/presentation/shared/components/layout";

import { INumbersProps, TOrientation } from "./types";
import * as S from "./styles";

export function NumbersSection({ data }: INumbersProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <Title title={data.title} />
          <S.CardContainer>
            {React.Children.toArray(
              data.numbers.map((item) => (
                <S.Card
                  key={item.number}
                  orientation={item.orientation as TOrientation}
                >
                  <S.Number>{item.number}</S.Number>
                  <S.Title>{item.title}</S.Title>
                </S.Card>
              ))
            )}
          </S.CardContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
