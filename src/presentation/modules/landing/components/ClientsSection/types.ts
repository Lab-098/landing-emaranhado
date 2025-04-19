import { IImagesProps } from "@/app/types";

interface IClient {
  title: string;
  images: IImagesProps[];
}

interface IClientsProps {
  data: IClient;
}

export type { IClientsProps };
