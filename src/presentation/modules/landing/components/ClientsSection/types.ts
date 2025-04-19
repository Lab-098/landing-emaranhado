interface IImagesProps {
  id: string;
  url: string;
  alt: string;
}

interface IClient {
  title: string;
  images: IImagesProps[];
}

interface IClientsProps {
  data: IClient;
}

export type { IClientsProps };
