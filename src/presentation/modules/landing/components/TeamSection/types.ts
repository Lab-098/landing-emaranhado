import { IImagesProps } from "@/app/types";

interface IMember {
  name: string;
  role: string;
  image: IImagesProps;
}

interface ITeam {
  title: string;
  members: IMember[];
}

interface ITeamProps {
  data: ITeam;
}

export type { ITeamProps, IMember };
