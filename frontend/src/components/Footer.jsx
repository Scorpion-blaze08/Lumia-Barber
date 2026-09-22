import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Facebook, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { SOCIALS, ADDRESS, PHONE_DISPLAY, PHONE_TEL } from "@/data";

const TikTokIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socials = [
  { label: "Instagram", href: SOCIALS.instagram, Icon: Instagram, testid: "social-instagram" },
  { label: "Facebook", href: SOCIALS.facebook, Icon: Facebook, testid: "social-facebook" },
  { label: "TikTok", href: SOCIALS.tiktok, Icon: TikTokIcon, testid: "social-tiktok" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/60" data-testid="footer">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block group text-center"
          data-testid="footer-wordmark"
        >
          <span className="flex justify-center leading-none">
            <img
              src="/images/logo-header.png"
              alt="Lumia Barber"
              className="h-16 md:h-24 w-auto group-hover:opacity-80 transition-opacity duration-500"
            />
          </span>
          <span className="block mt-4 text-[10px] md:text-xs tracking-[0.6em] uppercase text-creamdim">
            Parrucchieri
          </span>
        </motion.a>

        <div className="mt-16 grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-brass mb-4">Seguici</p>
            <div className="flex gap-4" data-testid="footer-socials">
              {socials.map(({ label, href, Icon, testid }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-testid={testid}
                  className="w-12 h-12 flex items-center justify-center border border-line text-creamdim hover:border-brass hover:text-brass hover:-translate-y-1 transition-[border-color,color,transform] duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 text-sm text-creamdim space-y-3" data-testid="footer-contacts">
            <p className="text-xs tracking-[0.3em] uppercase text-brass mb-3">Dove siamo</p>
            <p className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brass shrink-0" />
              {ADDRESS}
            </p>
            <a href={PHONE_TEL} data-testid="footer-phone-link" className="flex items-center gap-3 hover:text-brass transition-colors duration-300">
              <Phone className="w-4 h-4 text-brass shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <p>Mar — Sab · Dom e Lun chiuso</p>
          </div>

          <div className="col-span-12 md:col-span-3 md:text-right">
            <a
              href="#app"
              data-testid="footer-app-link"
              className="group inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-brass hover:text-cream transition-colors duration-300"
            >
              Scarica l'app
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-wrap justify-between items-center gap-4 text-xs text-creamdim/60">
          <p>© {new Date().getFullYear()} Lumia Barber. Tutti i diritti riservati.</p>
          <Link
            to="/privacy"
            data-testid="footer-privacy-link"
            className="hover:text-brass transition-colors duration-300 underline underline-offset-4 decoration-line"
          >
            Privacy Policy
          </Link>
          <p className="font-display italic text-sm text-creamdim">L'arte del taglio, dal 2015.</p>
        </div>
      </div>
    </footer>
  );
}
