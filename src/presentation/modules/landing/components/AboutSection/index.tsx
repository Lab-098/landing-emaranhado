import * as S from "./styles";
import { IAboutProps } from "./types";
import { AboutCard } from "../AboutCard/components";

import LeftIllustration from "@/public/images/about/about_left.png";
import RightIllustration from "@/public/images/about/about_right.png";
import { Page } from "@/presentation/shared/components/layout";

export function AboutSection({ data }: IAboutProps) {
  const { content } = data;

  return (
    <S.Container id="about">
      <Page.Wrapper>
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
                loading="eager"
              />
            </S.ContainerImg>

            <AboutCard.Tags tags={content.tags} />
          </AboutCard.Root>
        </S.Content>
      </Page.Wrapper>

      <S.LeftIllustration
        src={LeftIllustration}
        alt="Illustração Emaranhado Azul"
        width={893}
        height={426}
        quality={100}
      />
      <S.RightIllustration
        src={RightIllustration}
        alt="Illustração Emaranhado Azul"
        width={893}
        height={423}
      />
    </S.Container>
  );
}
