import * as S from "./styles";
import { IRootProps } from "./types";

import Illustration from "@/public/images/about/sun.png";

export function Root({ children }: IRootProps) {
  return (
    <S.Container>
      {children}
      <S.Illustration
        src={Illustration}
        alt="Sporte Illustration"
        width={207}
        height={205}
      />
    </S.Container>
  );
}
