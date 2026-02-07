import { Crosshair, Zap, Target, Shield } from "lucide-react";

interface Weapon {
  name: string;
  type: string;
  damage: number;
  range: number;
  accuracy: number;
  fireRate: number;
  icon: React.ReactNode;
}

const weapons: Weapon[] = [
  {
    name: "AK-X PHANTOM",
    type: "Assault Rifle",
    damage: 75,
    range: 70,
    accuracy: 65,
    fireRate: 80,
    icon: <Crosshair className="w-8 h-8" />,
  },
  {
    name: "M1014 DEVASTATOR",
    type: "Shotgun",
    damage: 95,
    range: 25,
    accuracy: 45,
    fireRate: 35,
    icon: <Zap className="w-8 h-8" />,
  },
  {
    name: "AWM PRECISION",
    type: "Sniper Rifle",
    damage: 100,
    range: 100,
    accuracy: 90,
    fireRate: 15,
    icon: <Target className="w-8 h-8" />,
  },
  {
    name: "MP5-K RAPID",
    type: "SMG",
    damage: 45,
    range: 40,
    accuracy: 55,
    fireRate: 95,
    icon: <Shield className="w-8 h-8" />,
  },
];

const StatBar = ({ value, color }: { value: number; color: string }) => (
  <div className="h-2 bg-muted rounded-full overflow-hidden">
    <div
      className={`h-full ${color} transition-all duration-500`}
      style={{ width: `${value}%` }}
    />
  </div>
);

const WeaponsSection = () => {
  return (
    <section id="weapons" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-rajdhani text-sm font-semibold text-secondary uppercase tracking-[0.3em]">
            Arsenal
          </span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black mt-2 text-foreground">
            DEADLY <span className="text-gradient-cyber">WEAPONS</span>
          </h2>
        </div>

        {/* Weapons Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {weapons.map((weapon, index) => (
            <div
              key={weapon.name}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-secondary/50 p-6 transition-all duration-500 hover:shadow-[0_0_40px_hsl(190_100%_50%_/_0.2)]"
            >
              {/* Weapon Icon */}
              <div className="absolute top-6 right-6 text-secondary/30 group-hover:text-secondary/60 transition-colors duration-300">
                {weapon.icon}
              </div>

              {/* Weapon Info */}
              <div className="mb-6">
                <span className="font-rajdhani text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {weapon.type}
                </span>
                <h3 className="font-orbitron text-2xl font-bold text-foreground group-hover:text-gradient-cyber transition-colors duration-300">
                  {weapon.name}
                </h3>
              </div>

              {/* Stats */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-rajdhani text-sm text-muted-foreground">Damage</span>
                    <span className="font-orbitron text-sm text-primary">{weapon.damage}</span>
                  </div>
                  <StatBar value={weapon.damage} color="bg-gradient-fire" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-rajdhani text-sm text-muted-foreground">Range</span>
                    <span className="font-orbitron text-sm text-secondary">{weapon.range}</span>
                  </div>
                  <StatBar value={weapon.range} color="bg-gradient-cyber" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-rajdhani text-sm text-muted-foreground">Accuracy</span>
                    <span className="font-orbitron text-sm text-emerald-500">{weapon.accuracy}</span>
                  </div>
                  <StatBar value={weapon.accuracy} color="bg-emerald-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-rajdhani text-sm text-muted-foreground">Fire Rate</span>
                    <span className="font-orbitron text-sm text-yellow-500">{weapon.fireRate}</span>
                  </div>
                  <StatBar value={weapon.fireRate} color="bg-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaponsSection;
