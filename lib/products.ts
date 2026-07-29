import { priceRangeFor } from "@/lib/pricing";

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
  subtext: string;
  description: string;
  image: string;
  comingSoon?: boolean;
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
    description:
      "Pavé bands and contour rings drawn with restraint: the pieces worn every day, and never taken off.",
    image: "/images/products/ava/yellow-top.jpg",
  },
  {
    slug: "classic-designer",
    name: "Classic & Designer",
    parent: "Rings",
    subtext: "For moments that matter",
    description:
      "Crown bands, trilogies and signets: designer classics made to be handed down rather than replaced.",
    image: "/images/products/diana/yellow-top.jpg",
  },
  {
    slug: "statement",
    name: "Statement",
    parent: "Rings",
    subtext: "Own the spotlight",
    description:
      "Bold compositions in sculpted gold and rare colour, made for the hand that carries the occasion.",
    image: "/images/products/capri/yellow-top.jpg",
  },
  {
    slug: "engagement-rings",
    name: "Engagement Rings",
    parent: "Rings",
    subtext: "A lifelong promise",
    description:
      "Solitaires and trilogies built around a single certified stone, made to order for the most personal decision of all.",
    image: "/images/products/florence/yellow-top.jpg",
  },
  {
    slug: "studs",
    name: "Studs",
    parent: "Earrings",
    subtext: "Everyday sparkle",
    description:
      "Solitaire studs in every cut: the most personal kind of everyday brilliance, matched stone to stone.",
    image: "/images/products/iris-oval/yellow-top.jpg",
  },
  {
    slug: "signature-earrings",
    name: "Signature Earrings",
    parent: "Earrings",
    subtext: "Effortlessly unforgettable",
    description:
      "Hoops, drops and cascades in certified diamonds: statement earrings for the moments a stud cannot carry alone.",
    image: "/images/products/cascading-hoops/yellow-top.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "ava",
    name: "Ava",
    collection: "modern-elegant",
    style: "Pavé Wedding Band",
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
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "arden",
    name: "Arden",
    collection: "modern-elegant",
    style: "Pavé Chevron Wedding Band",
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
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "iris-oval",
    name: "Iris Oval",
    collection: "studs",
    style: "Oval Solitaire Studs",
    description: "Elongated oval brilliants, angled to lift and lengthen the face.",
    story:
      "The oval flatters the way few cuts can: the Iris Oval sits slightly tilted on the lobe so the stone catches overhead light at its widest face.",
    priceFrom: 50000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/iris-oval/yellow-top.jpg", "/images/products/iris-oval/yellow-front.jpg"],
      white: ["/images/products/iris-oval/white-top.jpg", "/images/products/iris-oval/white-front.jpg"],
      rose: ["/images/products/iris-oval/rose-top.jpg", "/images/products/iris-oval/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Stones", value: "Matched oval pair, 0.3 – 1.5 ct each" },
      { label: "Setting", value: "Four-prong basket" },
      { label: "Back", value: "Secure screw back" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
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
  {
    slug: "skylar",
    name: "Skylar",
    collection: "modern-elegant",
    style: "Large Pavé Band",
    description: "A wide band paved edge to edge with shared-prong round brilliants.",
    story:
      "Skylar takes the pavé band and opens it up: larger shared-prong brilliants across a broad face, so the whole ring reads as light.",
    priceFrom: 70000,
    priceTo: 110000,
    metals: {
      yellow: ["/images/products/skylar/yellow-top.jpg", "/images/products/skylar/yellow-front.jpg"],
      white: ["/images/products/skylar/white-top.jpg", "/images/products/skylar/white-front.jpg"],
      rose: ["/images/products/skylar/rose-top.jpg", "/images/products/skylar/rose-front.jpg"],
    },
    lifestyle: ["/images/products/skylar/lifestyle-1.jpg", "/images/products/skylar/lifestyle-2.jpg", "/images/products/skylar/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Large Pavé Band" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "narelle",
    name: "Narelle",
    collection: "modern-elegant",
    style: "Emerald Contour Ceremonial Ring",
    description: "A curved contour band set with step-cut emerald diamonds.",
    story:
      "Narelle curves to sit flush against a solitaire, its emerald-cut diamonds keeping a calm, architectural line.",
    priceFrom: 95000,
    priceTo: 150000,
    metals: {
      yellow: ["/images/products/narelle/yellow-top.jpg", "/images/products/narelle/yellow-front.jpg"],
      white: ["/images/products/narelle/white-top.jpg", "/images/products/narelle/white-front.jpg"],
      rose: ["/images/products/narelle/rose-top.jpg", "/images/products/narelle/rose-front.jpg"],
    },
    lifestyle: ["/images/products/narelle/lifestyle-1.jpg", "/images/products/narelle/lifestyle-2.jpg"],
    details: [
      { label: "Style", value: "Emerald Contour Ceremonial Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "saphira",
    name: "Saphira",
    collection: "modern-elegant",
    style: "Slanted Marquise Ceremonial Ring",
    description: "Marquise diamonds set on a slant, running with the line of the finger.",
    story:
      "Saphira angles each marquise on a slant so the stones lean into one another, a quiet diagonal of light.",
    priceFrom: 90000,
    priceTo: 145000,
    metals: {
      yellow: ["/images/products/saphira/yellow-top.jpg", "/images/products/saphira/yellow-front.jpg"],
      white: ["/images/products/saphira/white-top.jpg", "/images/products/saphira/white-front.jpg"],
      rose: ["/images/products/saphira/rose-top.jpg", "/images/products/saphira/rose-front.jpg"],
    },
    lifestyle: ["/images/products/saphira/lifestyle-1.jpg", "/images/products/saphira/lifestyle-2.jpg", "/images/products/saphira/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Slanted Marquise Ceremonial Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "harper-emerald-bezel",
    name: "Harper",
    collection: "modern-elegant",
    style: "Emerald Bezel Ceremonial Ring",
    description: "Rectangular emerald-cut diamonds held in individual bezels along the band.",
    story:
      "Harper frames each emerald cut in its own bezel, a row of clean rectangles set into the band.",
    priceFrom: 95000,
    priceTo: 155000,
    metals: {
      yellow: ["/images/products/harper-emerald-bezel/yellow-top.jpg", "/images/products/harper-emerald-bezel/yellow-front.jpg"],
      white: ["/images/products/harper-emerald-bezel/white-top.jpg", "/images/products/harper-emerald-bezel/white-front.jpg"],
      rose: ["/images/products/harper-emerald-bezel/rose-top.jpg", "/images/products/harper-emerald-bezel/rose-front.jpg"],
    },
    lifestyle: ["/images/products/harper-emerald-bezel/lifestyle-1.jpg", "/images/products/harper-emerald-bezel/lifestyle-2.jpg", "/images/products/harper-emerald-bezel/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Emerald Bezel Ceremonial Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "estelle",
    name: "Estelle",
    collection: "modern-elegant",
    style: "Scattered Pear & Round Band",
    description: "Pear and round brilliants scattered organically across the band.",
    story:
      "Estelle scatters pears and rounds at varied angles, so the light feels caught rather than arranged.",
    priceFrom: 85000,
    priceTo: 140000,
    metals: {
      yellow: ["/images/products/estelle/yellow-top.jpg", "/images/products/estelle/yellow-front.jpg"],
      white: ["/images/products/estelle/white-top.jpg", "/images/products/estelle/white-front.jpg"],
      rose: ["/images/products/estelle/rose-top.jpg", "/images/products/estelle/rose-front.jpg"],
    },
    lifestyle: ["/images/products/estelle/lifestyle-1.jpg"],
    details: [
      { label: "Style", value: "Scattered Pear & Round Band" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "noemie",
    name: "Noémie",
    collection: "modern-elegant",
    style: "Baguette Wedding Band",
    description: "Baguette diamonds channel-set in a continuous line.",
    story:
      "Noémie runs step-cut baguettes channel-set through the band, a single uninterrupted line of calm light.",
    priceFrom: 80000,
    priceTo: 130000,
    metals: {
      yellow: ["/images/products/noemie/yellow-top.jpg", "/images/products/noemie/yellow-front.jpg"],
      white: ["/images/products/noemie/white-top.jpg", "/images/products/noemie/white-front.jpg"],
      rose: ["/images/products/noemie/rose-top.jpg", "/images/products/noemie/rose-front.jpg"],
    },
    lifestyle: ["/images/products/noemie/lifestyle-1.jpg", "/images/products/noemie/lifestyle-2.jpg", "/images/products/noemie/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Baguette Wedding Band" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "diana",
    name: "Diana",
    collection: "classic-designer",
    style: "Crown Wedding Band",
    description: "A crown band with sculpted peaks set with round diamonds.",
    story:
      "Diana lifts into a row of sculpted peaks, each crowned with a round diamond: a small tiara for the hand.",
    priceFrom: 90000,
    priceTo: 150000,
    metals: {
      yellow: ["/images/products/diana/yellow-top.jpg", "/images/products/diana/yellow-front.jpg"],
      white: ["/images/products/diana/white-top.jpg", "/images/products/diana/white-front.jpg"],
      rose: ["/images/products/diana/rose-top.jpg", "/images/products/diana/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Style", value: "Crown Wedding Band" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "elina",
    name: "Elina",
    collection: "classic-designer",
    style: "Radiant & Tapered Baguette Trilogy",
    description: "A radiant centre flanked by tapered baguettes.",
    story:
      "Elina sets a radiant cut between two tapered baguettes, brilliant fire held between two lines of step-cut calm.",
    priceFrom: 140000,
    priceTo: 250000,
    metals: {
      yellow: ["/images/products/elina/yellow-top.jpg", "/images/products/elina/yellow-front.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/elina/lifestyle-1.jpg", "/images/products/elina/lifestyle-2.jpg", "/images/products/elina/lifestyle-3.jpg", "/images/products/elina/lifestyle-4.jpg", "/images/products/elina/lifestyle-5.jpg"],
    details: [
      { label: "Style", value: "Radiant & Tapered Baguette Trilogy" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "vienna-radiant",
    name: "Vienna",
    collection: "classic-designer",
    style: "1.77ct Radiant Solitaire",
    description: "A 1.77 carat radiant-cut diamond solitaire on a fine band.",
    story:
      "The Vienna solitaire lifts a 1.77 carat radiant on a fine polished band, nothing to distract from the stone.",
    priceFrom: 160000,
    priceTo: 290000,
    metals: {
      yellow: ["/images/products/vienna-radiant/yellow-top.jpg", "/images/products/vienna-radiant/yellow-front.jpg"],
      white: ["/images/products/vienna-radiant/white-top.jpg", "/images/products/vienna-radiant/white-front.jpg"],
      rose: ["/images/products/vienna-radiant/rose-top.jpg", "/images/products/vienna-radiant/rose-front.jpg"],
    },
    lifestyle: ["/images/products/vienna-radiant/lifestyle-1.jpg", "/images/products/vienna-radiant/lifestyle-2.jpg"],
    details: [
      { label: "Style", value: "1.77ct Radiant Solitaire" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "harper-cushion",
    name: "Harper",
    collection: "classic-designer",
    style: "Elongated Cushion Bezel",
    description: "An elongated cushion diamond in a smooth full bezel.",
    story:
      "Harper wraps an elongated cushion in a full bezel of gold, soft-cornered and modern to the last line.",
    priceFrom: 130000,
    priceTo: 240000,
    metals: {
      yellow: ["/images/products/harper-cushion/yellow-top.jpg", "/images/products/harper-cushion/yellow-front.jpg"],
      white: ["/images/products/harper-cushion/white-top.jpg", "/images/products/harper-cushion/white-front.jpg"],
      rose: ["/images/products/harper-cushion/rose-top.jpg", "/images/products/harper-cushion/rose-front.jpg"],
    },
    lifestyle: ["/images/products/harper-cushion/lifestyle-1.jpg", "/images/products/harper-cushion/lifestyle-2.jpg", "/images/products/harper-cushion/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Elongated Cushion Bezel" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "winslow",
    name: "Winslow",
    collection: "classic-designer",
    style: "Emerald Half-Bezel Signet",
    description: "An emerald-cut diamond half-bezel set into a signet face.",
    story:
      "Winslow sinks an emerald cut into a signet face, half-bezelled: heritage shape, contemporary stone.",
    priceFrom: 110000,
    priceTo: 190000,
    metals: {
      yellow: ["/images/products/winslow/yellow-top.jpg", "/images/products/winslow/yellow-front.jpg"],
      white: ["/images/products/winslow/white-top.jpg", "/images/products/winslow/white-front.jpg"],
      rose: ["/images/products/winslow/rose-top.jpg", "/images/products/winslow/rose-front.jpg"],
    },
    lifestyle: ["/images/products/winslow/lifestyle-1.jpg", "/images/products/winslow/lifestyle-2.jpg", "/images/products/winslow/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Emerald Half-Bezel Signet" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "signature-heart-signet",
    name: "Signature Heart",
    collection: "classic-designer",
    style: "Milgrain Signet Ring",
    description: "A heart signet edged in fine milgrain beading.",
    story:
      "The Signature Heart edges a heart-shaped signet in fine milgrain, a keepsake meant to be engraved and kept.",
    priceFrom: 60000,
    priceTo: 110000,
    metals: {
      yellow: ["/images/products/signature-heart-signet/yellow-top.jpg", "/images/products/signature-heart-signet/yellow-front.jpg"],
      white: ["/images/products/signature-heart-signet/white-top.jpg", "/images/products/signature-heart-signet/white-front.jpg"],
      rose: ["/images/products/signature-heart-signet/rose-top.jpg", "/images/products/signature-heart-signet/rose-front.jpg"],
    },
    lifestyle: ["/images/products/signature-heart-signet/lifestyle-1.jpg", "/images/products/signature-heart-signet/lifestyle-2.jpg", "/images/products/signature-heart-signet/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Milgrain Signet Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "duet",
    name: "Duet",
    collection: "classic-designer",
    style: "Double Row Eternity Band",
    description: "Two parallel rows of round diamonds around a full eternity band.",
    story:
      "Duet runs two rows of round brilliants in parallel around the whole band, twice the light, all the way round.",
    priceFrom: 120000,
    priceTo: 210000,
    metals: {
      yellow: ["/images/products/duet/yellow-top.jpg", "/images/products/duet/yellow-front.jpg"],
      white: ["/images/products/duet/white-top.jpg"],
      rose: ["/images/products/duet/rose-top.jpg"],
    },
    lifestyle: ["/images/products/duet/lifestyle-1.jpg", "/images/products/duet/lifestyle-2.jpg"],
    details: [
      { label: "Style", value: "Double Row Eternity Band" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "aleasa",
    name: "Aleasa",
    collection: "statement",
    style: "Split-Shank East-West Radiant Solitaire",
    description: "A 1.30ct radiant set east-west on a split shank.",
    story:
      "Aleasa turns a 1.30 carat radiant on its side and raises it on a split shank, bold and horizontal across the hand.",
    priceFrom: 150000,
    priceTo: 270000,
    metals: {
      yellow: ["/images/products/aleasa/yellow-top.jpg", "/images/products/aleasa/yellow-front.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/aleasa/lifestyle-1.jpg", "/images/products/aleasa/lifestyle-2.jpg"],
    details: [
      { label: "Style", value: "Split-Shank East-West Radiant Solitaire" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "eloise",
    name: "Eloise",
    collection: "statement",
    style: "Pear Antique Halo",
    description: "A 0.72ct pear in an ornate antique-style halo.",
    story:
      "Eloise frames a pear in an ornate antique halo, vintage detailing drawn tight around the stone.",
    priceFrom: 120000,
    priceTo: 220000,
    metals: {
      yellow: ["/images/products/eloise/yellow-top.jpg", "/images/products/eloise/yellow-front.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/eloise/lifestyle-1.jpg", "/images/products/eloise/lifestyle-2.jpg"],
    details: [
      { label: "Style", value: "Pear Antique Halo" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "capri",
    name: "Capri",
    collection: "statement",
    style: "Bold Gold Radiant Ring",
    description: "A radiant diamond sunk into a bold sculpted gold band.",
    story:
      "Capri sinks a radiant into thick sculpted gold, diamond and metal reading as one heavy, confident object.",
    priceFrom: 130000,
    priceTo: 230000,
    metals: {
      yellow: ["/images/products/capri/yellow-top.jpg", "/images/products/capri/yellow-front.jpg"],
      white: ["/images/products/capri/white-top.jpg"],
      rose: ["/images/products/capri/rose-top.jpg"],
    },
    lifestyle: ["/images/products/capri/lifestyle-1.jpg"],
    details: [
      { label: "Style", value: "Bold Gold Radiant Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "ascent",
    name: "Ascent",
    collection: "statement",
    style: "5 Carat Radiant Yellow Diamond Ring",
    description: "A five-carat fancy yellow radiant on a slim band.",
    story:
      "Ascent gives a five-carat fancy yellow radiant the slimmest possible band, so the stone is all you see.",
    priceFrom: 300000,
    priceTo: 600000,
    metals: {
      yellow: ["/images/products/ascent/yellow-top.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/ascent/lifestyle-1.jpg", "/images/products/ascent/lifestyle-2.jpg", "/images/products/ascent/lifestyle-3.jpg", "/images/products/ascent/lifestyle-4.jpg"],
    details: [
      { label: "Style", value: "5 Carat Radiant Yellow Diamond Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "soleil",
    name: "Soleil",
    collection: "statement",
    style: "Fancy Yellow Diamond Ring",
    description: "A fancy yellow diamond framed by white brilliants.",
    story:
      "Soleil rings a fancy yellow diamond in white brilliants, warmth at the centre, fire at the edge.",
    priceFrom: 200000,
    priceTo: 400000,
    metals: {
      yellow: ["/images/products/soleil/yellow-top.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/soleil/lifestyle-1.jpg", "/images/products/soleil/lifestyle-2.jpg", "/images/products/soleil/lifestyle-3.jpg"],
    details: [
      { label: "Style", value: "Fancy Yellow Diamond Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "organza",
    name: "Organza",
    collection: "statement",
    style: "Sculptural Ruffled Gold Oval Ring",
    description: "An oval diamond set amid ruffled folds of gold.",
    story:
      "Organza gathers gold into ruffled folds around an oval diamond, a piece that moves like fabric.",
    priceFrom: 140000,
    priceTo: 250000,
    metals: {
      yellow: ["/images/products/organza/yellow-top.jpg", "/images/products/organza/yellow-front.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/organza/lifestyle-1.jpg", "/images/products/organza/lifestyle-2.jpg"],
    details: [
      { label: "Style", value: "Sculptural Ruffled Gold Oval Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "fern",
    name: "Fern",
    collection: "statement",
    style: "Green Radiant Marquise Ring",
    description: "A green radiant gemstone flanked by marquise diamonds.",
    story:
      "Fern centres a green radiant between marquise diamonds, colour held between two points of white light.",
    priceFrom: 130000,
    priceTo: 230000,
    metals: {
      yellow: ["/images/products/fern/yellow-top.jpg"],
      white: [],
      rose: ["/images/products/fern/rose-top.jpg"],
    },
    availableMetals: ["yellow", "rose"],
    lifestyle: ["/images/products/fern/lifestyle-1.jpg", "/images/products/fern/lifestyle-2.jpg"],
    details: [
      { label: "Style", value: "Green Radiant Marquise Ring" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, Rose Gold" },
    ],
  },
  {
    slug: "vera-pear",
    name: "Vera Pear",
    collection: "studs",
    style: "Pear Bezel Studs",
    description: "Pear-cut diamonds in smooth full bezels.",
    story:
      "The Vera Pear wraps each pear in a hairline of gold, the most effortless bezel stud we make.",
    priceFrom: 55000,
    priceTo: 130000,
    metals: {
      yellow: ["/images/products/vera-pear/yellow-top.jpg", "/images/products/vera-pear/yellow-side.jpg"],
      white: ["/images/products/vera-pear/white-top.jpg", "/images/products/vera-pear/white-side.jpg"],
      rose: ["/images/products/vera-pear/rose-top.jpg", "/images/products/vera-pear/rose-side.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Style", value: "Pear Bezel Studs" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "patricia",
    name: "Patricia",
    collection: "studs",
    style: "Yellow Gold Studs",
    description: "Classic round diamond studs in a fine claw setting.",
    story:
      "Patricia is the everyday stud pared back: one round brilliant, four fine claws, nothing more.",
    priceFrom: 45000,
    priceTo: 90000,
    metals: {
      yellow: ["/images/products/patricia/yellow-top.jpg", "/images/products/patricia/yellow-front.jpg"],
      white: ["/images/products/patricia/white-top.jpg", "/images/products/patricia/white-front.jpg"],
      rose: ["/images/products/patricia/rose-top.jpg", "/images/products/patricia/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Style", value: "Yellow Gold Studs" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "laurel",
    name: "Laurel",
    collection: "studs",
    style: "Leaf Melee Studs",
    description: "Leaf-inspired studs set with lab-grown melee diamonds.",
    story:
      "Laurel shapes a small leaf of melee diamonds, a little more than a solitaire, still light enough for every day.",
    priceFrom: 40000,
    priceTo: 85000,
    metals: {
      yellow: ["/images/products/laurel/yellow-top.jpg", "/images/products/laurel/yellow-front.jpg"],
      white: ["/images/products/laurel/white-top.jpg", "/images/products/laurel/white-front.jpg"],
      rose: ["/images/products/laurel/rose-top.jpg", "/images/products/laurel/rose-front.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Style", value: "Leaf Melee Studs" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "cupid",
    name: "Cupid",
    collection: "studs",
    style: "Flawless Heart-Cut Studs",
    description: "Flawless heart-cut diamond studs.",
    story:
      "Cupid sets a pair of flawless heart-cut diamonds low to the lobe, a quiet romantic charm.",
    priceFrom: 60000,
    priceTo: 130000,
    metals: {
      yellow: [],
      white: ["/images/products/cupid/white-top.jpg"],
      rose: [],
    },
    availableMetals: ["white"],
    lifestyle: ["/images/products/cupid/lifestyle-1.jpg"],
    details: [
      { label: "Style", value: "Flawless Heart-Cut Studs" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k White Gold" },
    ],
  },
  {
    slug: "flutter",
    name: "Flutter",
    collection: "studs",
    style: "Pear Butterfly Studs",
    description: "Butterfly studs formed from pear-cut diamonds.",
    story:
      "Flutter arranges pear-cut diamonds into a butterfly, playful in shape, precise in setting.",
    priceFrom: 55000,
    priceTo: 120000,
    metals: {
      yellow: ["/images/products/flutter/yellow-top.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/flutter/lifestyle-1.jpg"],
    details: [
      { label: "Style", value: "Pear Butterfly Studs" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
    ],
  },
  {
    slug: "pave-studs",
    name: "Pavé Studs",
    collection: "studs",
    style: "Round Pavé Cluster Studs",
    description: "Round pavé clusters, 0.75 carat total weight.",
    story:
      "The Pavé Studs cluster small brilliants into one bright face, the look of a larger stone, softly lit.",
    priceFrom: 45000,
    priceTo: 90000,
    metals: {
      yellow: ["/images/products/pave-studs/yellow-top.jpg", "/images/products/pave-studs/yellow-back.jpg"],
      white: ["/images/products/pave-studs/white-top.jpg", "/images/products/pave-studs/white-side.jpg"],
      rose: ["/images/products/pave-studs/rose-top.jpg", "/images/products/pave-studs/rose-side.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Style", value: "Round Pavé Cluster Studs" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "six-prong-studs",
    name: "Six-Prong Studs",
    collection: "studs",
    style: "Classic Round Studs",
    description: "Round brilliants in classic six-prong settings.",
    story:
      "The Six-Prong Studs hold each round brilliant in six fine claws, the most secure and classic setting there is.",
    priceFrom: 40000,
    priceTo: 85000,
    metals: {
      yellow: ["/images/products/six-prong-studs/yellow-top.jpg", "/images/products/six-prong-studs/yellow-side.jpg"],
      white: ["/images/products/six-prong-studs/white-top.jpg", "/images/products/six-prong-studs/white-side.jpg"],
      rose: ["/images/products/six-prong-studs/rose-top.jpg", "/images/products/six-prong-studs/rose-side.jpg"],
    },
    lifestyle: [],
    details: [
      { label: "Style", value: "Classic Round Studs" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow, White, Rose Gold" },
    ],
  },
  {
    slug: "amaya",
    name: "Amaya",
    collection: "statement",
    style: "Elongated Cushion Bezel & Pear Toi et Moi",
    description: "An elongated cushion bezel beside a pear, two stones in conversation.",
    story:
      "Amaya pairs an elongated cushion in a smooth bezel with a pear alongside it: the toi et moi, given a modern, architectural balance.",
    priceFrom: 150000,
    priceTo: 270000,
    metals: {
      yellow: ["/images/products/amaya/yellow-top.jpg", "/images/products/amaya/yellow-front.jpg"],
      white: [],
      rose: [],
    },
    availableMetals: ["yellow"],
    lifestyle: ["/images/products/amaya/lifestyle-1.jpg", "/images/products/amaya/lifestyle-2.jpg", "/images/products/amaya/lifestyle-3.jpg", "/images/products/amaya/lifestyle-4.jpg"],
    details: [
      { label: "Style", value: "Elongated Cushion Bezel & Pear Toi et Moi" },
      { label: "Certification", value: "IGI Certified" },
      { label: "Metals", value: "18k Yellow Gold" },
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
  if (p.metals[metal]?.[0]) return p.metals[metal][0];
  for (const c of productMetals(p)) if (p.metals[c]?.[0]) return p.metals[c][0];
  return p.metals.yellow[0] ?? p.metals.white[0] ?? p.metals.rose[0];
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

export function productPriceRange(p: Product, gold24k?: number) {
  return priceRangeFor(p.slug, gold24k) ?? { from: p.priceFrom, to: p.priceTo };
}
