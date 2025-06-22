import { IMember } from "../TeamSection/types";

import waveIllustration from "@/public/images/core/wave.svg";

import * as S from "./styles";

export function TeamCard({ image, name, role }: IMember) {
  return (
    <S.Container>
      <S.StyledImage
        src={image.url}
        alt={image.alt}
        fill
        quality={100}
        objectFit="cover"
      />
      <S.Wave src={waveIllustration} alt="Wave illustration" quality={100} />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Role>{role}</S.Role>
      </S.Content>
    </S.Container>
  );
}
