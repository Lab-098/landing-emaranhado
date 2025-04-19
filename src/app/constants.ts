import { clientsMock } from "@/mocks/clients";
import { ILandingProps } from "./types";
import { aboutMock } from "@/mocks/about";

export const mockLanding: ILandingProps = {
  landing: {
    clients: clientsMock,
    about: aboutMock,
  },
};
