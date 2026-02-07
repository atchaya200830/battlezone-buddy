import { useState } from "react";
import characterRex from "@/assets/character-rex.png";
import characterNova from "@/assets/character-nova.png";
import characterMedic from "@/assets/character-medic.png";
import characterScout from "@/assets/character-scout.png";

interface Character {
  id: number;
  name: string;
  role: string;
  ability: string;
  description: string;
  image: string;
  color: "orange" | "cyan" | "green" | "purple";
}

const characters: Character[] = [
  {
    id: 1,
    name: "REX",
    role: "Assault",
    ability: "Rage Mode",
    description: "Increases damage output by 30% for 5 seconds when health drops below 50%.",
    image: characterRex,
    color: "orange",
  },
  {
    id: 2,
    name: "NOVA",
    role: "Sniper",
    ability: "Eagle Eye",
    description: "Improves accuracy and extends weapon range by 50% while scoped.",
    image: characterNova,
    color: "cyan",
  },
  {
    id: 3,
    name: "PULSE",
    role: "Medic",
    ability: "Healing Aura",
    description: "Regenerates health for nearby teammates at a rate of 5HP per second.",
    image: characterMedic,
    color: "green",
  },
  {
    id: 4,
    name: "SHADOW",
    role: "Scout",
    ability: "Ghost Walk",
    description: "Become invisible for 3 seconds when standing still for 2 seconds.",
    image: characterScout,
    color: "purple",
  },
];

const colorClasses = {
  orange: {
    border: "border-primary hover:border-glow-orange",
    glow: "glow-orange",
    text: "text-primary",
    bg: "bg-primary/20",
  },
  cyan: {
    border: "border-secondary hover:border-glow-cyan",
    glow: "glow-cyan",
    text: "text-secondary",
    bg: "bg-secondary/20",
  },
  green: {
    border: "border-green-500 hover:shadow-[0_0_30px_hsl(120_100%_40%_/_0.5)]",
    glow: "shadow-[0_0_30px_hsl(120_100%_40%_/_0.5)]",
    text: "text-green-500",
    bg: "bg-green-500/20",
  },
  purple: {
    border: "border-purple-500 hover:shadow-[0_0_30px_hsl(270_100%_50%_/_0.5)]",
    glow: "shadow-[0_0_30px_hsl(270_100%_50%_/_0.5)]",
    text: "text-purple-500",
    bg: "bg-purple-500/20",
  },
};

const CharactersSection = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character>(characters[0]);

  return (
    <section id="characters" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-rajdhani text-sm font-semibold text-primary uppercase tracking-[0.3em]">
            Choose Your Fighter
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-2 text-foreground">
            LEGENDARY <span className="text-gradient-fire">CHARACTERS</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character Display */}
          <div className="relative">
            <div className={`absolute inset-0 ${colorClasses[selectedCharacter.color].glow} rounded-3xl opacity-30 blur-3xl`} />
            <div className={`relative bg-card/50 backdrop-blur-sm rounded-3xl border-2 ${colorClasses[selectedCharacter.color].border} p-8 transition-all duration-500`}>
              <img
                src={selectedCharacter.image}
                alt={selectedCharacter.name}
                className="w-full max-h-[500px] object-contain mx-auto animate-float"
              />
            </div>
          </div>

          {/* Character Info */}
          <div>
            {/* Character Name & Role */}
            <div className="mb-8">
              <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${colorClasses[selectedCharacter.color].bg} mb-4`}>
                <span className={`font-rajdhani text-sm font-bold uppercase tracking-wider ${colorClasses[selectedCharacter.color].text}`}>
                  {selectedCharacter.role}
                </span>
              </div>
              <h3 className="font-orbitron text-5xl md:text-6xl font-black text-foreground mb-4">
                {selectedCharacter.name}
              </h3>
              <div className="mb-4">
                <span className="font-rajdhani text-sm text-muted-foreground uppercase tracking-wider">
                  Special Ability:
                </span>
                <span className={`ml-2 font-orbitron text-lg font-bold ${colorClasses[selectedCharacter.color].text}`}>
                  {selectedCharacter.ability}
                </span>
              </div>
              <p className="font-rajdhani text-lg text-muted-foreground">
                {selectedCharacter.description}
              </p>
            </div>

            {/* Character Selection */}
            <div className="grid grid-cols-4 gap-4">
              {characters.map((character) => (
                <button
                  key={character.id}
                  onClick={() => setSelectedCharacter(character)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedCharacter.id === character.id
                      ? `${colorClasses[character.color].border} ${colorClasses[character.color].glow}`
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-24 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-orbitron text-xs font-bold text-foreground">
                    {character.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
