import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import IntroSection from "./sections/IntroSection";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
      </main>
    </div>
  );
}
