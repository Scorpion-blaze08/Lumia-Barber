import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Titolare del trattamento",
    body: "Il titolare del trattamento dei dati è Lumia Barber, Via Giuseppe Di Vittorio, Misterbianco (CT) (di seguito \"il Titolare\"). Per qualsiasi richiesta relativa alla privacy puoi contattarci telefonicamente o di persona presso il salone.",
  },
  {
    title: "2. Dati che raccogliamo",
    body: "Questo sito è una vetrina: non raccoglie direttamente dati personali e non contiene moduli di contatto o aree riservate. Prenotazioni e acquisti avvengono tramite l'app Lumia Barber, che dispone di una propria informativa privacy consultabile all'interno dell'app stessa.",
  },
  {
    title: "3. Cookie",
    body: "Questo sito non utilizza cookie di profilazione né strumenti di tracciamento di terze parti. Non vengono installati cookie di alcun tipo durante la navigazione.",
  },
  {
    title: "4. Link esterni",
    body: "Il sito contiene collegamenti a servizi esterni (Instagram, Facebook, TikTok, WhatsApp, App Store e Google Play). Cliccando su questi collegamenti si applicano le informative privacy dei rispettivi fornitori, che ti invitiamo a consultare.",
  },
  {
    title: "5. I tuoi diritti",
    body: "Ai sensi degli artt. 15-22 del GDPR hai diritto di: accedere ai tuoi dati, chiederne la rettifica o la cancellazione, limitare o opporti al trattamento, richiedere la portabilità dei dati e proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).",
  },
  {
    title: "6. Modifiche a questa informativa",
    body: "Il Titolare può aggiornare questa informativa in qualsiasi momento. La versione aggiornata è sempre disponibile in questa pagina, con indicazione della data di ultimo aggiornamento.",
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-espresso text-cream pt-28 pb-20 px-6 md:px-10" data-testid="privacy-page">
      <div className="max-w-[820px] mx-auto">
        <Link
          to="/"
          data-testid="privacy-back-link"
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-creamdim hover:text-brass transition-colors duration-300 mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Torna al sito
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="flex items-center gap-4 text-xs tracking-[0.4em] uppercase text-brass mb-6">
            <span className="h-px w-12 bg-brass inline-block" />
            Privacy
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter text-cream leading-[1.02] mb-4">
            Informativa <span className="font-script text-brass">Privacy.</span>
          </h1>
          <p className="text-creamdim text-sm mb-14">
            Ultimo aggiornamento: agosto 2026 — ai sensi del Regolamento (UE) 2016/679 (GDPR)
          </p>
        </motion.div>

        <div className="space-y-10" data-testid="privacy-sections">
          {sections.map((s, i) => (
            <motion.section
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
              className="border-t border-line pt-8"
              data-testid={`privacy-section-${i + 1}`}
            >
              <h2 className="font-display text-2xl text-cream mb-3">{s.title}</h2>
              <p className="text-creamdim leading-relaxed text-sm md:text-base">{s.body}</p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
