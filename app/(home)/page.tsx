import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
