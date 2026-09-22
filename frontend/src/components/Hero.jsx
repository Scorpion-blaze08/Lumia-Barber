import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, X } from "lucide-react";
import { APP_STORE_URL, IMAGES, PLAY_STORE_URL } from "@/data";

const lines = [
  { text: "L'ARTE", italic: false },
  { text: "DEL TAGLIO", italic: false },
  { text: "Italiano.", italic: true },
];

const reveal = {
  hidden: { y: "115%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.35 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  useEffect(() => {
    if (!isDownloadOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsDownloadOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isDownloadOpen]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden" data-testid="hero-section">
      <div
        aria-hidden="true"
        className="absolute -right-24 top-16 font-display text-[26rem] leading-none text-outline opacity-40 select-none hidden lg:block"
      >
        L
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full grid grid-cols-12 gap-y-8 lg:gap-x-8 items-center">
        <motion.div style={{ y: textY }} className="col-span-12 lg:col-span-7 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase text-brass mb-8"
            data-testid="hero-eyebrow"
          >
            <span className="h-px w-12 bg-brass inline-block" />
            Parrucchieri — dal 2015
          </motion.p>

          <h1 className="font-display font-semibold tracking-tighter text-cream text-6xl sm:text-7xl lg:text-8xl leading-[0.95]" data-testid="hero-title">
            {lines.map((l, i) => (
              <span key={l.text} className="block overflow-hidden pb-1">
                <motion.span
                  custom={i}
                  variants={reveal}
                  initial="hidden"
                  animate="visible"
                  className={`block ${l.italic ? "font-display italic font-light text-brass" : ""}`}
                >
                  {l.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8 max-w-md text-creamdim text-base md:text-lg leading-relaxed"
            data-testid="hero-subtitle"
          >
            Non un semplice taglio, ma un rito. Forbice, lametta e panno caldo:
            la tradizione del barbiere italiano, ogni giorno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <button
              type="button"
              onClick={() => setIsDownloadOpen(true)}
              data-testid="hero-app-button"
              className="group inline-flex items-center gap-3 bg-brass text-espresso px-8 py-4 text-sm font-semibold tracking-[0.2em] uppercase hover:bg-cream transition-colors duration-300"
            >
              Scarica la nostra app
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#listino"
              data-testid="hero-pricelist-link"
              className="text-sm tracking-[0.2em] uppercase text-creamdim hover:text-brass transition-colors duration-300 border-b border-line hover:border-brass pb-1"
            >
              Scopri il listino
            </a>
          </motion.div>
        </motion.div>

        <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-3 border border-brass/30 translate-x-4 translate-y-4 pointer-events-none" aria-hidden="true" />
            <div className="overflow-hidden">
              <motion.img
                style={{ y: imgY, scale: 1.15 }}
                src={IMAGES.hero}
                alt="Barbiere al lavoro da Lumia Barber"
                className="w-full aspect-[4/5] object-cover"
                data-testid="hero-image"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute -bottom-6 -left-6 bg-surface border border-line px-6 py-4"
              data-testid="hero-badge"
            >
              <p className="font-display italic text-2xl text-brass">10+ anni</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-creamdim mt-1">di mestiere</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#manifesto"
        data-testid="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-10 flex items-center gap-3 text-creamdim hover:text-brass transition-colors duration-300"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" />
        </motion.span>
        <span className="text-[10px] tracking-[0.35em] uppercase">Scorri</span>
      </motion.a>
      {isDownloadOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-6"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsDownloadOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-app-title"
            className="relative w-full max-w-md border border-brass/50 bg-espresso p-8 shadow-2xl shadow-black/60"
          >
            <button
              type="button"
              onClick={() => setIsDownloadOpen(false)}
              aria-label="Chiudi"
              className="absolute right-4 top-4 p-2 text-creamdim transition-colors hover:text-brass"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-xs uppercase tracking-[0.3em] text-brass">Lumia Barber</p>
            <h2 id="download-app-title" className="mt-3 font-display text-3xl text-cream">
              Scegli il tuo dispositivo
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-creamdim">
              Scarica l’app Lumia Barber dallo store del tuo dispositivo.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsDownloadOpen(false)}
                data-testid="hero-ios-download"
                className="border border-brass/60 px-5 py-4 text-center text-sm font-semibold tracking-wide text-brass transition-colors hover:bg-brass hover:text-espresso"
              >
                iOS / App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsDownloadOpen(false)}
                data-testid="hero-android-download"
                className="border border-brass/60 px-5 py-4 text-center text-sm font-semibold tracking-wide text-brass transition-colors hover:bg-brass hover:text-espresso"
              >
                Android / Google Play
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
