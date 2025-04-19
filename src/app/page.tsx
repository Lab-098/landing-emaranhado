import { Page, Header } from "@/presentation/shared/components/layout";
import { HeroSection } from "@/presentation/modules/landing/components";
import { ClientsSection } from "@/presentation/modules/landing/components/ClientsSection";
import { mockLanding } from "./constants";

export default function Landing() {
  const { landing } = mockLanding;

  return (
    <Page.Root>
      <Header />
      <HeroSection />
      <ClientsSection data={landing.clients.data} />
    </Page.Root>
  );
}
