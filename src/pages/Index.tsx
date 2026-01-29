import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import USP from "@/components/sections/USP";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Events from "@/components/sections/Events";
import Booking from "@/components/sections/Booking";
import Contacts from "@/components/sections/Contacts";

const Index = () => {
  return (
    <div className="min-h-screen rich-bg">
      {/* Noise overlay for entire page */}
      <div className="fixed inset-0 noise-overlay pointer-events-none z-0" aria-hidden="true" />
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <About />
        <Team />
        <USP />
        <Menu />
        <Gallery />
        <Events />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
