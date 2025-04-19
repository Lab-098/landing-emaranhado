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
          <S.StyledImage
            src={content.image.url}
            alt={content.image.alt}
            width={586}
            height={394}
          />
        </AboutCard.Root>
      </S.Content>

      <S.Illustration src={Illustraion} alt="Illustração Emaranhado Azul" />
    </S.Container>
  );
}
