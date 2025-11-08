import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import IntroSection from "./sections/IntroSection";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <Divider />
      </main>
    </div>
  );
}
