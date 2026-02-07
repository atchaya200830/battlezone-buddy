import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, Apple } from "lucide-react";

const platforms = [
  {
    name: "Android",
    icon: <Smartphone className="w-8 h-8" />,
    requirements: "Android 8.0+ | 2GB RAM | 1.5GB Storage",
    buttonText: "Download APK",
  },
  {
    name: "iOS",
    icon: <Apple className="w-8 h-8" />,
    requirements: "iOS 12.0+ | iPhone 6S or later",
    buttonText: "App Store",
  },
  {
    name: "PC",
    icon: <Monitor className="w-8 h-8" />,
    requirements: "Windows 10+ | 4GB RAM | 5GB Storage",
    buttonText: "Download for PC",
  },
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-rajdhani text-sm font-semibold text-secondary uppercase tracking-[0.3em]">
            Ready to Play?
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-2 text-foreground">
            DOWNLOAD <span className="text-gradient-fire">NOW</span>
          </h2>
          <p className="font-rajdhani text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
            Available on all major platforms. Download for free and join millions of players worldwide.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 p-8 text-center transition-all duration-500 hover:shadow-[0_0_40px_hsl(25_100%_50%_/_0.2)]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:glow-orange transition-all duration-300">
                {platform.icon}
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-foreground mb-2">
                {platform.name}
              </h3>
              <p className="font-rajdhani text-sm text-muted-foreground mb-6">
                {platform.requirements}
              </p>
              <Button variant="fire" className="w-full">
                {platform.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* System Requirements Toggle */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border">
            <span className="font-rajdhani text-sm text-muted-foreground">
              Over <span className="font-orbitron text-primary font-bold">500 Million</span> downloads worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
