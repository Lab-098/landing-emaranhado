import { clientsMock } from "@/mocks/clients";
import { ILandingProps } from "./types";
import { aboutMock } from "@/mocks/about";
import { servicesMock } from "@/mocks/services";

export const mockLanding: ILandingProps = {
  landing: {
    clients: clientsMock,
    about: aboutMock,
    services: servicesMock,
  },
};
