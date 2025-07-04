interface INavigation {
  title: string;
  url: string;
}

interface IFooter {
  title: string;
  navigation: INavigation[];
  email: string;
  phone: string;
  developerFor: string;
  copyright: string;
}

interface IFooterProps {
  data: IFooter;
}

export type { IFooterProps };
