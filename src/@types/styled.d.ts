/* eslint-disable @typescript-eslint/no-empty-object-type */
import "styled-components";
import { TTheme } from "@/presentation/external/styled/theme";

declare module "styled-components" {
  export interface DefaultTheme extends TTheme {}
}