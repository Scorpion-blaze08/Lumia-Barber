import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialMarquee from "@/components/EditorialMarquee";
import Manifesto from "@/components/Manifesto";
import Servizi from "@/components/Servizi";
import Galleria from "@/components/Galleria";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EditorialMarquee />
        <Manifesto />
        <Servizi />
        <Galleria />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
