import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import Services from "@/components/Services";
import TailoredCare from "@/components/TailoredCare";
import OutcomeCompass from "@/components/OutcomeCompass";
import LivingPulse from "@/components/LivingPulse";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import BookCta from "@/components/BookCta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="page-in">
        <LivingPulse locale="en" />
        <Hero />
        <MarqueeBand />
        <OutcomeCompass locale="en" />
        <Services />
        <TailoredCare />
        <BeforeAfter />
        <Reviews />
        <BookCta />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
