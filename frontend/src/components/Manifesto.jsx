import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/data";

const chapters = [
  {
    n: "01",
    title: "L'Inizio",
    text: "Tutto ha inizio quando Fabio, a soli 14 anni, sceglie per la prima volta di impugnare forbici e pettine. La sua è una passione viscerale, guidata da un'ambizione costante: perfezionarsi ogni giorno di più, studiare i dettagli e guardare sempre avanti.",
  },
  {
    n: "02",
    title: "La Vocazione",
    text: "Negli occhi del fratello minore, Damiano, quella dedizione lascia un segno profondo. Guardando Fabio lavorare con tanto entusiasmo, Damiano scopre la sua stessa vocazione e decide di seguire le impronte del fratello maggiore, intraprendendo la medesima strada con la stessa grinta.",
  },
  {
    n: "03",
    title: "La Piccola Stanza",
    text: "I primi passi insieme li muovono in una stanza piccolissima: poche sedie, tanta buona volontà e una determinazione d'acciaio. Giorno dopo giorno, taglio dopo taglio, il calore e la qualità del loro lavoro iniziano a conquistare la fiducia dei clienti, trasformando quel piccolo spazio iniziale in qualcosa di troppo stretto per i loro sogni.",
  },
  {
    n: "04",
    title: "Oggi",
    text: "L'attività cresce, la passione si moltiplica e quella piccola stanza si allarga, fino a trasformarsi nella splendida realtà che Lumia Barber rappresenta oggi: il coronamento di un viaggio fatto di fratellanza, sacrificio e amore per questo lavoro. Qui ogni cliente non trova semplicemente un servizio di barba e capelli, ma un'esperienza costruita su anni di esperienza, ricerca continua e la stessa passione autentica dei primi giorni.",
  },
];

export default function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} id="manifesto" className="py-28 md:py-40" data-testid="manifesto-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase text-brass mb-16"
        >
          <span className="h-px w-12 bg-brass inline-block" />
          La Nostra Storia
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display italic font-light text-2xl md:text-4xl text-cream leading-snug max-w-3xl mb-20 md:mb-28"
          data-testid="story-intro"
        >
          C'era una volta un'arte antica, fatta di gesti precisi, profumo di dopobarba e
          conversazioni autentiche. Per noi, però, tutto questo non è mai stato soltanto
          un mestiere: è una vera e propria storia di famiglia.
        </motion.p>

        <div className="grid grid-cols-12 gap-y-20 md:gap-x-12">
          <div className="col-span-12 lg:col-span-7 space-y-24">
            {chapters.map((c, i) => (
              <motion.article
                key={c.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className={`flex gap-8 md:gap-12 ${i === 1 ? "md:ml-16" : ""}`}
                data-testid={`manifesto-chapter-${c.n}`}
              >
                <span className="font-display text-7xl md:text-8xl font-light text-outline leading-none shrink-0 select-none">
                  {c.n}
                </span>
                <div className="pt-3">
                  <h3 className="font-display italic text-3xl md:text-4xl text-cream mb-4">{c.title}</h3>
                  <p className="text-creamdim leading-relaxed max-w-md">{c.text}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="lg:sticky lg:top-32"
            >
              <div className="absolute -inset-3 border border-brass/30 -translate-x-4 -translate-y-4 pointer-events-none" aria-hidden="true" />
              <div className="overflow-hidden">
                <motion.img
                  style={{ y: imgY, scale: 1.15 }}
                  src={IMAGES.craft}
                  alt="Strumenti del barbiere"
                  className="w-full aspect-[3/4] object-cover"
                  data-testid="manifesto-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
