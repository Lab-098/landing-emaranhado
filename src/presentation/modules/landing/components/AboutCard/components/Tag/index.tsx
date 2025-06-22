import * as S from "./styles";
import { ITagProps } from "./types";

export function Tag({ text, top, left, right, bottom }: ITagProps) {
  return (
    <S.Container top={top} left={left} right={right} bottom={bottom}>
      {text}
    </S.Container>
  );
}
