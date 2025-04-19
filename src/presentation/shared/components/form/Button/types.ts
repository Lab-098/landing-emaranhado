import { theme } from "@/presentation/external/styled";
import { ButtonHTMLAttributes } from "react";

type TSizeButton = "xs" | "sm" | "md" | "lg";

type TSizeMapProps = Record<TSizeButton, keyof typeof theme.spacing>;

interface IStyleButtonProps {
  size?: TSizeButton;
  width?: number;
  height?: number;
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  size?: TSizeButton;
  width?: number;
  height?: number;
}

export type { IButtonProps, IStyleButtonProps, TSizeMapProps };
