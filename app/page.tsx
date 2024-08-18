import AboutSection from "./components/about-section/about-section";
import { ClientsSection } from "./components/clients-section";
import { ContactSection } from "./components/contact-section";
import { StacksSection } from "./components/stacks-section";
import { PortFolioSection } from "./components/portfolio-section";
import HeroSection from "./components/hero-section/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <AboutSection />
      <PortFolioSection />
      {/* <ClientsSection />
      <StacksSection /> */}
      <ContactSection />
    </main>
  );
}
