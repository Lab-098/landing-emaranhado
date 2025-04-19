import Image from "next/image";
import * as S from "./styles";
import { IClientsProps } from "./types";
import { Page } from "@/presentation/shared/components/layout";

export function ClientsSection({ data }: IClientsProps) {
  return (
    <S.Container>
      <Page.Wrapper>
        <S.Content>
          <S.Title>{data.title}</S.Title>
          <S.ImagesContainer>
            {data.images.map((image) => (
              <Image
                key={image.id}
                src={image.url}
                alt={image.alt}
                width={243}
                height={136}
              />
            ))}
          </S.ImagesContainer>
        </S.Content>
      </Page.Wrapper>
    </S.Container>
  );
}
