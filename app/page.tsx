import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { InfoCards } from "@/components/info-cards";
import { SocialLinks } from "@/components/social-links";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Mission />
        <InfoCards />
        <SocialLinks />
      </main>
      <Footer />
    </>
  );
}