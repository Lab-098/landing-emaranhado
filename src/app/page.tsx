import { Page, Header } from "@/presentation/shared/components/layout";
import {
  HeroSection,
  ClientsSection,
  AboutSection,
  ServicesSection,
} from "@/presentation/modules/landing/components";

import { mockLanding } from "./constants";

export default function Landing() {
  const { landing } = mockLanding;

  return (
    <Page.Root>
      <Header />
      <HeroSection />
      <ClientsSection data={landing.clients.data} />
      <AboutSection data={landing.about.data} />
      <ServicesSection data={landing.services.data} />
    </Page.Root>
  );
}
