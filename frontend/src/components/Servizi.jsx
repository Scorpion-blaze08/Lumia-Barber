import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data";

export default function Servizi() {
  return (
    <section id="listino" className="py-28 md:py-40 bg-surface/40 border-y border-line" data-testid="services-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-12 gap-y-12 lg:gap-x-12">
        <div className="col-span-12 lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <p className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase text-brass mb-6">
              <span className="h-px w-12 bg-brass inline-block" />
              Il Listino
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter text-cream leading-[1.02]">
              Servizi &<br />
              <span className="italic font-medium text-brass">Prezzi.</span>
            </h2>
            <p className="mt-6 text-creamdim leading-relaxed max-w-xs">
              Nessuna sorpresa: il prezzo che vedi è il prezzo che paghi.
              Prenota il servizio direttamente dalla nostra app.
            </p>
            <a
              href="#app"
              data-testid="services-app-link"
              className="group mt-8 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-brass hover:text-cream transition-colors duration-300"
            >
              Prenota dall'app
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <ul className="divide-y divide-line border-t border-b border-line" data-testid="services-list">
            {SERVICES.map((s, i) => (
              <motion.li
                key={s.name}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="group py-6 md:py-7 px-2 md:px-4 flex items-baseline gap-4 hover:bg-brass/5 transition-colors duration-300"
                data-testid={`service-item-${i}`}
              >
                <div className="min-w-0">
                  <h3 className="font-display text-2xl md:text-3xl text-cream group-hover:text-brass transition-colors duration-300">
                    {s.name}
                    {s.time ? (
                      <span className="font-sans text-xs tracking-[0.2em] uppercase text-creamdim ml-3">
                        · {s.time}
                      </span>
                    ) : null}
                  </h3>
                  {s.desc ? <p className="text-sm text-creamdim mt-1">{s.desc}</p> : null}
                </div>
                <span className="flex-1 border-b border-dotted border-line group-hover:border-brass/50 transition-colors duration-300 -translate-y-1" aria-hidden="true" />
                <span className="font-display text-2xl md:text-3xl text-brass shrink-0" data-testid={`service-price-${i}`}>
                  {s.price}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
