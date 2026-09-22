import { motion } from "framer-motion";
import { GALLERY } from "@/data";

export default function Galleria() {
  return (
    <section id="galleria" className="py-28 md:py-40" data-testid="gallery-section">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase text-brass mb-6">
              <span className="h-px w-12 bg-brass inline-block" />
              La Galleria
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter text-cream leading-[1.02]">
              Dentro il <span className="italic font-medium text-brass">salone.</span>
            </h2>
          </div>
          <p className="text-creamdim max-w-xs text-sm leading-relaxed">
            Luci calde, sedie in pelle, il profumo del talco. Questa è casa nostra.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-6" data-testid="gallery-grid">
          {GALLERY.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden ${img.span}`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`w-full ${img.ratio} object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-[filter,transform] duration-700 ease-out`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-espresso/60 backdrop-blur-sm px-5 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs tracking-[0.25em] uppercase text-cream">{img.alt}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
