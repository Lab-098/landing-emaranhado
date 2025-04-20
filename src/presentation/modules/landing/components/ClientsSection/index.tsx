import Image from "next/image";
import * as S from "./styles";
import { IClientsProps } from "./types";

export function ClientsSection({ data }: IClientsProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Title>{data.title}</S.Title>
        <S.ImagesContainer>
          {data.images.map((image) => (
            <S.ContainerImg key={image.id}>
              <Image src={image.url} alt={image.alt} layout="fill" />
            </S.ContainerImg>
          ))}
        </S.ImagesContainer>
      </S.Content>
    </S.Container>
  );
}
