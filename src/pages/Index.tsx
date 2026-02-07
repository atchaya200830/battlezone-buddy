import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CharactersSection from "@/components/CharactersSection";
import WeaponsSection from "@/components/WeaponsSection";
import GameModesSection from "@/components/GameModesSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CharactersSection />
      <WeaponsSection />
      <GameModesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
