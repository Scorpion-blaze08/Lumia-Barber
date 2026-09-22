const u = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: "/images/fratelli-lumia.jpg",
  interior: "/images/sala.jpg",
  chair: "/images/sala-2.jpg",
  beard: "/images/damiano.jpg",
  shave: "/images/in-teoria.jpg",
  tools: "/images/strumenti.jpg",
  craft: "/images/strumenti.jpg",
};

export const GALLERY = [
  { src: "/images/fratelli-lumia.jpg", alt: "I Fratelli Lumia nel salone", span: "col-span-12 md:col-span-7", ratio: "aspect-[4/3]" },
  { src: "/images/damiano.jpg", alt: "Damiano al lavoro", span: "col-span-12 md:col-span-5", ratio: "aspect-[3/4] md:aspect-auto md:h-full" },
  { src: "/images/in-teoria.jpg", alt: "Rasatura tradizionale", span: "col-span-12 md:col-span-5", ratio: "aspect-[3/4]" },
  { src: "/images/sala-2.jpg", alt: "L'interno del salone", span: "col-span-12 md:col-span-7", ratio: "aspect-[4/3] md:aspect-auto md:h-full" },
  { src: "/images/nome.jpg", alt: "Lumia Barber", span: "col-span-12", ratio: "aspect-[16/8]" },
];

export const SERVICES = [
  { name: "Taglio Uomo", price: "€10", time: "20 min" },
  { name: "Rasatura Barba", price: "€5", time: "10 min" },
  { name: "Sopracciglia", price: "€5", time: "10 min" },
  { name: "Relax", price: "€18", time: "30 min" },
  { name: "Barba Sagomata", price: "€5", time: "15 min" },
  { name: "Shampoo", price: "€3", time: "5 min" },
  { name: "Keratina", price: "€50", time: "60 min" },
  { name: "Permanente", price: "€35", time: "60 min" },
  { name: "Taglio Bimbo", price: "€10", time: "30 min" },
  { name: "Barba Deluxe", price: "€15", time: "30 min" },
];

export const PRODUCTS = [
  {
    name: "Pomata Opaca Lumia",
    price: "€16",
    tag: "Best seller",
    src: u("photo-1620916566398-39f1143ab7be", 900),
  },
  {
    name: "Olio da Barba al Bergamotto",
    price: "€14",
    tag: "Artigianale",
    src: u("photo-1608571423902-eed4a5ad8108", 900),
  },
  {
    name: "Kit Cura Completo",
    price: "€32",
    tag: "Idea regalo",
    src: u("photo-1615634260167-c8cdede054de", 900),
  },
  {
    name: "Cera Modellante Forte",
    price: "€12",
    tag: "Tenuta forte",
    src: "https://images.pexels.com/photos/14649387/pexels-photo-14649387.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Shampoo Rinforzante",
    price: "€15",
    tag: "Uso quotidiano",
    src: "https://images.pexels.com/photos/8789590/pexels-photo-8789590.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    name: "Balsamo Barba Nutriente",
    price: "€13",
    tag: "Novità",
    src: u("photo-1631729371254-42c2892f0e6e", 900),
  },
];

export const TIME_SLOTS = [
  "09:00", "09:45", "10:30", "11:15", "12:00",
  "15:00", "15:45", "16:30", "17:15", "18:00", "18:45",
];

export const SOCIALS = {
  instagram: "https://www.instagram.com/lumia_barber",
  facebook: "#",   // ← inserisci link reale
  tiktok: "#",     // ← inserisci link reale
};

export const WHATSAPP_URL =
  "https://wa.me/393454516932?text=Ciao%20Lumia%20Barber%2C%20vorrei%20prenotare%20un%20appuntamento.";
export const PHONE_DISPLAY = "+39 345 451 6932";
export const PHONE_TEL = "tel:+393454516932";
export const ADDRESS = "Via Giuseppe Di Vittorio, Misterbianco (CT)";

export const APP_STORE_URL = "https://apps.apple.com/us/app/lumia-barber/id6778449688";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.cutapp.lumia";
