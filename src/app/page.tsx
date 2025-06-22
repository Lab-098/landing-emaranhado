import { Page, Header, Footer } from "@/presentation/shared/components/layout";
import {
  HeroSection,
  ClientsSection,
  AboutSection,
  ServicesSection,
  CasesSection,
  NumbersSection,
  TeamSection,
  FormSection,
} from "@/presentation/modules/landing/components";

import { mockLanding } from "./constants";

export default function Landing() {
  const { landing } = mockLanding;

  return (
    <Page.Root>
      <Header />
      <HeroSection data={landing.hero.data} />
      <ClientsSection data={landing.clients.data} />
      <AboutSection data={landing.about.data} />
      <ServicesSection data={landing.services.data} />
      <CasesSection data={landing.cases.data} />
      <NumbersSection data={landing.numbers.data} />
      <TeamSection data={landing.team.data} />
      <FormSection data={landing.form.data} />
      <Footer data={landing.footer.data} />
    </Page.Root>
  );
}
