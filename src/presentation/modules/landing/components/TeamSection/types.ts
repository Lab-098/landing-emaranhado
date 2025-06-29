import { IImagesProps } from "@/app/types";

import { MotionProps } from "motion/react";

interface IMember extends MotionProps {
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
