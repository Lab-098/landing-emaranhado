import { IMember } from "../TeamSection/types";

import waveIllustration from "@/public/images/core/wave.svg";

import * as S from "./styles";

export function TeamCard({ image, name, role, ...props }: IMember) {
  return (
    <S.Container {...props}>
      <S.StyledImage src={image.url} alt={image.alt} fill priority />
      <S.Wave
        src={waveIllustration}
        alt="Wave illustration"
        quality={100}
        priority
      />
      <S.Content>
        <S.Name>{name}</S.Name>
        <S.Role>{role}</S.Role>
      </S.Content>
    </S.Container>
  );
}
