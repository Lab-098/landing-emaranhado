import { Page, Header } from "@/presentation/shared/components/layout";
import { HeroSection } from "@/presentation/modules/landing/components";
import { ClientsSection } from "@/presentation/modules/landing/components/ClientsSection";
import { mockLanding } from "./constants";
import { AboutSection } from "@/presentation/modules/landing/components/AboutSection";

export default function Landing() {
  const { landing } = mockLanding;

  return (
    <Page.Root>
      <Header />
      <HeroSection />
      <ClientsSection data={landing.clients.data} />
      <AboutSection data={landing.about.data} />
    </Page.Root>
  );
}
