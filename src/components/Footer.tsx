import { Flame, Youtube, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    game: ["Download", "Characters", "Weapons", "Game Modes", "Updates"],
    support: ["FAQ", "Contact Us", "Report Bug", "Community Guidelines"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-8 h-8 text-primary" />
              <span className="font-orbitron text-xl font-bold text-gradient-fire">
                FIRE BATTLE
              </span>
            </div>
            <p className="font-rajdhani text-muted-foreground mb-6">
              The ultimate battle royale experience. Fast-paced action, intense gameplay, endless fun.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Game
            </h4>
            <ul className="space-y-2">
              {footerLinks.game.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-rajdhani text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-rajdhani text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-rajdhani text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-rajdhani text-sm text-muted-foreground">
            © 2024 Fire Battle. All rights reserved.
          </p>
          <p className="font-rajdhani text-sm text-muted-foreground">
            Made with 🔥 for gamers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
