export const site = {
  name: "House of Darya",
  tagline: "Made-to-Order Fine Jewellery",
  description:
    "100% made-to-order customized diamond and gemstone jewellery. Try 9000+ solitaire designs at home with our Home Atelier service in Lucknow. HUID hallmarked, IGI certified.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://houseofdarya.barqova.com",
  city: "Lucknow",
  phone: "+91 88080 11818",
  whatsapp: "https://wa.me/918808011818?text=Hello%20House%20of%20Darya%2C%20I%20would%20like%20to%20know%20more%20about%20the%20Home%20Atelier.",
  email: "atelier@houseofdarya.com",
  instagram: "https://instagram.com/houseofdarya",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "house-of-darya-6og9do/home-atelier-visit",
};

export const trustMarks = [
  { title: "100% Made-to-Order", note: "Every piece crafted for you alone" },
  { title: "HUID Hallmarked", note: "BIS-certified gold purity" },
  { title: "IGI Certified", note: "Diamonds & gemstones, independently graded" },
  { title: "Natural Diamonds", note: "Earth eternal brilliance" },
  { title: "Lab-Grown Diamonds", note: "Identical fire, modern provenance" },
  {
    title: "Lifetime Buyback & Exchange",
    note: "100% value on gold + up to 80% value in diamonds*",
  },
];
