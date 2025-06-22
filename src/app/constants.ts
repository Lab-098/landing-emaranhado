import { clientsMock } from "@/mocks/clients";
import { ILandingProps } from "./types";
import { aboutMock } from "@/mocks/about";
import { servicesMock } from "@/mocks/services";
import { heroMock } from "@/mocks/hero";
import { casesMock } from "@/mocks/cases";
import { numbersMock } from "@/mocks/numbers";
import { footerMock } from "@/mocks/footer";
import { formMock } from "@/mocks/form";
import { teamMock } from "@/mocks/team";

export const mockLanding: ILandingProps = {
  landing: {
    hero: heroMock,
    clients: clientsMock,
    about: aboutMock,
    services: servicesMock,
    cases: casesMock,
    numbers: numbersMock,
    team: teamMock,
    form: formMock,
    footer: footerMock,
  },
};
