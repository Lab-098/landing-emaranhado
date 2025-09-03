import Image from "next/image";
import * as S from "./styles";
import { IHeaderProps } from "./types";

import Icon from "@/public/images/services/star.svg";

export function Header({ title }: IHeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <Image src={Icon} alt="Illustração" height={32} width={32} />
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
}
