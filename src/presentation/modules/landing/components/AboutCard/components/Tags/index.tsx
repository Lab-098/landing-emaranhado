import { Tag } from "../Tag";
import * as S from "./styles";
import { ITagProps, TTag } from "./types";

export function Tags({ tags }: ITagProps) {
  const tagsTopLine = tags.slice(0, 3);
  const tagsBottomLine = tags.slice(3);

  const mobileNameTags = tags.reduce<Record<TTag, { name: TTag }>>(
    (acc, tag) => {
      acc[tag as TTag] = { name: tag as TTag };
      return acc;
    },
    {} as Record<TTag, { name: TTag }>
  );

  return (
    <>
      <S.DesktopContainer>
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
      </S.DesktopContainer>
      <S.MobileContainer>
        <Tag text={mobileNameTags.Branding.name} top={-18} left={4} />
        <Tag text={mobileNameTags.Resultados.name} top={18} right={12} />
        <Tag text={mobileNameTags.Estratégias.name} bottom={146} left={10} />
        <Tag text={mobileNameTags.Criatividade.name} bottom={154} right={10} />
        <Tag text={mobileNameTags.Comunicação.name} bottom={-85} left={105} />
      </S.MobileContainer>
    </>
  );
}
