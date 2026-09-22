import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL, WHATSAPP_URL } from "@/data";

const AppleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.05 12.54c-.03-2.89 2.36-4.27 2.47-4.34-1.35-1.97-3.44-2.24-4.18-2.27-1.78-.18-3.47 1.05-4.37 1.05-.9 0-2.29-1.02-3.77-1-1.94.03-3.72 1.13-4.72 2.86-2.01 3.49-.51 8.66 1.45 11.5.96 1.39 2.1 2.95 3.6 2.89 1.45-.06 2-.93 3.74-.93s2.24.93 3.77.9c1.56-.03 2.55-1.41 3.5-2.8 1.1-1.61 1.56-3.17 1.58-3.25-.03-.02-3.04-1.17-3.07-4.61zM14.16 4.06c.8-.97 1.34-2.31 1.19-3.66-1.15.05-2.55.77-3.38 1.74-.74.86-1.39 2.23-1.22 3.55 1.29.1 2.6-.65 3.41-1.63z" />
  </svg>
);

const PlayIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3.6 2.3c-.3.28-.48.71-.48 1.22v16.96c0 .51.18.94.48 1.22l.08.07 9.5-9.5v-.21L3.68 2.23l-.08.07zm12.4 9.03l-2.73-2.73 3.35-3.35 2.6 1.48c.74.42.74 1.11 0 1.53l-3.22 1.83v1.24zm-.62.62L4.61 22.72c.38.4 1 .45 1.61.05l9.16-5.2-2.62-2.62zm-2.62-4.86L4.61 1.28c-.61-.4-1.23-.35-1.61.05l10.76 10.76 2.62-2.62z" transform="scale(0.9) translate(1.3 1)" />
  </svg>
);

const stores = [
  { url: APP_STORE_URL, Icon: AppleIcon, sub: "Scarica su", label: "App Store", testid: "app-store-button" },
  { url: PLAY_STORE_URL, Icon: PlayIcon, sub: "Disponibile su", label: "Google Play", testid: "play-store-button" },
].filter((s) => s.url && s.url !== "#");

export default function AppDownload() {
  return (
    <section id="app" className="py-28 md:py-40 bg-surface/40 border-y border-line relative overflow-hidden" data-testid="app-section">
      <div
        aria-hidden="true"
        className="absolute -left-16 bottom-0 font-display text-[22rem] leading-none text-outline opacity-30 select-none hidden lg:block"
      >
        App
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-y-12 lg:gap-x-12 items-center relative">
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase text-brass mb-6">
              <span className="h-px w-12 bg-brass inline-block" />
              La Nostra App
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter text-cream leading-[1.02]">
              Prenota e acquista.<br />
              <span className="font-script text-brass">Tutto dall'app.</span>
            </h2>
            <p className="mt-6 text-creamdim leading-relaxed max-w-md">
              Appuntamenti, shop e promozioni in un unico posto: scarica l'app di
              Lumia Barber e porta il salone sempre con te.
            </p>

            <div className="mt-10 flex flex-wrap gap-4" data-testid="app-store-buttons">
              {stores.map(({ url, Icon, sub, label, testid }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={testid}
                  className="group inline-flex items-center gap-3 border border-brass/60 px-7 py-4 text-brass hover:bg-brass hover:text-espresso transition-colors duration-300"
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] tracking-[0.2em] uppercase opacity-70">{sub}</span>
                    <span className="block text-sm font-semibold tracking-wide">{label}</span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="app-whatsapp-link"
              className="group mt-8 inline-flex items-center gap-3 text-sm text-creamdim hover:text-brass transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="border-b border-line group-hover:border-brass pb-0.5 transition-colors duration-300">
                Oppure scrivici su WhatsApp
              </span>
            </a>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 48, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            data-testid="app-phone-mockup"
          >
            <div className="absolute -inset-3 border border-brass/30 translate-x-3 translate-y-3 pointer-events-none rounded-[3rem]" aria-hidden="true" />
            <div className="w-64 md:w-72 rounded-[2.5rem] border border-line bg-espresso p-3 shadow-2xl shadow-black/60">
              <div className="rounded-[2rem] bg-surface/80 overflow-hidden">
                <div className="flex justify-center pt-3 pb-1">
                  <span className="w-20 h-5 bg-espresso rounded-full" aria-hidden="true" />
                </div>
                <div className="px-6 py-8 text-center">
                  <p className="font-script text-3xl text-cream leading-none">Lumia</p>
                  <p className="font-script text-3xl text-brass leading-none mt-1">Barber</p>
                  <div className="mt-6 space-y-3 text-left">
                    <div className="border border-line px-4 py-3">
                      <p className="text-[10px] tracking-[0.25em] uppercase text-brass">Prossimo appuntamento</p>
                      <p className="text-sm text-cream mt-1">Taglio Uomo — 10:30</p>
                    </div>
                    <div className="border border-line px-4 py-3">
                      <p className="text-[10px] tracking-[0.25em] uppercase text-brass">Shop</p>
                      <p className="text-sm text-cream mt-1">Pomata Opaca — €16</p>
                    </div>
                    <div className="bg-brass text-espresso text-center text-xs font-semibold tracking-[0.25em] uppercase py-3">
                      Prenota ora
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
