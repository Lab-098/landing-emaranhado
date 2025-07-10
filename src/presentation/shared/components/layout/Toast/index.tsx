import * as S from "./styles";
import { IToastProps } from "./types";

import { PiCheckBold, PiX } from "react-icons/pi";

export function Toast({ type }: IToastProps) {
  return (
    <S.Container>
      {type === "sucess" ? (
        <S.TextContainer>
          <S.Title>Mensagem enviada com sucesso!</S.Title>
          <S.Description>Aguarde pelo retorno no seu e-mail.</S.Description>
        </S.TextContainer>
      ) : (
        <S.TextContainer>
          <S.Title>Mensagem não enviada!</S.Title>
          <S.Description>
            Ocorreu um erro. Tente novamente mais tarde.
          </S.Description>
        </S.TextContainer>
      )}

      <S.Circle type={type}>
        {type === "sucess" ? (
          <PiCheckBold size={30} color="#00D655" />
        ) : (
          <PiX size={30} color="#EC1A1A" />
        )}
      </S.Circle>
    </S.Container>
  );
}
