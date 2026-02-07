import { Users, Trophy, Gamepad2, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameMode {
  name: string;
  description: string;
  players: string;
  duration: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const gameModes: GameMode[] = [
  {
    name: "Battle Royale",
    description: "Classic 50-player survival mode. Last one standing wins. Loot, fight, survive.",
    players: "50 Players",
    duration: "10-15 min",
    icon: <Users className="w-10 h-10" />,
    featured: true,
  },
  {
    name: "Ranked Mode",
    description: "Competitive matches with skill-based ranking. Climb the leaderboard.",
    players: "50 Players",
    duration: "15-20 min",
    icon: <Trophy className="w-10 h-10" />,
  },
  {
    name: "Clash Squad",
    description: "4v4 round-based combat. Buy weapons each round. First to 4 wins.",
    players: "8 Players",
    duration: "5-10 min",
    icon: <Swords className="w-10 h-10" />,
  },
  {
    name: "Custom Room",
    description: "Create your own rules. Invite friends. Host private matches.",
    players: "Up to 52",
    duration: "Custom",
    icon: <Gamepad2 className="w-10 h-10" />,
  },
];

const GameModesSection = () => {
  return (
    <section id="modes" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-rajdhani text-sm font-semibold text-primary uppercase tracking-[0.3em]">
            Multiple Ways to Play
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-2 text-foreground">
            GAME <span className="text-gradient-fire">MODES</span>
          </h2>
        </div>

        {/* Modes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameModes.map((mode) => (
            <div
              key={mode.name}
              className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl border transition-all duration-500 p-6 flex flex-col ${
                mode.featured
                  ? "border-primary/50 hover:border-glow-orange lg:col-span-2 lg:row-span-2"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {/* Featured badge */}
              {mode.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/50">
                  <span className="font-rajdhani text-xs font-bold text-primary uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-4 ${
                mode.featured ? "mb-6" : ""
              }`}>
                {mode.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className={`font-orbitron font-bold text-foreground mb-2 ${
                  mode.featured ? "text-3xl" : "text-xl"
                }`}>
                  {mode.name}
                </h3>
                <p className={`font-rajdhani text-muted-foreground mb-4 ${
                  mode.featured ? "text-lg" : "text-sm"
                }`}>
                  {mode.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div>
                  <span className="font-rajdhani text-xs text-muted-foreground uppercase">Players</span>
                  <p className="font-orbitron text-sm font-bold text-primary">{mode.players}</p>
                </div>
                <div>
                  <span className="font-rajdhani text-xs text-muted-foreground uppercase">Duration</span>
                  <p className="font-orbitron text-sm font-bold text-secondary">{mode.duration}</p>
                </div>
              </div>

              {/* Play button for featured */}
              {mode.featured && (
                <Button variant="fire" size="lg" className="mt-6">
                  Play Now
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameModesSection;
