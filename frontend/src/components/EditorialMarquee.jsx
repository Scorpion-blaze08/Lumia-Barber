import Marquee from "react-fast-marquee";

const items = [
  "LUMIA BARBER",
  "L'ARTE DEL TAGLIO",
  "RASATURA TRADIZIONALE",
  "DAL 2015",
  "PRECISIONE ITALIANA",
  "PANNO CALDO & LAMETTA",
];

export default function EditorialMarquee() {
  return (
    <section className="border-y border-line py-8 md:py-10 bg-surface/40" data-testid="editorial-marquee">
      <Marquee speed={28} gradient={false} pauseOnHover>
        {items.map((item) => (
          <span key={item} className="flex items-center">
            <span className="font-display italic font-light text-3xl md:text-5xl text-cream/80 whitespace-nowrap px-8">
              {item}
            </span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5 md:w-6 md:h-6 text-brass shrink-0" aria-hidden="true">
              <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
            </svg>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
