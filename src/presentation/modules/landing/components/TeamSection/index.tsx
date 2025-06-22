import React from "react";
import * as S from "./styles";
import { ITeamProps } from "./types";
import { TeamCard } from "../TeamCard";
import { Page } from "@/presentation/shared/components/layout";

export function TeamSection({ data }: ITeamProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.Divider />
          <S.StyledTitle title={data.title} />
          <S.CardsContainer>
            {React.Children.toArray(
              data.members.map((member) => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              ))
            )}
          </S.CardsContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
