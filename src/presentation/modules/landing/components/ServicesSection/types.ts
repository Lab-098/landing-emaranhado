interface ICardServices {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

interface IServices {
  title: string;
  cards: ICardServices[];
}

interface IServicesProps {
  data: IServices;
}

export type { IServicesProps, ICardServices };
