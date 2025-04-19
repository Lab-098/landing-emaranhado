import * as S from "./styles";
import { IRootProps } from "./types";

import SporeIllustration from "@/public/images/about/spore_yellow.svg";

export function Root({ children }: IRootProps) {
  return (
    <S.Container>
      {children}
      <S.Illustration
        src={SporeIllustration}
        alt="Sporte Illustration"
        width={207}
        height={205}
      />
    </S.Container>
  );
}
