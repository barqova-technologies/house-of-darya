import { images } from "@/lib/images";
import { productImage, type MetalColor, type Product } from "@/lib/products";

export type StoneId = "natural" | "lab-grown" | "gemstone";
export type MetalId = "gold-18k" | "gold-14k" | "gold-9k" | "silver-925";
export type MetalColorId = "yellow" | "white" | "rose";
export type CaratId = "0.50" | "0.70" | "1.00" | "1.50" | "2.00";
export type QualityId = "si-hi" | "vs-ef";

export const stones: { id: StoneId; name: string; note: string; certification: string; baseFrom: number; baseTo: number }[] = [
  {
    id: "natural",
    name: "Natural Diamond",
    note: "Earth eternal brilliance, graded for cut, colour and clarity",
    certification: "IGI Certified",
    baseFrom: 120000,
    baseTo: 180000,
  },
  {
    id: "lab-grown",
    name: "Lab-Grown Diamond",
    note: "Chemically identical fire with a modern provenance",
    certification: "IGI Certified",
    baseFrom: 65000,
    baseTo: 95000,
  },
  {
    id: "gemstone",
    name: "Coloured Gemstone",
    note: "Sapphire, emerald or ruby, chosen for depth of colour",
    certification: "IGI Certified",
    baseFrom: 85000,
    baseTo: 140000,
  },
];

export const qualities: { id: QualityId; name: string; note: string; factor: number }[] = [
  { id: "si-hi", name: "SI · H-I", note: "Eye-clean brilliance, warm near-white", factor: 1 },
  { id: "vs-ef", name: "VS · E-F", note: "Higher clarity, near-colourless", factor: 1.35 },
];

export const metals: {
  id: MetalId;
  name: string;
  note: string;
  factor: number;
  colours: MetalColorId[];
}[] = [
  { id: "gold-18k", name: "18kt Gold", note: "75% gold · HUID hallmarked", factor: 1, colours: ["yellow", "white", "rose"] },
  { id: "gold-14k", name: "14kt Gold", note: "58.5% gold · HUID hallmarked", factor: 0.82, colours: ["yellow", "white", "rose"] },
  { id: "gold-9k", name: "9kt Gold", note: "37.5% gold · HUID hallmarked", factor: 0.62, colours: ["yellow", "white", "rose"] },
  { id: "silver-925", name: "925 Silver", note: "Sterling silver · rhodium finished", factor: 0.35, colours: ["white"] },
];

export const metalColours: { id: MetalColorId; name: string; swatch: string }[] = [
  { id: "yellow", name: "Yellow", swatch: "#d4af6a" },
  { id: "white", name: "White", swatch: "#d9d9d9" },
  { id: "rose", name: "Rose", swatch: "#e0a87f" },
];

export const carats: { id: CaratId; name: string; note: string; factor: number }[] = [
  { id: "0.50", name: "0.50 carat", note: "Refined everyday scale", factor: 1 },
  { id: "0.70", name: "0.70 carat", note: "The balanced choice", factor: 1.5 },
  { id: "1.00", name: "1.00 carat", note: "The defining solitaire", factor: 2.4 },
  { id: "1.50", name: "1.50 carat", note: "Commanding presence", factor: 3.8 },
  { id: "2.00", name: "2.00 carat", note: "A rare statement", factor: 5.4 },
];

export type Birthstone = { month: string; stone: string; image: string };

export const birthstones: Birthstone[] = [
  { month: "January", stone: "Garnet", image: "/images/birthstone/january.jpg" },
  { month: "February", stone: "Amethyst", image: "/images/birthstone/february.jpg" },
  { month: "March", stone: "Aquamarine", image: "/images/birthstone/march.jpg" },
  { month: "April", stone: "Diamond", image: "/images/birthstone/april.jpg" },
  { month: "May", stone: "Emerald", image: "/images/birthstone/may.jpg" },
  { month: "June", stone: "Pearl", image: "/images/birthstone/june.jpg" },
  { month: "July", stone: "Ruby", image: "/images/birthstone/july.jpg" },
  { month: "August", stone: "Peridot", image: "/images/birthstone/august.jpg" },
  { month: "September", stone: "Sapphire", image: "/images/birthstone/september.jpg" },
  { month: "October", stone: "Opal", image: "/images/birthstone/october.jpg" },
  { month: "November", stone: "Citrine", image: "/images/birthstone/november.jpg" },
  { month: "December", stone: "Tanzanite", image: "/images/birthstone/december.jpg" },
];

export function getBirthstone(month: string) {
  return birthstones.find((b) => b.month === month);
}

export type Selection = {
  stone: StoneId;
  quality: QualityId;
  metal: MetalId;
  colour: MetalColorId;
  carat: CaratId;
  birthstone: string;
  inscription: string;
};

export const defaultSelection: Selection = {
  stone: "natural",
  quality: "si-hi",
  metal: "gold-18k",
  colour: "yellow",
  carat: "0.70",
  birthstone: "",
  inscription: "",
};

export const MAKING_CHARGE = 5400;

const diamondPerCarat: Record<StoneId, Record<QualityId, number>> = {
  natural: { "si-hi": 95000, "vs-ef": 130000 },
  "lab-grown": { "si-hi": 22000, "vs-ef": 32000 },
  gemstone: { "si-hi": 48000, "vs-ef": 68000 },
};

const metalValue: Record<MetalId, number> = {
  "gold-18k": 45000,
  "gold-14k": 36000,
  "gold-9k": 26000,
  "silver-925": 4000,
};

const round = (n: number) => Math.round(n / 100) * 100;

export function computePrice(s: Selection) {
  const caratWeight = parseFloat(s.carat);
  const diamond = round(diamondPerCarat[s.stone][s.quality] * caratWeight);
  const metal = metalValue[s.metal];
  const making = MAKING_CHARGE;
  const birthstone = s.birthstone ? 9000 : 0;
  const total = diamond + metal + making + birthstone;
  return { diamond, metal, making, birthstone, total };
}

function imageColour(colour: MetalColorId): MetalColor {
  return colour === "rose" ? "rose" : colour === "yellow" ? "yellow" : "white";
}

export function selectionImage(s: Selection, product?: Product) {
  const colour = imageColour(s.colour);
  if (s.stone === "gemstone") return images.customizer.gemstone;
  if (product) {
    return productImage(product, colour);
  }
  return images.customizer[colour];
}

export function describeSelection(s: Selection) {
  const stone = stones.find((x) => x.id === s.stone)!;
  const quality = qualities.find((x) => x.id === s.quality)!;
  const metal = metals.find((x) => x.id === s.metal)!;
  const colour = metalColours.find((x) => x.id === s.colour)!;
  const metalLabel = metal.id === "silver-925" ? metal.name : `${colour.name} ${metal.name}`;
  const parts = [
    `${s.carat} ct ${stone.name} (${quality.name})`,
    metalLabel,
  ];
  const birthstone = getBirthstone(s.birthstone);
  if (birthstone) parts.push(`Hidden birthstone: ${birthstone.month} · ${birthstone.stone}`);
  if (s.inscription) parts.push(`Inscription: “${s.inscription}”`);
  return parts.join(" · ");
}
