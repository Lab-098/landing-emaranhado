import { Tag } from "../Tag";
import * as S from "./styles";
import { ITagProps } from "./types";

export function Tags({ tags }: ITagProps) {
  const tagsTopLine = tags.slice(0, 3);
  const tagsBottomLine = tags.slice(3);

  return (
    <S.Container>
      <S.TagsTop>
        {tagsTopLine.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </S.TagsTop>
      <S.TagsBottom>
        {tagsBottomLine.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </S.TagsBottom>
    </S.Container>
  );
}
