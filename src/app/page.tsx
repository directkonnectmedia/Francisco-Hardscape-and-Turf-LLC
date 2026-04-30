import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import QuoteWizard from "@/components/QuoteWizard";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <QuoteWizard />
    </>
  );
}