import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Parts from "@/components/Parts";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Parts />
      <About />
      <Gallery />
      <FAQ />
      <Contacts />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
