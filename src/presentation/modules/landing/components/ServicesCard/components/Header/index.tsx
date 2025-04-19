import Image from "next/image";
import * as S from "./styles";
import { IHeaderProps } from "./types";

import Icon from "@/public/images/services/icon.svg";

export function Header({ title }: IHeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <Image src={Icon} alt="Illustração" height={39} width={39} />
        <S.Title>{title}</S.Title>
      </S.Content>
    </S.Container>
  );
}
