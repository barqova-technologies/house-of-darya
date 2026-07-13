export type CollectionSlug =
  | "modern-elegant"
  | "classic-designer"
  | "statement"
  | "engagement-rings"
  | "studs"
  | "signature-earrings";

export type CollectionParent = "Rings" | "Earrings";

export type MetalColor = "yellow" | "white" | "rose";

export const metalNames: Record<MetalColor, string> = {
  yellow: "Yellow Gold",
  white: "White Gold",
  rose: "Rose Gold",
};

export type Collection = {
  slug: CollectionSlug;
  name: string;
  parent: CollectionParent;
  subtext: string; // short headline subtext, e.g. "For your daily comfort"
  tagline: string;
  description: string;
  image: string;
  comingSoon?: boolean; // photography pending — shown with an empty state
};

export type Product = {
  slug: string;
  name: string;
  collection: CollectionSlug;
  style: string;
  description: string;
  story: string;
  priceFrom: number;
  priceTo: number;
  metals: Record<MetalColor, string[]>;
  availableMetals?: MetalColor[];
  lifestyle: string[];
  details: { label: string; value: string }[];
};

export function productMetals(p: Product): MetalColor[] {
  return p.availableMetals ?? ["yellow", "white", "rose"];
}

export const collections: Collection[] = [
  {
    slug: "modern-elegant",
    name: "Modern & Elegant",
    parent: "Rings",
    subtext: "For your daily comfort",
    tagline: "Quiet lines, unmistakable presence",
    description:
      "Modern ceremonial bands with architectural profiles: brushed planes, tension-set stones and edges drawn with restraint.",
    image: "/images/products/olympus/yellow-top.jpg",
  },
  {
    slug: "classic-designer",
    name: "Classic & Designer",
    parent: "Rings",
    subtext: "For moments that matter",
    tagline: "Heirlooms, begun today",
    description:
      "Timeless wedding rings for her and for him, alongside our Bold by Design series: classics refined by our designers and made for generations.",
    image: "/images/products/ava/yellow-top.jpg",
  },
  {
    slug: "statement",
    name: "Statement",
    parent: "Rings",
    subtext: "Own the spotlight",
    tagline: "For moments that ask more",
    description:
      "Bold compositions in diamonds and sculpted gold, made for the hand that carries occasions, celebrations and milestones.",
    image: "/images/products/eve/yellow-top.jpg",
  },
  {
    slug: "engagement-rings",
    name: "Engagement Rings",
    parent: "Rings",
    subtext: "A lifelong promise",
    tagline: "The one you say yes to",
    description:
      "Solitaires and trilogies built around a single certified stone, made to order for the most personal decision of all.",
    image: "/images/products/florence/yellow-top.jpg",
  },
  {
    slug: "studs",
    name: "Studs",
    parent: "Earrings",
    subtext: "Everyday sparkle",
    tagline: "Light, worn daily",
    description:
      "Solitaire studs in every cut: the most personal kind of everyday brilliance, matched stone to stone and set precisely to catch the light.",
    image: "/images/products/iris-round-studs/yellow-top.jpg",
  },
  {
    slug: "signature-earrings",
    name: "Signature Earrings",
    parent: "Earrings",
    subtext: "Effortlessly unforgettable",
    tagline: "Movement, made to order",
    description:
      "Hoops, drops and cascades in certified diamonds: statement earrings for the moments a stud cannot carry alone.",
    image: "/images/products/cascading-hoops/yellow-top.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "olympus",
    name: "Olympus",
    collection: "modern-elegant",
    style: "Statement Tension-Set Band",
    description: "A round brilliant held by tension alone in a statement-width band.",
    story:
      "Olympus suspends its diamond between two walls of metal: no prongs, no basket, light passing clean beneath the stone. It is the most quietly engineered piece in the house.",
    priceFrom: 35000,
    priceTo: 225000,
    metals: {
      yellow: ["/images/products/olympus/yellow-top.jpg", "/images/products/olympus/yellow-front.jpg"],
      white: ["/images/products/olympus/white-top.jpg", "/images/products/olympus/white-front.jpg"],
      rose: ["/images/products/olympus/rose-top.jpg", "/images/products/olympus/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Centre Stone", value: "Round brilliant, tension set" },
      { label: "Profile", value: "Flat statement band" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "olympus-petite",
    name: "Olympus Petite",
    collection: "modern-elegant",
    style: "Petite Tension-Set Band",
    description: "The tension-set Olympus, scaled to a finer, quieter width.",
    story:
      "The same engineering at a smaller scale: a single round brilliant held by the band itself, for the hand that prefers understatement to announcement.",
    priceFrom: 15000,
    priceTo: 175000,
    metals: {
      yellow: ["/images/products/olympus-petite/yellow-top.jpg", "/images/products/olympus-petite/yellow-front.jpg"],
      white: ["/images/products/olympus-petite/white-top.jpg", "/images/products/olympus-petite/white-front.jpg"],
      rose: ["/images/products/olympus-petite/rose-top.jpg", "/images/products/olympus-petite/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Centre Stone", value: "Petite round brilliant, tension set" },
      { label: "Profile", value: "Flat band" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "leon",
    name: "Leon",
    collection: "modern-elegant",
    style: "Flat Bevelled-Edge Band",
    description: "A flat profile with crisp bevelled edges, finished in a soft brushed grain.",
    story:
      "Leon is drawn with a draughtsman's restraint: two polished bevels framing a plane of brushed metal. Modern enough for every day, considered enough for a lifetime.",
    priceFrom: 15000,
    priceTo: 165000,
    metals: {
      yellow: ["/images/products/leon/yellow-top.jpg", "/images/products/leon/yellow-front.jpg"],
      white: ["/images/products/leon/white-top.jpg", "/images/products/leon/white-front.jpg"],
      rose: ["/images/products/leon/rose-top.jpg", "/images/products/leon/rose-front.jpg"],
    },
    lifestyle: ["/images/products/leon/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Flat with polished bevelled edges" },
      { label: "Finish", value: "Brushed centre" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "atlas",
    name: "Atlas",
    collection: "modern-elegant",
    style: "Brushed Modular Band",
    description: "A modular band of stacked planes, brushed and polished in turn.",
    story:
      "Atlas reads like architecture in cross-section: alternating brushed and polished surfaces give it structure without weight, presence without shine for its own sake.",
    priceFrom: 25000,
    priceTo: 195000,
    metals: {
      yellow: ["/images/products/atlas/yellow-top.jpg", "/images/products/atlas/yellow-front.jpg"],
      white: ["/images/products/atlas/white-top.jpg", "/images/products/atlas/white-front.jpg"],
      rose: ["/images/products/atlas/rose-top.jpg", "/images/products/atlas/rose-front.jpg"],
    },
    lifestyle: ["/images/products/atlas/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Modular stacked planes" },
      { label: "Finish", value: "Alternating brushed and polished" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "carlo",
    name: "Carlo",
    collection: "modern-elegant",
    style: "Chevron Band",
    description: "A confident chevron cut clean through the band's centreline.",
    story:
      "Carlo's chevron is cut, not engraved: a sculpted channel that runs the full circumference and catches a different light at every turn of the hand.",
    priceFrom: 15000,
    priceTo: 150000,
    metals: {
      yellow: ["/images/products/carlo/yellow-top.jpg", "/images/products/carlo/yellow-front.jpg"],
      white: ["/images/products/carlo/white-top.jpg", "/images/products/carlo/white-front.jpg"],
      rose: ["/images/products/carlo/rose-top.jpg", "/images/products/carlo/rose-front.jpg"],
    },
    lifestyle: ["/images/products/carlo/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Flat with chevron channel" },
      { label: "Finish", value: "Polished" },
      { label: "Width", value: "4 – 6 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "arlo",
    name: "Arlo",
    collection: "modern-elegant",
    style: "Chamfered-Edge Brushed Band",
    description: "Soft chamfered edges around a brushed centre, made for constant wear.",
    story:
      "Arlo rounds every line it can. The chamfered edges disappear against the finger, and the brushed centre wears the marks of a good life gracefully.",
    priceFrom: 20000,
    priceTo: 175000,
    metals: {
      yellow: ["/images/products/arlo/yellow-top.jpg", "/images/products/arlo/yellow-front.jpg"],
      white: ["/images/products/arlo/white-top.jpg", "/images/products/arlo/white-front.jpg"],
      rose: ["/images/products/arlo/rose-top.jpg", "/images/products/arlo/rose-front.jpg"],
    },
    lifestyle: ["/images/products/arlo/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Soft chamfered edges" },
      { label: "Finish", value: "Brushed centre" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "erasmuz",
    name: "Erasmuz",
    collection: "modern-elegant",
    style: "Milgrain-Detail Brushed Band",
    description: "Twin milgrain lines over a brushed field, heritage detail on a modern band.",
    story:
      "Erasmuz borrows its milgrain from the ateliers of the 1920s and sets it against a contemporary brushed grain: a century of craft in a single quiet band.",
    priceFrom: 15000,
    priceTo: 160000,
    metals: {
      yellow: ["/images/products/erasmuz/yellow-top.jpg", "/images/products/erasmuz/yellow-front.jpg"],
      white: ["/images/products/erasmuz/white-top.jpg", "/images/products/erasmuz/white-front.jpg"],
      rose: ["/images/products/erasmuz/rose-top.jpg", "/images/products/erasmuz/rose-front.jpg"],
    },
    lifestyle: ["/images/products/erasmuz/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Flat comfort fit" },
      { label: "Detail", value: "Twin milgrain borders" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "nikolas",
    name: "Nikolas",
    collection: "modern-elegant",
    style: "Brushed Comfort-Fit Band",
    description: "The classic comfort-fit band, reimagined with an even satin-brushed surface.",
    story:
      "Nikolas keeps the silhouette jewellers have trusted for a century and changes only the light: a fine brushed grain that softens every reflection.",
    priceFrom: 15000,
    priceTo: 160000,
    metals: {
      yellow: ["/images/products/nikolas/yellow-top.jpg", "/images/products/nikolas/yellow-front.jpg"],
      white: ["/images/products/nikolas/white-top.jpg", "/images/products/nikolas/white-front.jpg"],
      rose: ["/images/products/nikolas/rose-top.jpg", "/images/products/nikolas/rose-front.jpg"],
    },
    lifestyle: ["/images/products/nikolas/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Classic comfort fit" },
      { label: "Finish", value: "Satin brushed" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "ava",
    name: "Ava",
    collection: "classic-designer",
    style: "Pavé Wedding Ring",
    description: "A run of claw-set brilliants across a fine, even band.",
    story:
      "Ava is the band our clients reach for first: a half-circle of matched brilliants in split claws, set so closely the metal almost disappears and only the light remains.",
    priceFrom: 65000,
    priceTo: 95000,
    metals: {
      yellow: ["/images/products/ava/yellow-top.jpg", "/images/products/ava/yellow-front.jpg"],
      white: ["/images/products/ava/white-top.jpg", "/images/products/ava/white-front.jpg"],
      rose: ["/images/products/ava/rose-top.jpg", "/images/products/ava/rose-front.jpg"],
    },
    lifestyle: ["/images/products/ava/lifestyle-1.jpg", "/images/products/ava/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Claw-set round brilliants" },
      { label: "Setting", value: "Split-claw pavé" },
      { label: "Band", value: "1.6 – 2.3 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "camille",
    name: "Camille",
    collection: "classic-designer",
    style: "Curved Pavé Wedding Ring",
    description: "A pavé band that curves to sit flush against a solitaire.",
    story:
      "Camille was designed to keep a promise to another ring: its gentle curve traces the base of a solitaire so the two sit together as one, with no gap for light to argue over.",
    priceFrom: 65000,
    priceTo: 90000,
    metals: {
      yellow: ["/images/products/camille/yellow-top.jpg", "/images/products/camille/yellow-front.jpg"],
      white: ["/images/products/camille/white-top.jpg", "/images/products/camille/white-front.jpg"],
      rose: ["/images/products/camille/rose-top.jpg", "/images/products/camille/rose-front.jpg"],
    },
    lifestyle: ["/images/products/camille/lifestyle-1.jpg", "/images/products/camille/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Micro-pavé round brilliants" },
      { label: "Setting", value: "Curved contour pavé" },
      { label: "Band", value: "1.6 – 2.0 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "classic-comfort",
    name: "Classic Comfort",
    collection: "classic-designer",
    style: "Comfort-Fit Wedding Ring",
    description: "The definitive plain band, softly domed, polished to a mirror.",
    story:
      "Some designs need nothing added. The Classic Comfort is drawn in one continuous curve, rounded inside so it slips on like it was always there, and kept for decades because it was.",
    priceFrom: 50000,
    priceTo: 100000,
    metals: {
      yellow: ["/images/products/classic-comfort/yellow-top.jpg", "/images/products/classic-comfort/yellow-front.jpg"],
      white: ["/images/products/classic-comfort/white-top.jpg", "/images/products/classic-comfort/white-front.jpg"],
      rose: ["/images/products/classic-comfort/rose-top.jpg", "/images/products/classic-comfort/rose-front.jpg"],
    },
    lifestyle: ["/images/products/classic-comfort/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Domed comfort fit" },
      { label: "Finish", value: "High polish" },
      { label: "Band", value: "1.6 – 3.0 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "greta",
    name: "Greta",
    collection: "classic-designer",
    style: "Baguette & Round Wedding Ring",
    description: "Alternating baguette and round brilliants in a measured rhythm of light.",
    story:
      "Greta alternates step-cut calm with brilliant-cut fire. The baguettes hold the line; the rounds break it: a designer's metronome worn on the hand.",
    priceFrom: 85000,
    priceTo: 120000,
    metals: {
      yellow: ["/images/products/greta/yellow-top.jpg", "/images/products/greta/yellow-front.jpg"],
      white: ["/images/products/greta/white-top.jpg", "/images/products/greta/white-front.jpg"],
      rose: ["/images/products/greta/rose-top.jpg", "/images/products/greta/rose-front.jpg"],
    },
    lifestyle: ["/images/products/greta/lifestyle-1.jpg", "/images/products/greta/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Alternating baguette and round brilliants" },
      { label: "Setting", value: "Channel and claw" },
      { label: "Band", value: "Fine, even profile" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "arden",
    name: "Arden",
    collection: "classic-designer",
    style: "Pavé Chevron Wedding Ring",
    description: "A chevron of micro-pavé that traces the line of the finger.",
    story:
      "Arden's point is an invitation: it frames a solitaire above it or stands alone as a quiet piece of geometry, the pavé following the chevron like a path drawn in light.",
    priceFrom: 65000,
    priceTo: 95000,
    metals: {
      yellow: ["/images/products/arden/yellow-top.jpg", "/images/products/arden/yellow-front.jpg"],
      white: ["/images/products/arden/white-top.jpg", "/images/products/arden/white-front.jpg"],
      rose: ["/images/products/arden/rose-top.jpg", "/images/products/arden/rose-front.jpg"],
    },
    lifestyle: ["/images/products/arden/lifestyle-1.jpg", "/images/products/arden/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Micro-pavé round brilliants" },
      { label: "Setting", value: "Chevron pavé" },
      { label: "Band", value: "1.6 – 2.0 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "theo",
    name: "Theo",
    collection: "classic-designer",
    style: "Men's Comfort-Fit Band",
    description: "The essential men's band: softly domed, mirror polished, timeless.",
    story:
      "Theo is the band most often chosen at the Home Atelier and the least often taken off. A century-old profile, made to order in your width and your metal.",
    priceFrom: 15000,
    priceTo: 160000,
    metals: {
      yellow: ["/images/products/theo/yellow-top.jpg", "/images/products/theo/yellow-front.jpg"],
      white: ["/images/products/theo/white-top.jpg", "/images/products/theo/white-front.jpg"],
      rose: ["/images/products/theo/rose-top.jpg", "/images/products/theo/rose-front.jpg"],
    },
    lifestyle: ["/images/products/theo/lifestyle-1.jpg", "/images/products/theo/lifestyle-2.jpg"],
    details: [
      { label: "Profile", value: "Classic domed comfort fit" },
      { label: "Finish", value: "High polish" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "deacon",
    name: "Deacon",
    collection: "classic-designer",
    style: "Brushed-Centre Band",
    description: "A brushed centre between polished bevelled edges, also made two-tone.",
    story:
      "Deacon balances two finishes the way a good suit balances cloth and lining. Commission it in a single metal, or in two: a platinum centre between gold edges, or the reverse.",
    priceFrom: 15000,
    priceTo: 205000,
    metals: {
      yellow: ["/images/products/deacon/yellow-top.jpg", "/images/products/deacon/yellow-front.jpg"],
      white: ["/images/products/deacon/white-top.jpg", "/images/products/deacon/white-front.jpg"],
      rose: ["/images/products/deacon/rose-top.jpg", "/images/products/deacon/rose-front.jpg"],
    },
    lifestyle: ["/images/products/deacon/lifestyle-1.jpg"],
    details: [
      { label: "Profile", value: "Flat with bevelled edges" },
      { label: "Finish", value: "Brushed centre, polished edges" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Gold · Platinum · two-tone combinations" },
    ],
  },
  {
    slug: "matteo",
    name: "Matteo",
    collection: "classic-designer",
    style: "Classic Statement Band",
    description: "A wide, sculptural band, plain or set with a single inlaid brilliant.",
    story:
      "Matteo carries its weight gracefully. Most choose it plain; some ask for a single flush-set brilliant, a private full stop only the wearer knows is there.",
    priceFrom: 15000,
    priceTo: 175000,
    metals: {
      yellow: ["/images/products/matteo/yellow-top.jpg", "/images/products/matteo/yellow-front.jpg"],
      white: ["/images/products/matteo/white-top.jpg", "/images/products/matteo/white-front.jpg"],
      rose: ["/images/products/matteo/rose-top.jpg", "/images/products/matteo/rose-front.jpg"],
    },
    lifestyle: ["/images/products/matteo/lifestyle-1.jpg", "/images/products/matteo/lifestyle-2.jpg"],
    details: [
      { label: "Profile", value: "Wide statement dome" },
      { label: "Stone", value: "Optional inlaid round brilliant" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "adonis",
    name: "Adonis",
    collection: "classic-designer",
    style: "Round Brilliant Inlay Band",
    description: "A flush-set round brilliant in a brushed band, with two-tone options.",
    story:
      "Adonis sets its diamond into the band rather than upon it: flush, secure, and caught only when the light finds it. Available in one metal or two.",
    priceFrom: 15000,
    priceTo: 215000,
    metals: {
      yellow: ["/images/products/adonis/yellow-top.jpg", "/images/products/adonis/yellow-front.jpg"],
      white: ["/images/products/adonis/white-top.jpg", "/images/products/adonis/white-front.jpg"],
      rose: ["/images/products/adonis/rose-top.jpg", "/images/products/adonis/rose-front.jpg"],
    },
    lifestyle: ["/images/products/adonis/lifestyle-1.jpg"],
    details: [
      { label: "Stone", value: "Flush-set round brilliant" },
      { label: "Finish", value: "Brushed" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Gold · Platinum · two-tone combinations" },
    ],
  },
  {
    slug: "octavian",
    name: "Octavian",
    collection: "classic-designer",
    style: "Hammered Band",
    description: "A hand-hammered surface that wears its making proudly.",
    story:
      "Every Octavian is finished by hand, so no two carry the same pattern of light. It is the band for the man who likes his things made, not manufactured.",
    priceFrom: 20000,
    priceTo: 165000,
    metals: {
      yellow: ["/images/products/octavian/yellow-top.jpg", "/images/products/octavian/yellow-front.jpg"],
      white: ["/images/products/octavian/white-top.jpg", "/images/products/octavian/white-front.jpg"],
      rose: ["/images/products/octavian/rose-top.jpg", "/images/products/octavian/rose-front.jpg"],
    },
    lifestyle: ["/images/products/octavian/lifestyle-1.jpg", "/images/products/octavian/lifestyle-2.jpg"],
    details: [
      { label: "Profile", value: "Domed comfort fit" },
      { label: "Finish", value: "Hand hammered" },
      { label: "Width", value: "4 – 7 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "ludae-oval",
    name: "Ludae Oval",
    collection: "classic-designer",
    style: "Oval Cigar Solitaire",
    description: "An oval brilliant set flush into a bold cigar band.",
    story:
      "The Ludae turns the solitaire inside out: instead of lifting the stone, it sinks an oval into a wide, rounded band so diamond and gold read as one sculptural object.",
    priceFrom: 125000,
    priceTo: 145000,
    metals: {
      yellow: ["/images/products/ludae-oval/yellow-top.jpg", "/images/products/ludae-oval/yellow-front.jpg"],
      white: ["/images/products/ludae-oval/white-top.jpg", "/images/products/ludae-oval/white-front.jpg"],
      rose: ["/images/products/ludae-oval/rose-top.jpg", "/images/products/ludae-oval/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Centre Stone", value: "Oval brilliant, flush set" },
      { label: "Band", value: "Bold cigar profile" },
      { label: "Setting", value: "Recessed bezel" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "ludae-emerald",
    name: "Ludae Emerald",
    collection: "classic-designer",
    style: "Emerald Cigar Solitaire",
    description: "Step-cut clarity sunk into a wide, polished cigar band.",
    story:
      "The emerald cut hides nothing, so the Ludae gives it nowhere to hide: a clean rectangle of light recessed into gold, geometry meeting geometry.",
    priceFrom: 125000,
    priceTo: 145000,
    metals: {
      yellow: ["/images/products/ludae-emerald/yellow-top.jpg", "/images/products/ludae-emerald/yellow-front.jpg"],
      white: ["/images/products/ludae-emerald/white-top.jpg", "/images/products/ludae-emerald/white-front.jpg"],
      rose: ["/images/products/ludae-emerald/rose-top.jpg", "/images/products/ludae-emerald/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Centre Stone", value: "Emerald cut, flush set" },
      { label: "Band", value: "Bold cigar profile" },
      { label: "Setting", value: "Recessed bezel" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "ludae-marquise",
    name: "Ludae Marquise",
    collection: "classic-designer",
    style: "Marquise Cigar Solitaire",
    description: "A marquise diamond laid east-west into a bold cigar band.",
    story:
      "Turned on its side, the marquise becomes an eye of light across the band. The Ludae Marquise is the most architectural piece in the Bold by Design series.",
    priceFrom: 125000,
    priceTo: 145000,
    metals: {
      yellow: ["/images/products/ludae-marquise/yellow-top.jpg", "/images/products/ludae-marquise/yellow-front.jpg"],
      white: ["/images/products/ludae-marquise/white-top.jpg", "/images/products/ludae-marquise/white-front.jpg"],
      rose: ["/images/products/ludae-marquise/rose-top.jpg", "/images/products/ludae-marquise/rose-front.jpg"],
    },
    lifestyle: ["/images/products/ludae-marquise/lifestyle-1.jpg", "/images/products/ludae-marquise/lifestyle-2.jpg"],
    details: [
      { label: "Centre Stone", value: "Marquise brilliant, east-west flush set" },
      { label: "Band", value: "Bold cigar profile" },
      { label: "Setting", value: "Recessed bezel" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "ludae-pear",
    name: "Ludae Pear",
    collection: "classic-designer",
    style: "Pear Cigar Solitaire",
    description: "A pear brilliant resting point-side into a wide gold band.",
    story:
      "The pear's curve softens the cigar band's confidence: a drop of light held still in polished gold, romantic and resolute at once.",
    priceFrom: 125000,
    priceTo: 150000,
    metals: {
      yellow: ["/images/products/ludae-pear/yellow-top.jpg", "/images/products/ludae-pear/yellow-front.jpg"],
      white: ["/images/products/ludae-pear/white-top.jpg", "/images/products/ludae-pear/white-front.jpg"],
      rose: ["/images/products/ludae-pear/rose-top.jpg", "/images/products/ludae-pear/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Centre Stone", value: "Pear brilliant, flush set" },
      { label: "Band", value: "Bold cigar profile" },
      { label: "Setting", value: "Recessed bezel" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "ludae-toi-et-moi",
    name: "Ludae Toi et Moi",
    collection: "classic-designer",
    style: "Toi et Moi Cigar Ring",
    description: "Two stones in conversation, sunk side by side into one bold band.",
    story:
      "The toi et moi has marked unions since the eighteenth century. The Ludae brings the pair down into the band itself: two stories, one sculptural line of gold.",
    priceFrom: 125000,
    priceTo: 145000,
    metals: {
      yellow: ["/images/products/ludae-toi-et-moi/yellow-top.jpg", "/images/products/ludae-toi-et-moi/yellow-front.jpg"],
      white: ["/images/products/ludae-toi-et-moi/white-top.jpg", "/images/products/ludae-toi-et-moi/white-front.jpg"],
      rose: ["/images/products/ludae-toi-et-moi/rose-top.jpg", "/images/products/ludae-toi-et-moi/rose-front.jpg"],
    },
    lifestyle: ["/images/products/ludae-toi-et-moi/lifestyle-1.jpg", "/images/products/ludae-toi-et-moi/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Paired cuts, flush set" },
      { label: "Band", value: "Bold cigar profile" },
      { label: "Setting", value: "Recessed bezel" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "eve",
    name: "Eve",
    collection: "statement",
    style: "Curved Marquise Ring",
    description: "Marquise diamonds set along a curve that follows the hand.",
    story:
      "Eve arranges its marquise stones like leaves on a vine, each angled to continue the curve of the last. Worn alone it is a sculpture; beside a solitaire it is a frame.",
    priceFrom: 85000,
    priceTo: 120000,
    metals: {
      yellow: ["/images/products/eve/yellow-top.jpg", "/images/products/eve/yellow-front.jpg"],
      white: ["/images/products/eve/white-top.jpg", "/images/products/eve/white-front.jpg"],
      rose: ["/images/products/eve/rose-top.jpg", "/images/products/eve/rose-front.jpg"],
    },
    lifestyle: ["/images/products/eve/lifestyle-1.jpg", "/images/products/eve/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Marquise brilliants, graduated" },
      { label: "Setting", value: "Curved contour, claw set" },
      { label: "Band", value: "Fine polished profile" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "amare",
    name: "Amaré",
    collection: "statement",
    style: "Contour Statement Ring",
    description: "A sculpted contour of polished gold that frames the finger.",
    story:
      "Amaré is pure line: a sweep of metal shaped to the hand, bold at first glance and weightless in wear. Proof that a statement needs no stones to make itself heard.",
    priceFrom: 55000,
    priceTo: 120000,
    metals: {
      yellow: ["/images/products/amare/yellow-top.jpg", "/images/products/amare/yellow-front.jpg"],
      white: ["/images/products/amare/white-top.jpg", "/images/products/amare/white-front.jpg"],
      rose: ["/images/products/amare/rose-top.jpg", "/images/products/amare/rose-front.jpg"],
    },
    lifestyle: ["/images/products/amare/lifestyle-1.jpg", "/images/products/amare/lifestyle-2.jpg"],
    details: [
      { label: "Profile", value: "Sculpted contour" },
      { label: "Finish", value: "High polish" },
      { label: "Band", value: "2 – 4 mm" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "classic-statement",
    name: "Classic Statement",
    collection: "statement",
    style: "Domed Statement Ring",
    description: "Our boldest plain form: a wide, sculptural dome of gold.",
    story:
      "The Classic Statement carries no stones because it doesn't need them. A broad, mirror-polished dome that catches the room's light and keeps it moving.",
    priceFrom: 90000,
    priceTo: 110000,
    metals: {
      yellow: ["/images/products/classic-statement/yellow-top.jpg", "/images/products/classic-statement/yellow-front.jpg"],
      white: ["/images/products/classic-statement/white-top.jpg", "/images/products/classic-statement/white-front.jpg"],
      rose: ["/images/products/classic-statement/rose-top.jpg", "/images/products/classic-statement/rose-front.jpg"],
    },
    lifestyle: ["/images/products/classic-statement/lifestyle-1.jpg", "/images/products/classic-statement/lifestyle-2.jpg"],
    details: [
      { label: "Profile", value: "Wide sculptural dome" },
      { label: "Finish", value: "High polish" },
      { label: "Band", value: "Statement width" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "gia",
    name: "Gia",
    collection: "statement",
    style: "Half Oval Ring",
    description: "A half-circle of oval diamonds rising across the band's shoulder.",
    story:
      "Gia sets its ovals shoulder to shoulder, each one a window of light. The half-set band keeps it comfortable; the scale keeps it unforgettable.",
    priceFrom: 140000,
    priceTo: 260000,
    metals: {
      yellow: ["/images/products/gia/yellow-top.jpg", "/images/products/gia/yellow-front.jpg"],
      white: ["/images/products/gia/white-top.jpg", "/images/products/gia/white-front.jpg"],
      rose: ["/images/products/gia/rose-top.jpg", "/images/products/gia/rose-front.jpg"],
    },
    lifestyle: ["/images/products/gia/lifestyle-1.jpg", "/images/products/gia/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Oval brilliants, 1.0 – 3.0 CTTW" },
      { label: "Setting", value: "Shared claw, half set" },
      { label: "Band", value: "Fine polished profile" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "genevieve",
    name: "Genevieve",
    collection: "statement",
    style: "Horizontal Oval Ring",
    description: "Oval diamonds laid east-west in a continuous line of light.",
    story:
      "Genevieve turns every stone on its side, so the ovals run with the band rather than against it: a horizon line of diamonds across the finger.",
    priceFrom: 100000,
    priceTo: 130000,
    metals: {
      yellow: ["/images/products/genevieve/yellow-top.jpg", "/images/products/genevieve/yellow-front.jpg"],
      white: ["/images/products/genevieve/white-top.jpg", "/images/products/genevieve/white-front.jpg"],
      rose: ["/images/products/genevieve/rose-top.jpg", "/images/products/genevieve/rose-front.jpg"],
    },
    lifestyle: ["/images/products/genevieve/lifestyle-1.jpg", "/images/products/genevieve/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Oval brilliants, east-west set" },
      { label: "Setting", value: "Shared claw" },
      { label: "Band", value: "Fine polished profile" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "lira",
    name: "Lira",
    collection: "statement",
    style: "Inset Statement Ring",
    description: "Brilliants inset into a channel through a bold polished band.",
    story:
      "Lira protects its diamonds inside the band's own walls: a channel of light running through solid gold, made for hands that work and celebrate alike.",
    priceFrom: 125000,
    priceTo: 150000,
    metals: {
      yellow: ["/images/products/lira/yellow-top.jpg", "/images/products/lira/yellow-front.jpg"],
      white: ["/images/products/lira/white-top.jpg", "/images/products/lira/white-front.jpg"],
      rose: ["/images/products/lira/rose-top.jpg", "/images/products/lira/rose-front.jpg"],
    },
    lifestyle: ["/images/products/lira/lifestyle-1.jpg", "/images/products/lira/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Round brilliants, channel inset" },
      { label: "Profile", value: "Bold rounded band" },
      { label: "Finish", value: "High polish" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "nara",
    name: "Nara",
    collection: "statement",
    style: "Pavé-Edge Statement Ring",
    description: "A statement band edged on both sides in micro-pavé.",
    story:
      "Nara keeps its centre calm and lets its edges speak: two fine lines of pavé framing a plane of polished gold, light held at the borders.",
    priceFrom: 130000,
    priceTo: 155000,
    metals: {
      yellow: ["/images/products/nara/yellow-top.jpg", "/images/products/nara/yellow-front.jpg"],
      white: ["/images/products/nara/white-top.jpg", "/images/products/nara/white-front.jpg"],
      rose: ["/images/products/nara/rose-top.jpg", "/images/products/nara/rose-front.jpg"],
    },
    lifestyle: ["/images/products/nara/lifestyle-1.jpg", "/images/products/nara/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Micro-pavé borders" },
      { label: "Profile", value: "Wide flat band" },
      { label: "Finish", value: "Polished centre" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "iris-round-studs",
    name: "Iris Round",
    collection: "studs",
    style: "Round Solitaire Studs",
    description: "The essential round brilliant stud, set in a four-prong basket.",
    story:
      "The Iris Round is the first piece many of our clients commission and the one they wear most. Stones matched under magnification, set low to the ear.",
    priceFrom: 50000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/iris-round-studs/yellow-top.jpg", "/images/products/iris-round-studs/yellow-front.jpg"],
      white: ["/images/products/iris-round-studs/white-top.jpg", "/images/products/iris-round-studs/white-front.jpg"],
      rose: ["/images/products/iris-round-studs/rose-top.jpg", "/images/products/iris-round-studs/rose-front.jpg"],
    },
    lifestyle: ["/images/products/iris-round-studs/lifestyle-1.jpg"],
    details: [
      { label: "Stones", value: "Matched round pair, 0.3 – 1.5 ct each" },
      { label: "Setting", value: "Four-prong basket" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "iris-oval-studs",
    name: "Iris Oval",
    collection: "studs",
    style: "Oval Solitaire Studs",
    description: "Elongated oval brilliants, angled to lift and lengthen the face.",
    story:
      "The oval flatters the way few cuts can: the Iris Oval sits slightly tilted on the lobe so the stone catches overhead light at its widest face.",
    priceFrom: 50000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/iris-oval-studs/yellow-top.jpg", "/images/products/iris-oval-studs/yellow-front.jpg"],
      white: ["/images/products/iris-oval-studs/white-top.jpg", "/images/products/iris-oval-studs/white-front.jpg"],
      rose: ["/images/products/iris-oval-studs/rose-top.jpg", "/images/products/iris-oval-studs/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched oval pair, 0.3 – 1.5 ct each" },
      { label: "Setting", value: "Four-prong basket" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "iris-pear-studs",
    name: "Iris Pear",
    collection: "studs",
    style: "Pear Solitaire Studs",
    description: "Pear-cut brilliants worn point-down, the quietest kind of drama.",
    story:
      "The Iris Pear inverts the stone so the curve rests against the lobe and the point falls like a drop of light. Subtle in scale, unforgettable in motion.",
    priceFrom: 50000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/iris-pear-studs/yellow-top.jpg", "/images/products/iris-pear-studs/yellow-front.jpg"],
      white: ["/images/products/iris-pear-studs/white-top.jpg", "/images/products/iris-pear-studs/white-front.jpg"],
      rose: ["/images/products/iris-pear-studs/rose-top.jpg", "/images/products/iris-pear-studs/rose-front.jpg"],
    },
    lifestyle: ["/images/products/iris-pear-studs/lifestyle-1.jpg"],
    details: [
      { label: "Stones", value: "Matched pear pair, 0.3 – 1.5 ct each" },
      { label: "Setting", value: "Three-prong with point guard" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "iris-emerald-studs",
    name: "Iris Emerald",
    collection: "studs",
    style: "Emerald-Cut Studs",
    description: "Step-cut clarity at the ear, for stones with nothing to hide.",
    story:
      "The emerald cut shows everything, which is why the Iris Emerald is reserved for stones of exceptional clarity: long facets, calm light, perfect geometry.",
    priceFrom: 50000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/iris-emerald-studs/yellow-top.jpg", "/images/products/iris-emerald-studs/yellow-front.jpg"],
      white: ["/images/products/iris-emerald-studs/white-top.jpg", "/images/products/iris-emerald-studs/white-front.jpg"],
      rose: ["/images/products/iris-emerald-studs/rose-top.jpg", "/images/products/iris-emerald-studs/rose-front.jpg"],
    },
    lifestyle: ["/images/products/iris-emerald-studs/lifestyle-1.jpg"],
    details: [
      { label: "Stones", value: "Matched emerald-cut pair, 0.3 – 1.5 ct each" },
      { label: "Setting", value: "Four-prong corner set" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "iris-radiant-studs",
    name: "Iris Radiant",
    collection: "studs",
    style: "Radiant-Cut Studs",
    description: "The radiant cut's cropped corners and concentrated fire, paired.",
    story:
      "The radiant takes the emerald cut's outline and fills it with brilliant-cut fire. The Iris Radiant is for those who want both order and ignition.",
    priceFrom: 50000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/iris-radiant-studs/yellow-top.jpg", "/images/products/iris-radiant-studs/yellow-front.jpg"],
      white: ["/images/products/iris-radiant-studs/white-top.jpg", "/images/products/iris-radiant-studs/white-front.jpg"],
      rose: ["/images/products/iris-radiant-studs/rose-top.jpg", "/images/products/iris-radiant-studs/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched radiant pair, 0.3 – 1.5 ct each" },
      { label: "Setting", value: "Four-prong corner set" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "iris-marquise-studs",
    name: "Iris Marquise",
    collection: "studs",
    style: "Marquise Studs",
    description: "Marquise brilliants that lengthen the line of the ear.",
    story:
      "Set upright, the marquise draws the eye upward: the Iris Marquise is the most sculptural of the stud family, a leaf of light at the lobe.",
    priceFrom: 50000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/iris-marquise-studs/yellow-top.jpg", "/images/products/iris-marquise-studs/yellow-front.jpg"],
      white: ["/images/products/iris-marquise-studs/white-top.jpg", "/images/products/iris-marquise-studs/white-front.jpg"],
      rose: ["/images/products/iris-marquise-studs/rose-top.jpg", "/images/products/iris-marquise-studs/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched marquise pair, 0.3 – 1.5 ct each" },
      { label: "Setting", value: "Two-prong with point guards" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "vera-oval-studs",
    name: "Vera Oval",
    collection: "studs",
    style: "Oval Bezel Studs",
    description: "Oval brilliants framed in seamless bezels: clean, secure, modern.",
    story:
      "The Vera wraps each stone in a hairline of polished metal. It is the most contemporary expression of a stud we make, and the most effortless to live in.",
    priceFrom: 50000,
    priceTo: 155000,
    metals: {
      yellow: ["/images/products/vera-oval-studs/yellow-top.jpg", "/images/products/vera-oval-studs/yellow-front.jpg"],
      white: ["/images/products/vera-oval-studs/white-top.jpg", "/images/products/vera-oval-studs/white-front.jpg"],
      rose: ["/images/products/vera-oval-studs/rose-top.jpg", "/images/products/vera-oval-studs/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched oval pair, 0.3 – 1.0 ct each" },
      { label: "Setting", value: "Full bezel" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "vera-marquise-studs",
    name: "Vera Marquise",
    collection: "studs",
    style: "Marquise Bezel Studs",
    description: "Marquise stones held in smooth bezel frames, points protected.",
    story:
      "The bezel does for the marquise what a frame does for a drawing: it protects the points, sharpens the outline, and lets the shape speak.",
    priceFrom: 50000,
    priceTo: 155000,
    metals: {
      yellow: ["/images/products/vera-marquise-studs/yellow-top.jpg", "/images/products/vera-marquise-studs/yellow-front.jpg"],
      white: ["/images/products/vera-marquise-studs/white-top.jpg", "/images/products/vera-marquise-studs/white-front.jpg"],
      rose: ["/images/products/vera-marquise-studs/rose-top.jpg", "/images/products/vera-marquise-studs/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched marquise pair, 0.3 – 1.0 ct each" },
      { label: "Setting", value: "Full bezel" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold · Platinum" },
    ],
  },
  {
    slug: "signature-studs",
    name: "Signature Round",
    collection: "studs",
    style: "Signature Round Studs",
    description: "Our everyday signature stud: a round brilliant in a fine claw setting.",
    story:
      "The Signature Round is brilliance pared back to its essentials: one stone, four claws, and nothing between you and the light.",
    priceFrom: 30000,
    priceTo: 45000,
    metals: {
      yellow: ["/images/products/signature-studs/yellow-top.jpg"],
      white: ["/images/products/signature-studs/white-top.jpg"],
      rose: ["/images/products/signature-studs/rose-top.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched round pair" },
      { label: "Setting", value: "Four-claw" },
      { label: "Back", value: "Butterfly back" },
      { label: "Metals", value: "Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "signature-sapphire-studs",
    name: "Signature Sapphire",
    collection: "studs",
    style: "Sapphire Round Studs",
    description: "Deep blue cultured sapphires in the signature claw setting.",
    story:
      "The Signature Sapphire trades fire for depth: a pair of round blue sapphires chosen for evenness of colour, set simply so the blue does the talking.",
    priceFrom: 30000,
    priceTo: 45000,
    metals: {
      yellow: ["/images/products/signature-sapphire-studs/yellow-top.jpg"],
      white: ["/images/products/signature-sapphire-studs/white-top.jpg"],
      rose: ["/images/products/signature-sapphire-studs/rose-top.jpg"],
    },
    lifestyle: ["/images/products/signature-sapphire-studs/lifestyle-1.jpg", "/images/products/signature-sapphire-studs/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Matched round sapphire pair" },
      { label: "Setting", value: "Four-claw" },
      { label: "Back", value: "Butterfly back" },
      { label: "Metals", value: "Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "florence",
    name: "Florence",
    collection: "engagement-rings",
    style: "Oval & Pear Trilogy",
    description: "An oval centre flanked by two pears, read as one continuous line of light.",
    story:
      "Florence sets three stones in conversation: an oval held between two pears that lean in like open hands. A trilogy for a promise with a past, a present and a future.",
    priceFrom: 145000,
    priceTo: 260000,
    metals: {
      yellow: ["/images/products/florence/yellow-top.jpg", "/images/products/florence/yellow-front.jpg"],
      white: ["/images/products/florence/white-top.jpg", "/images/products/florence/white-front.jpg"],
      rose: ["/images/products/florence/rose-top.jpg", "/images/products/florence/rose-front.jpg"],
    },
    lifestyle: ["/images/products/florence/lifestyle-1.jpg", "/images/products/florence/lifestyle-2.jpg"],
    details: [
      { label: "Centre Stone", value: "Oval brilliant" },
      { label: "Accents", value: "Two pear brilliants" },
      { label: "Setting", value: "Trilogy, claw set" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "sophia",
    name: "Sophia",
    collection: "engagement-rings",
    style: "4-Claw Pear Solitaire",
    description: "A single pear lifted high in four fine claws.",
    story:
      "Sophia is the solitaire pared to its essence: one pear-cut diamond raised on four slender claws so nothing stands between the stone and the light.",
    priceFrom: 120000,
    priceTo: 240000,
    metals: {
      yellow: ["/images/products/sophia/yellow-top.jpg", "/images/products/sophia/yellow-front.jpg"],
      white: ["/images/products/sophia/white-top.jpg", "/images/products/sophia/white-front.jpg"],
      rose: ["/images/products/sophia/rose-top.jpg", "/images/products/sophia/rose-front.jpg"],
    },
    lifestyle: ["/images/products/sophia/lifestyle-1.jpg", "/images/products/sophia/lifestyle-2.jpg"],
    details: [
      { label: "Centre Stone", value: "Pear brilliant, four-claw" },
      { label: "Setting", value: "Raised solitaire" },
      { label: "Band", value: "Fine tapered" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "avery",
    name: "Avery",
    collection: "engagement-rings",
    style: "Oval Solitaire with Accent Band",
    description: "An oval solitaire above a band of marquise and round brilliants.",
    story:
      "Avery lifts an oval above a band that never rests: marquise and round brilliants run the shoulders so the light continues long after the centre stone ends.",
    priceFrom: 130000,
    priceTo: 250000,
    metals: {
      yellow: ["/images/products/avery/yellow-top.jpg", "/images/products/avery/yellow-front.jpg"],
      white: ["/images/products/avery/white-top.jpg", "/images/products/avery/white-front.jpg"],
      rose: ["/images/products/avery/rose-top.jpg", "/images/products/avery/rose-front.jpg"],
    },
    lifestyle: ["/images/products/avery/lifestyle-1.jpg"],
    details: [
      { label: "Centre Stone", value: "Oval brilliant" },
      { label: "Band", value: "Marquise & round brilliants" },
      { label: "Setting", value: "Solitaire with accent shoulders" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "vienna-solitaire",
    name: "Vienna",
    collection: "engagement-rings",
    style: "Radiant Bezel Solitaire",
    description: "A radiant cut wrapped in a full bezel, clean and modern.",
    story:
      "Vienna sets a radiant cut into a full bezel of gold: no claws, no interruptions, just a rectangle of fire held flush in a smooth band. Modern to the last line.",
    priceFrom: 125000,
    priceTo: 235000,
    metals: {
      yellow: ["/images/products/vienna-solitaire/yellow-top.jpg", "/images/products/vienna-solitaire/yellow-front.jpg"],
      white: ["/images/products/vienna-solitaire/white-top.jpg", "/images/products/vienna-solitaire/white-front.jpg"],
      rose: ["/images/products/vienna-solitaire/rose-top.jpg", "/images/products/vienna-solitaire/rose-front.jpg"],
    },
    lifestyle: ["/images/products/vienna-solitaire/lifestyle-1.jpg"],
    details: [
      { label: "Centre Stone", value: "Radiant cut, full bezel" },
      { label: "Setting", value: "Flush bezel solitaire" },
      { label: "Band", value: "Smooth rounded" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "amira",
    name: "Amira",
    collection: "engagement-rings",
    style: "Pear with Marquise Accents",
    description: "A pear centre with marquise accents sweeping along the shoulders.",
    story:
      "Amira crowns the hand with a pear and lets marquise accents sweep away from it like a wake. Romantic in shape, deliberate in every angle.",
    priceFrom: 130000,
    priceTo: 245000,
    metals: {
      yellow: ["/images/products/amira/yellow-top.jpg", "/images/products/amira/yellow-front.jpg"],
      white: ["/images/products/amira/white-top.jpg", "/images/products/amira/white-front.jpg"],
      rose: ["/images/products/amira/rose-top.jpg", "/images/products/amira/rose-front.jpg"],
    },
    lifestyle: ["/images/products/amira/lifestyle-1.jpg"],
    details: [
      { label: "Centre Stone", value: "Pear brilliant" },
      { label: "Accents", value: "Marquise shoulders" },
      { label: "Setting", value: "Claw set" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "viola",
    name: "Viola",
    collection: "engagement-rings",
    style: "Emerald Baguette Trilogy",
    description: "An emerald cut between two tapered baguettes, pure geometry.",
    story:
      "Viola is architecture for the hand: an emerald cut flanked by two tapered baguettes, step-cut calm on step-cut calm, a trilogy drawn entirely in straight lines.",
    priceFrom: 140000,
    priceTo: 255000,
    metals: {
      yellow: ["/images/products/viola/yellow-top.jpg", "/images/products/viola/yellow-front.jpg"],
      white: ["/images/products/viola/white-top.jpg", "/images/products/viola/white-front.jpg"],
      rose: ["/images/products/viola/rose-top.jpg", "/images/products/viola/rose-front.jpg"],
    },
    lifestyle: [
      "/images/products/viola/lifestyle-1.jpg",
      "/images/products/viola/lifestyle-2.jpg",
      "/images/products/viola/lifestyle-3.jpg",
    ],
    details: [
      { label: "Centre Stone", value: "Emerald cut" },
      { label: "Accents", value: "Two tapered baguettes" },
      { label: "Setting", value: "Trilogy, channel & claw" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "isabeau",
    name: "Isabeau",
    collection: "engagement-rings",
    style: "Twisted Pear Toi et Moi",
    description: "Two pears crossing in a twisted toi et moi.",
    story:
      "Isabeau winds two pears past one another in a twist of gold: the toi et moi, the ring of two souls, given a movement that never quite comes to rest.",
    priceFrom: 120000,
    priceTo: 230000,
    metals: {
      yellow: ["/images/products/isabeau/yellow-top.jpg", "/images/products/isabeau/yellow-front.jpg"],
      white: ["/images/products/isabeau/white-top.jpg", "/images/products/isabeau/white-front.jpg"],
      rose: ["/images/products/isabeau/rose-top.jpg", "/images/products/isabeau/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Two pear brilliants" },
      { label: "Setting", value: "Twisted toi et moi" },
      { label: "Band", value: "Crossover" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "althea",
    name: "Althea",
    collection: "engagement-rings",
    style: "Oval Trilogy Cluster",
    description: "An oval trilogy framed by a cluster of brilliants.",
    story:
      "Althea gathers its light: an oval trilogy at the centre, ringed by a cluster of brilliants that make one large stone of many. Presence, without a single vast diamond.",
    priceFrom: 150000,
    priceTo: 270000,
    metals: {
      yellow: ["/images/products/althea/yellow-top.jpg", "/images/products/althea/yellow-front.jpg"],
      white: ["/images/products/althea/white-top.jpg", "/images/products/althea/white-front.jpg"],
      rose: ["/images/products/althea/rose-top.jpg", "/images/products/althea/rose-front.jpg"],
    },
    lifestyle: ["/images/products/althea/lifestyle-1.jpg", "/images/products/althea/lifestyle-2.jpg"],
    details: [
      { label: "Centre", value: "Oval trilogy" },
      { label: "Frame", value: "Brilliant cluster" },
      { label: "Setting", value: "Cluster halo" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "solene",
    name: "Solène",
    collection: "engagement-rings",
    style: "Emerald Solitaire, Tapered Baguette Band",
    description: "An emerald solitaire raised over a tapered baguette band.",
    story:
      "Solène balances an emerald-cut solitaire above a band of tapered baguettes: a clean rectangle of light with a quiet rhythm running beneath it.",
    priceFrom: 135000,
    priceTo: 250000,
    metals: {
      yellow: ["/images/products/solene/yellow-top.jpg", "/images/products/solene/yellow-front.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: [
      "/images/products/solene/lifestyle-1.jpg",
      "/images/products/solene/lifestyle-2.jpg",
      "/images/products/solene/lifestyle-3.jpg",
      "/images/products/solene/lifestyle-4.jpg",
      "/images/products/solene/lifestyle-5.jpg",
      "/images/products/solene/lifestyle-6.jpg",
    ],
    details: [
      { label: "Centre Stone", value: "Emerald cut solitaire" },
      { label: "Band", value: "Tapered baguettes" },
      { label: "Setting", value: "Raised solitaire" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "cascading-hoops",
    name: "Cascading Hoops",
    collection: "signature-earrings",
    style: "Signature Diamond Hoops",
    description: "Hoops set with graduated brilliants that cascade around the curve.",
    story:
      "The Cascading Hoops run graduated brilliants from lobe to crest, so the light builds as the hoop rises: our signature earring and the one most often never taken off.",
    priceFrom: 90000,
    priceTo: 180000,
    metals: {
      yellow: ["/images/products/cascading-hoops/yellow-top.jpg", "/images/products/cascading-hoops/yellow-side.jpg"],
      white: ["/images/products/cascading-hoops/white-top.jpg", "/images/products/cascading-hoops/white-side.jpg"],
      rose: ["/images/products/cascading-hoops/rose-top.jpg", "/images/products/cascading-hoops/rose-side.jpg"],
    },
    lifestyle: ["/images/products/cascading-hoops/lifestyle-1.jpg", "/images/products/cascading-hoops/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Graduated round brilliants" },
      { label: "Setting", value: "Shared claw" },
      { label: "Closure", value: "Hinged snap" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "arietta",
    name: "Arietta",
    collection: "signature-earrings",
    style: "Pear Double Drop Earrings",
    description: "Two pears falling in a double drop from the lobe.",
    story:
      "Arietta hangs two pears in sequence, a smaller above a larger, so they swing as one line of light with every turn of the head.",
    priceFrom: 85000,
    priceTo: 165000,
    metals: {
      yellow: ["/images/products/arietta/yellow-top.jpg", "/images/products/arietta/yellow-side.jpg"],
      white: ["/images/products/arietta/white-top.jpg", "/images/products/arietta/white-side.jpg"],
      rose: ["/images/products/arietta/rose-top.jpg", "/images/products/arietta/rose-side.jpg"],
    },
    lifestyle: ["/images/products/arietta/lifestyle-1.jpg", "/images/products/arietta/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Paired pear brilliants" },
      { label: "Style", value: "Double drop" },
      { label: "Back", value: "Secure post" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "tara",
    name: "Tara",
    collection: "signature-earrings",
    style: "Diamond Drop Earrings",
    description: "A drop of brilliants suspended from a fine stud.",
    story:
      "Tara suspends a line of brilliants from a single stud: understated when still, unmistakable when it moves.",
    priceFrom: 80000,
    priceTo: 160000,
    metals: {
      yellow: ["/images/products/tara/yellow-top.jpg", "/images/products/tara/yellow-back.jpg"],
      white: ["/images/products/tara/white-top.jpg", "/images/products/tara/white-back.jpg"],
      rose: ["/images/products/tara/rose-top.jpg", "/images/products/tara/rose-back.jpg"],
    },
    lifestyle: ["/images/products/tara/lifestyle-1.jpg", "/images/products/tara/lifestyle-2.jpg"],
    details: [
      { label: "Stones", value: "Round brilliants" },
      { label: "Style", value: "Articulated drop" },
      { label: "Back", value: "Secure post" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "round-pear-jacket",
    name: "Round & Pear Jacket",
    collection: "signature-earrings",
    style: "Convertible Earring Jacket",
    description: "A round stud with a detachable pear jacket, two earrings in one.",
    story:
      "The Round & Pear Jacket is worn two ways: a quiet round stud by day, a pear-fringed drop by night. One pair, two lives.",
    priceFrom: 70000,
    priceTo: 140000,
    metals: {
      yellow: ["/images/products/round-pear-jacket/yellow-top.jpg", "/images/products/round-pear-jacket/yellow-front.jpg"],
      white: ["/images/products/round-pear-jacket/white-top.jpg", "/images/products/round-pear-jacket/white-front.jpg"],
      rose: ["/images/products/round-pear-jacket/rose-top.jpg", "/images/products/round-pear-jacket/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Round stud + pear jacket" },
      { label: "Style", value: "Convertible, worn two ways" },
      { label: "Back", value: "Secure post" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "lucky-heart",
    name: "Lucky Heart",
    collection: "signature-earrings",
    style: "Heart-Cut Studs",
    description: "A pair of heart-cut brilliants, worn close to the lobe.",
    story:
      "The Lucky Heart keeps it simple and sentimental: two heart-cut diamonds set low and secure, a small charm you never take off.",
    priceFrom: 45000,
    priceTo: 90000,
    metals: {
      yellow: ["/images/products/lucky-heart/yellow-top.jpg", "/images/products/lucky-heart/yellow-front.jpg"],
      white: ["/images/products/lucky-heart/white-top.jpg", "/images/products/lucky-heart/white-front.jpg"],
      rose: ["/images/products/lucky-heart/rose-top.jpg", "/images/products/lucky-heart/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched heart-cut pair" },
      { label: "Setting", value: "Three-claw" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "cascade-drop",
    name: "Cascade",
    collection: "signature-earrings",
    style: "Pear Dangle Earrings",
    description: "Pear brilliants dangling in a cascade of light.",
    story:
      "Cascade lets a row of pears fall free, each catching the light a beat after the last: movement made of diamonds.",
    priceFrom: 85000,
    priceTo: 170000,
    metals: {
      yellow: ["/images/products/cascade-drop/yellow-top.jpg", "/images/products/cascade-drop/yellow-front.jpg"],
      white: ["/images/products/cascade-drop/white-top.jpg", "/images/products/cascade-drop/white-front.jpg"],
      rose: ["/images/products/cascade-drop/rose-top.jpg", "/images/products/cascade-drop/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Graduated pear brilliants" },
      { label: "Style", value: "Free-hanging dangle" },
      { label: "Back", value: "Secure post" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "marquise-hoop",
    name: "Marquise Hoop",
    collection: "signature-earrings",
    style: "Front-to-Back Marquise Hoops",
    description: "Marquise stones running front to back around the ear.",
    story:
      "The Marquise Hoop turns each stone lengthwise and runs them front to back, so the hoop reads as a single unbroken arc of light.",
    priceFrom: 95000,
    priceTo: 185000,
    metals: {
      yellow: ["/images/products/marquise-hoop/yellow-top.jpg", "/images/products/marquise-hoop/yellow-front.jpg"],
      white: ["/images/products/marquise-hoop/white-top.jpg", "/images/products/marquise-hoop/white-front.jpg"],
      rose: ["/images/products/marquise-hoop/rose-top.jpg", "/images/products/marquise-hoop/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Marquise brilliants" },
      { label: "Style", value: "Front-to-back hoop" },
      { label: "Closure", value: "Hinged snap" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "pear-hoop",
    name: "Pear Hoop",
    collection: "signature-earrings",
    style: "Shared-Prong Pear Hoops",
    description: "Pear brilliants shared-prong set around a full hoop.",
    story:
      "The Pear Hoop rings the ear in shared-prong pears, each stone lifting into the next: our most generous hoop, made for the moments that ask for more.",
    priceFrom: 110000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/pear-hoop/yellow-top.jpg", "/images/products/pear-hoop/yellow-front.jpg"],
      white: ["/images/products/pear-hoop/white-top.jpg", "/images/products/pear-hoop/white-front.jpg"],
      rose: ["/images/products/pear-hoop/rose-top.jpg", "/images/products/pear-hoop/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Shared-prong pear brilliants" },
      { label: "Style", value: "Full hoop" },
      { label: "Closure", value: "Hinged snap" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
];

export const collectionParents: CollectionParent[] = ["Rings", "Earrings"];

export function getCollectionsByParent(parent: CollectionParent) {
  return collections.filter((c) => c.parent === parent);
}

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(slug: CollectionSlug) {
  return products.filter((p) => p.collection === slug);
}
export function productImage(p: Product, metal: MetalColor = "yellow") {
  return p.metals[metal][0] ?? p.metals.yellow[0];
}
export function productHover(p: Product) {
  return p.lifestyle[0] ?? p.metals.white[0] ?? p.metals.yellow[1] ?? p.metals.yellow[0];
}

export function formatPrice(value: number) {
  return `₹${value.toLocaleString("en-IN")}`;
}

export function formatRange(from: number, to: number) {
  return `${formatPrice(from)} – ${formatPrice(to)}`;
}
