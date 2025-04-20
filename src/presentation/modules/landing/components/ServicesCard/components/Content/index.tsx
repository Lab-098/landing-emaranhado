import React from "react";
import * as S from "./styles";
import { IContentProps } from "./types";

export function Content({ description, tags }: IContentProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Description>{description}</S.Description>
        <S.TagsContainer>
          {React.Children.toArray(
            tags.map((tag, index) => <S.Tag key={index}>{tag}</S.Tag>)
          )}
        </S.TagsContainer>
      </S.Content>
    </S.Container>
  );
}
