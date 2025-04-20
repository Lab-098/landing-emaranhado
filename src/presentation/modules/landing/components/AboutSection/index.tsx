import * as S from "./styles";
import { IAboutProps } from "./types";
import { AboutCard } from "../AboutCard/components";

import Illustraion from "@/public/images/core/emaranhados_azul.svg";

export function AboutSection({ data }: IAboutProps) {
  const { content } = data;

  return (
    <S.Container>
      <S.Content>
        <S.StyledTitle title={data.title} />
        <AboutCard.Root>
          <AboutCard.Content
            title={content.title}
            description={content.description}
          />
          <S.ContainerImg>
            <S.StyledImage
              src={content.image.url}
              alt={content.image.alt}
              layout="fill"
              objectFit="cover"
            />
          </S.ContainerImg>

          <AboutCard.Tags tags={content.tags} />
        </AboutCard.Root>
      </S.Content>

      <S.Illustration src={Illustraion} alt="Illustração Emaranhado Azul" />
    </S.Container>
  );
}
