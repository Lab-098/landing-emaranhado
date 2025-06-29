import { MotionProps } from "motion/react";
import { ReactNode } from "react";

interface IRootProps extends MotionProps {
  children: ReactNode;
}

export type { IRootProps };
