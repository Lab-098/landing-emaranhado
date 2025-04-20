import { clientsMock } from "@/mocks/clients";
import { ILandingProps } from "./types";
import { aboutMock } from "@/mocks/about";
import { servicesMock } from "@/mocks/services";
import { heroMock } from "@/mocks/hero";

export const mockLanding: ILandingProps = {
  landing: {
    hero: heroMock,
    clients: clientsMock,
    about: aboutMock,
    services: servicesMock,
  },
};
