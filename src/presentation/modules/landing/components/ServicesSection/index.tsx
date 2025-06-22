import React from "react";
import { ServicesCard } from "../ServicesCard";
import * as S from "./styles";
import { IServicesProps } from "./types";
import { Page } from "@/presentation/shared/components/layout";

export function ServicesSection({ data }: IServicesProps) {
  const { cards } = data;

  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.StyledTitle title={data.title} />
          <S.CardsContainer>
            {React.Children.toArray(
              cards.map((card) => (
                <ServicesCard.Root key={card.id}>
                  <ServicesCard.Header title={card.title} />
                  <ServicesCard.Content
                    description={card.description}
                    tags={card.tags}
                  />
                </ServicesCard.Root>
              ))
            )}
          </S.CardsContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
