import { images } from "@/lib/images";
import type { MetalColor, Product } from "@/lib/products";

export type StoneId = "natural" | "lab-grown" | "gemstone";
export type MetalId = "yellow" | "white" | "rose" | "platinum";
export type CaratId = "0.50" | "0.70" | "1.00" | "1.50" | "2.00";
export type SettingId = "high" | "low";
export type FinishId = "polish" | "satin" | "brushed";

export const stones: { id: StoneId; name: string; note: string; certification: string; baseFrom: number; baseTo: number }[] = [
  {
    id: "natural",
    name: "Natural Diamond",
    note: "Earth-formed brilliance, graded for cut, colour and clarity",
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
    certification: "SGL Certified",
    baseFrom: 85000,
    baseTo: 140000,
  },
];

export const metals: { id: MetalId; name: string; note: string; factor: number; image: string }[] = [
  { id: "yellow", name: "18k Yellow Gold", note: "Warm, classic, HUID hallmarked", factor: 1, image: images.customizer.yellow },
  { id: "white", name: "18k White Gold", note: "Cool and contemporary, rhodium finished", factor: 1, image: images.customizer.white },
  { id: "rose", name: "18k Rose Gold", note: "Soft blush warmth, quietly romantic", factor: 1, image: images.customizer.rose },
  { id: "platinum", name: "Platinum 950", note: "The rarest setting, dense and enduring", factor: 1.18, image: images.customizer.platinum },
];

export const carats: { id: CaratId; name: string; note: string; factor: number }[] = [
  { id: "0.50", name: "0.50 carat", note: "Refined everyday scale", factor: 1 },
  { id: "0.70", name: "0.70 carat", note: "The balanced choice", factor: 1.5 },
  { id: "1.00", name: "1.00 carat", note: "The defining solitaire", factor: 2.4 },
  { id: "1.50", name: "1.50 carat", note: "Commanding presence", factor: 3.8 },
  { id: "2.00", name: "2.00 carat", note: "A rare statement", factor: 5.4 },
];

export const settings: { id: SettingId; name: string; note: string; image: string }[] = [
  { id: "high", name: "High Setting", note: "Lifts the stone to gather light from every side", image: images.settingHigh },
  { id: "low", name: "Low Setting", note: "Sits close to the hand for effortless daily wear", image: images.settingLow },
];

export const finishes: { id: FinishId; name: string; note: string }[] = [
  { id: "polish", name: "High Polish", note: "Mirror-bright, the classic finish" },
  { id: "satin", name: "Satin", note: "A soft, light-diffusing sheen" },
  { id: "brushed", name: "Brushed", note: "Fine linear texture, quietly modern" },
];

export const birthstoneMonths = [
  "January · Garnet",
  "February · Amethyst",
  "March · Aquamarine",
  "April · Diamond",
  "May · Emerald",
  "June · Pearl",
  "July · Ruby",
  "August · Peridot",
  "September · Sapphire",
  "October · Opal",
  "November · Citrine",
  "December · Tanzanite",
];

export type Selection = {
  stone: StoneId;
  metal: MetalId;
  carat: CaratId;
  setting: SettingId;
  finish: FinishId;
  birthstone: string;
  inscription: string;
};

export const defaultSelection: Selection = {
  stone: "natural",
  metal: "yellow",
  carat: "0.70",
  setting: "high",
  finish: "polish",
  birthstone: "",
  inscription: "",
};

const round = (n: number) => Math.round(n / 5000) * 5000;

export function computeRange(s: Selection) {
  const stone = stones.find((x) => x.id === s.stone)!;
  const metal = metals.find((x) => x.id === s.metal)!;
  const carat = carats.find((x) => x.id === s.carat)!;
  const birthstoneAdd = s.birthstone ? 9000 : 0;
  return {
    from: round(stone.baseFrom * carat.factor * metal.factor + birthstoneAdd),
    to: round(stone.baseTo * carat.factor * metal.factor + birthstoneAdd),
  };
}

export function selectionImage(s: Selection, product?: Product) {
  if (product) {
    const color: MetalColor = s.metal === "platinum" ? "white" : s.metal;
    return product.metals[color][0] ?? product.metals.yellow[0];
  }
  if (s.stone === "gemstone") return images.customizer.gemstone;
  return metals.find((x) => x.id === s.metal)!.image;
}

export function describeSelection(s: Selection) {
  const stone = stones.find((x) => x.id === s.stone)!;
  const metal = metals.find((x) => x.id === s.metal)!;
  const setting = settings.find((x) => x.id === s.setting)!;
  const finish = finishes.find((x) => x.id === s.finish)!;
  const parts = [
    `${s.carat} ct ${stone.name}`,
    metal.name,
    setting.name,
    `${finish.name} finish`,
  ];
  if (s.birthstone) parts.push(`Hidden birthstone: ${s.birthstone}`);
  if (s.inscription) parts.push(`Inscription: “${s.inscription}”`);
  return parts.join(" · ");
}
