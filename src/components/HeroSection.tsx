import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Fire Battle Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Animated scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 bg-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-rajdhani text-sm font-semibold text-primary uppercase tracking-wider">
              Season 5 Now Live
            </span>
          </div>

          {/* Title */}
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-foreground">SURVIVE</span>
            <br />
            <span className="text-gradient-fire text-glow-orange">& CONQUER</span>
          </h1>

          {/* Subtitle */}
          <p className="font-rajdhani text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Fast-paced battle royale action. 50 players. 10 minutes. 
            One survivor. Are you ready to dominate?
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="fire" size="xl" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Now
            </Button>
            <Button variant="outlineCyan" size="xl" className="group">
              <Play className="w-5 h-5" />
              Watch Trailer
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            <div className="text-center">
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-gradient-fire">
                500M+
              </div>
              <div className="font-rajdhani text-sm text-muted-foreground uppercase tracking-wider">
                Downloads
              </div>
            </div>
            <div className="text-center">
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-gradient-cyber">
                50+
              </div>
              <div className="font-rajdhani text-sm text-muted-foreground uppercase tracking-wider">
                Characters
              </div>
            </div>
            <div className="text-center">
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-gradient-fire">
                200+
              </div>
              <div className="font-rajdhani text-sm text-muted-foreground uppercase tracking-wider">
                Weapons
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
