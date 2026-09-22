import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Storia", href: "#manifesto" },
  { label: "Listino", href: "#listino" },
  { label: "Galleria", href: "#galleria" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-espresso/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center group">
          <img
            src="/images/logo-header.png"
            alt="Lumia Barber — Parrucchieri"
            className="h-9 sm:h-11 w-auto group-hover:opacity-80 transition-opacity duration-300"
            data-testid="nav-logo-image"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10" data-testid="nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="relative text-xs tracking-[0.25em] uppercase text-creamdim hover:text-cream transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-brass after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#app"
          data-testid="nav-app-cta"
          className="group inline-flex items-center gap-2 border border-brass/60 px-3.5 py-2 text-[10px] sm:px-5 sm:py-2.5 sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-brass hover:bg-brass hover:text-espresso transition-colors duration-300 whitespace-nowrap"
        >
          Scarica l'app
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.header>
  );
}
