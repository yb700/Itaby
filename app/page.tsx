import About from "./components/About";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSection />
      <Clients />
      <About />
      <Community />
      <Team />
      <Footer />
    </div>
  );
}
