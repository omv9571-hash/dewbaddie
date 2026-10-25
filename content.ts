export interface Article {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  category: "Personal Style" | "College Style" | "Beauty Basics" | "Hair Routines" | "Trend Decoder";
  tags: string[];
  date: string;
  author: string;
  readingTime: string;
  featured: boolean;
  draft: boolean;
  summary: string;
  coverImage?: string;
  coverImageAlt?: string;
  tableOfContents?: { title: string; id: string }[];
  sections: ArticleSection[];
  faqs?: { question: string; answer: string }[];
}

export interface ArticleSection {
  id?: string;
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  callout?: {
    type: "try" | "avoid" | "note";
    title?: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  list?: {
    type: "ordered" | "unordered";
    items: string[];
  };
}

export interface EditorialTrend {
  name: string;
  slug: string;
  category: "Skincare" | "Makeup" | "Hair" | "Fashion & Accessories" | "Lifestyle";
  badge: "Trend Breakdown" | "Ingredient Spotlight" | "Worth Knowing";
  summary: string;
  whyTrending: string;
  whoItSuits: string;
  howToStyle: string;
  considerations: string;
  verifiedPrice?: string;
  priceCheckedAt?: string;
  sourceLabel?: string;
  disclosure: string;
}

export const ARTICLES: Article[] = [
  {
    title: "What Is a Baddie? Meaning, Style and Aesthetic Explained",
    metaTitle: "What Is a Baddie? Meaning, Style & Aesthetic Guide",
    metaDescription: "What is a baddie? Learn the meaning, the baddie aesthetic, how the Indian baddie look is trending, and easy makeup, hair and outfit tips to try.",
    slug: "what-is-a-baddie",
    category: "Personal Style",
    tags: ["baddie meaning", "baddie aesthetic", "indian baddie", "desi baddie look", "baddie makeup"],
    date: "2026-10-25",
    author: "Team DewBaddie",
    readingTime: "5 min read",
    featured: true,
    draft: false,
    summary: "You have seen the word under a million selfies, reels and outfit pics. But what is a baddie, really? Discover the meaning, the aesthetic, what makes the Indian baddie look special, and easy tips to try today.",
    tableOfContents: [
      { title: "What does \"baddie\" mean?", id: "what-does-baddie-mean" },
      { title: "What is the baddie aesthetic?", id: "what-is-the-baddie-aesthetic" },
      { title: "What is an Indian baddie?", id: "what-is-an-indian-baddie" },
      { title: "How do you do baddie makeup?", id: "how-do-you-do-baddie-makeup" },
      { title: "What does baddie hair look like?", id: "what-does-baddie-hair-look-like" },
      { title: "What do baddies wear?", id: "what-do-baddies-wear" },
      { title: "Is the baddie trend empowering or problematic?", id: "is-the-baddie-trend-empowering-or-problematic" },
      { title: "Frequently Asked Questions", id: "faq" },
    ],
    sections: [
      {
        id: "intro",
        paragraphs: [
          "You have seen the word under a million selfies, reels and outfit pics. Baddie. But what is a baddie, really? Is it a look, a vibe, or just a very good eyeliner day?",
          "Short answer: a baddie is someone who is confident, put together and unapologetic about taking up space. In this guide you will get the meaning, the full baddie aesthetic, what makes the Indian baddie version special, and easy things you can try today. Skin so dewy it's rude. Let's go.",
        ],
      },
      {
        id: "what-does-baddie-mean",
        heading: "What does \"baddie\" mean?",
        paragraphs: [
          "\"Baddie\" is slang for a person, usually a woman, who is attractive, stylish and self-assured. The \"bad\" here is not about being a bad person. It means bold and fearless, the way \"sick\" or \"wicked\" can mean great.",
          "The word grew out of African American Vernacular English and spread worldwide through hip-hop, Instagram and TikTok. Today it is used for a whole attitude: you know your worth, you dress for yourself and you do not wait for permission.",
        ],
        callout: {
          type: "try",
          title: "What to try",
          text: "Use \"baddie\" as a compliment for confidence, not only for looks. \"She walked in like a baddie\" is about self-assured energy.",
        },
      },
      {
        id: "baddie-avoid",
        callout: {
          type: "avoid",
          title: "What to avoid",
          text: "Do not read it as \"mean girl\" or \"high maintenance.\" Being a baddie has nothing to do with being rude to people.",
        },
      },
      {
        id: "baddie-vs-other-aesthetics",
        subheading: "Baddie vs. other popular aesthetics",
        paragraphs: [
          "People mix these up all the time. Here is how they differ:",
        ],
        table: {
          headers: ["Aesthetic", "Main vibe", "Makeup", "Signature pieces"],
          rows: [
            ["Baddie", "Bold, glam, confident", "Defined eyes, lined lips, glowy skin", "Fitted tops, cargos, statement jewellery"],
            ["Clean girl", "Fresh, minimal", "Skin-first, brushed-up brows", "Slick bun, neutral basics"],
            ["Soft girl", "Sweet, pastel", "Blush, glossy lips", "Pleated skirts, cardigans"],
            ["Y2K", "Nostalgic, shiny", "Frosted shimmer, thin brows", "Baby tees, low-rise jeans"],
          ],
        },
      },
      {
        id: "mixing-aesthetics-note",
        paragraphs: [
          "You can mix them. Plenty of baddies add a soft-girl blush or a Y2K shimmer to their base.",
        ],
      },
      {
        id: "what-is-the-baddie-aesthetic",
        heading: "What is the baddie aesthetic?",
        paragraphs: [
          "The baddie aesthetic is a polished, high-contrast look: flawless-looking skin, sharp liner or a statement lip, sleek hair, and clothes that fit well. It is less about one outfit and more about a few repeat signals.",
        ],
        table: {
          headers: ["Element", "What it looks like", "Easy way to try it"],
          rows: [
            ["Skin", "Glowy, even, \"face card\" energy", "Light base, concealer where you need it, a touch of highlighter"],
            ["Eyes", "Winged liner, defined lashes", "A thin liner flick plus mascara"],
            ["Lips", "Lined and glossy", "A liner slightly deeper than your lipstick, gloss in the centre"],
            ["Hair", "Sleek, shiny or voluminous curls", "Heat protectant plus a smoothing oil"],
            ["Outfit", "Fitted, intentional", "One strong piece, everything else simple"],
            ["Attitude", "Calm, sure, playful", "Stand tall and smile first"],
          ],
        },
        callout: {
          type: "avoid",
          title: "What to avoid",
          text: "Copying every trend on your feed at once. A baddie look works when two or three elements stand out and the rest stays quiet.",
        },
      },
      {
        id: "what-is-an-indian-baddie",
        heading: "What is an Indian baddie?",
        paragraphs: [
          "An Indian baddie (also called a desi baddie) mixes the classic baddie look with South Asian style: bindis, kohl, gold or silver jewellery, bangles, lehengas and sarees, and warm brown-skin-friendly makeup.",
        ],
      },
      {
        id: "why-indian-baddie-trending",
        subheading: "Why is the Indian baddie look trending?",
        paragraphs: [
          "Search the hashtag and you will find thousands of posts, mostly selfies, glow-up reels and festive looks, often with tags like desi, glowup and traditional wear. A few reasons it keeps growing:",
        ],
        list: {
          type: "unordered",
          items: [
            "Representation: South Asian creators are showing makeup made for brown skin tones instead of adapting looks made for fair skin.",
            "Fusion fashion: Wearing bangles with jeans or a bindi with a crop top is now seen as a flex, not as \"trying too hard.\"",
            "Culture pride: Hair oiling, kohl and traditional jewellery are being celebrated as core features of the aesthetic rather than hidden.",
          ],
        },
      },
      {
        id: "indian-baddie-traditional",
        subheading: "Can you be an Indian baddie in traditional wear?",
        paragraphs: [
          "Yes. Think winged liner with a small bindi, silver jhumkas, a lined lip and a well-fitted kurta set or saree. Festival looks like Navratri or wedding events are some of the most shared desi baddie moments online.",
        ],
        callout: {
          type: "try",
          title: "What to try",
          text: "Pick one traditional element (bindi, jewellery or a bold dupatta) and pair it with one modern element (sneakers, a sleek bun, a sharp liner).",
        },
      },
      {
        id: "how-do-you-do-baddie-makeup",
        heading: "How do you do baddie makeup?",
        paragraphs: [
          "You do baddie makeup by building from skin to eyes to lips, with one area getting the spotlight.",
        ],
      },
      {
        id: "minimal-baddie-makeup",
        subheading: "How do I do baddie makeup if I want it minimal?",
        paragraphs: [
          "Many people ask for a baddie look that is not a full face. The fix is simple: do mascara and a lip combo.",
        ],
        list: {
          type: "ordered",
          items: [
            "Even out your skin with a light base and a little concealer.",
            "Curl your lashes and add mascara.",
            "Line your lips, fill with a lipstick, add gloss on top.",
          ],
        },
      },
      {
        id: "brown-lip-combo",
        subheading: "How do I get the brown lip combo on pigmented lips?",
        paragraphs: [
          "The 90s brown or \"mocha\" lip is one of the most requested baddie lips on brown skin. The method most people use is layering:",
        ],
        list: {
          type: "ordered",
          items: [
            "Outline with a brown liner that is a shade or two deeper than your natural lip.",
            "Dab a little concealer on the centre of your lips to reduce the pigment, or use a pale nude.",
            "Fill the centre with a soft nude or peachy-pink lip colour.",
            "Finish with clear gloss or lip oil.",
          ],
        },
        callout: {
          type: "avoid",
          title: "What to avoid",
          text: "A pale nude with no liner. It can look chalky on deeper tones. Always blend the liner inward so there are no hard edges.",
        },
      },
      {
        id: "makeup-longevity",
        subheading: "How do I make my makeup last for college or work?",
        table: {
          headers: ["Problem", "Quick fix"],
          rows: [
            ["Base fades by noon", "Press, don't rub. Set the T-zone lightly with powder and finish with a setting spray."],
            ["Blender confusion", "Use a damp blender for cream and liquid products, dry for powders."],
            ["Brows move", "Brush brows up, set with a brow gel, and avoid touching them."],
            ["Glitter shadow slips", "Dab it over a tacky base with a finger or damp brush instead of sweeping."],
            ["First time false lashes", "Start with a short natural strip, let lash glue get tacky for 30s, press outer corner first."],
          ],
        },
      },
      {
        id: "what-does-baddie-hair-look-like",
        heading: "What does baddie hair look like?",
        paragraphs: [
          "Baddie hair is either sleek and glassy or full and bouncy. The common thread is shine and control.",
        ],
        list: {
          type: "unordered",
          items: [
            "Sleek: A heat protectant, a smoothing oil on the lengths, and a blowout brush before flat ironing. A middle or side part keeps it sharp.",
            "Voluminous: Curls or waves with a light root lift, finished with a shine spray.",
            "Desi touch: Weekly hair oiling and a gentle detangling routine do more for shine than any styling tool.",
          ],
        },
        callout: {
          type: "avoid",
          title: "What to avoid",
          text: "High heat on dry hair every single day. A shiny finish is only as good as the hair health underneath.",
        },
      },
      {
        id: "what-do-baddies-wear",
        heading: "What do baddies wear?",
        paragraphs: [
          "Baddie outfits are fitted, balanced and a little bold. The one-piece rule: choose one statement item per outfit (the jacket, the bag or the jewellery) and keep the rest simple.",
        ],
        table: {
          headers: ["Occasion", "Outfit formula", "Desi twist"],
          rows: [
            ["College", "Cropped top, straight jeans or cargos, sneakers", "Silver jhumkas or stacked bangles"],
            ["Night out", "Corset or bodysuit, mini skirt or trousers, heels", "Statement bindi, gold hoops"],
            ["Date night", "Slip dress or fitted top and flared pants", "Kajal plus a glossy lip"],
            ["Festive / wedding", "Co-ord set, lehenga or saree with a fitted blouse", "Layered jewellery, sleek hair"],
            ["Delhi winter", "Oversized jacket over a fitted base, boots", "Warm-toned lips and a printed scarf"],
          ],
        },
      },
      {
        id: "is-the-baddie-trend-empowering-or-problematic",
        heading: "Is the baddie trend empowering or problematic?",
        paragraphs: [
          "Both sides have a point, and it helps to know them.",
          "The empowering side: The baddie mindset encourages confidence, self-expression and enjoying your own glow-ups. Many people say it helped them feel proud of their skin tone, features and culture.",
          "The critical side: Some people point out that the trend can turn into pressure to look perfect or to see yourself mainly through how others view you. Social media can also push narrow beauty standards.",
        ],
        callout: {
          type: "try",
          title: "The DewBaddie perspective",
          text: "Make it yours. Dress for how it makes you feel, skip trends that do not suit you, and treat a baddie look as a fun mood, not an obligation.",
        },
      },
    ],
    faqs: [
      {
        question: "What is a baddie in simple words?",
        answer: "A baddie is a confident, stylish person who owns their look and attitude. It is a compliment about self-assured energy as much as appearance.",
      },
      {
        question: "Is \"baddie\" a good word to use?",
        answer: "Yes. In modern social and style contexts it is a compliment, like calling someone fierce, put-together, or stunning.",
      },
      {
        question: "What is the difference between a baddie and an Indian baddie?",
        answer: "An Indian baddie keeps the core confident aesthetic but fuses South Asian elements such as bindis, kohl, silver or gold jhumkas, ethnic wear, and makeup shades formulated specifically for warm brown skin.",
      },
      {
        question: "How can I become a baddie?",
        answer: "Start with confidence habits (posture, rest, barrier skincare), then pick one signature look: a reliable lip combo, sharp liner, or a well-fitted staple. Build slowly instead of copying everything.",
      },
      {
        question: "Do I need expensive products to get the baddie look?",
        answer: "No. Accessible liners, drugstore lip combos, and basic base products can recreate almost any baddie look. Technique, skin prep, and intentional styling matter far more than luxury price tags.",
      },
    ],
  },
  {
    title: "The 8 AM College Baddie: Commute-Proof Makeup & Repeat-Wardrobe Formulas",
    metaTitle: "8 AM College Baddie Guide — Commute-Proof Beauty & Styling",
    metaDescription: "Practical guide to looking put-together for college without waking up at 5 AM or spending a fortune on new clothes.",
    slug: "college-baddie-commute-proof-guide",
    category: "College Style",
    tags: ["college style", "commute proof", "capsule wardrobe", "budget beauty"],
    date: "2026-10-24",
    author: "Editorial Team",
    readingTime: "4 min read",
    featured: false,
    draft: true,
    summary: "Surviving crowded metros, 35°C humidity, and 8 AM lectures while looking effortlessly put together with 5 repeat essentials.",
    sections: [
      {
        id: "college-intro",
        paragraphs: [
          "College mornings in India are unforgiving. Between battling rush hour transit, unpredictable weather, and 8 AM attendance calls, nobody has an hour to spend in front of the mirror.",
          "Here is the DewBaddie blueprint for a 10-minute campus routine that stays intact until your last tutorial.",
        ],
      },
      {
        id: "repeat-wardrobe",
        heading: "The 5-Piece Capsule Formula",
        paragraphs: [
          "You don't need a new outfit every day. Baddies repeat clothes intentionally by switching one key accessory:",
        ],
        table: {
          headers: ["Base Item", "Day 1 Styling", "Day 2 Remix"],
          rows: [
            ["Wide-leg black cargos", "With a cropped white baby tee & sneakers", "With an oversized linen shirt & silver hoops"],
            ["Straight vintage blue jeans", "With a fitted ribbed knit tank", "With a short printed kurti & oxidised jhumkas"],
            ["Neutral tote bag", "Minimal everyday setup", "Accessorised with a silk scarf tied to the strap"],
          ],
        },
      },
    ],
  },
  {
    title: "How to Perfect the 90s Brown Lip Combo on Pigmented Lips",
    metaTitle: "90s Brown Lip Combo for Brown Skin — Step by Step",
    metaDescription: "The exact 4-step lining technique to get a rich mocha ombre lip without chalkiness or ashy undertones.",
    slug: "90s-brown-lip-combo-pigmented-lips",
    category: "Beauty Basics",
    tags: ["brown lip combo", "pigmented lips", "lip liner", "desi beauty"],
    date: "2026-10-23",
    author: "Editorial Team",
    readingTime: "3 min read",
    featured: false,
    draft: true,
    summary: "The definitive guide to layering deep chocolate liners and soft peachy-nudes so your lip combo never washes out your skin tone.",
    sections: [
      {
        id: "lip-combo-steps",
        paragraphs: [
          "Finding a nude lip that doesn't turn grey or chalky on two-toned, pigmented lips can be frustrating. The secret lies entirely in the liner shade and undertone balance.",
        ],
      },
    ],
  },
];

export const EDITORIAL_TRENDS: EditorialTrend[] = [
  {
    name: "Ceramide Barrier Hydration Serums",
    slug: "ceramide-barrier-serums",
    category: "Skincare",
    badge: "Ingredient Spotlight",
    summary: "Why barrier repair serums are everywhere on your feed, and how to tell if your moisture barrier actually needs one.",
    whyTrending: "Editorial Observation: Beauty consumers are shifting away from harsh exfoliating acids toward restorative, skin-identical barrier lipids.",
    whoItSuits: "Dry, sensitized, or compromised skin dealing with tight sensations, windburn, or post-acne flaking.",
    howToStyle: "Apply on slightly damp skin right after cleansing, followed by a lightweight gel or cream moisturiser.",
    considerations: "Not all formulas are equal. Check for a balanced 3:1:1 ratio of ceramides, cholesterol, and fatty acids.",
    verifiedPrice: "₹650 – ₹1,200 (Typical Indian Market Range)",
    priceCheckedAt: "October 2026",
    sourceLabel: "Indian Pharmacy & D2C Market Review",
    disclosure: "Editorial spotlight only. DewBaddie does not sell this product or maintain commercial retail inventory.",
  },
  {
    name: "Peptide Glazed Lip Oils",
    slug: "peptide-glazed-lip-oils",
    category: "Makeup",
    badge: "Trend Breakdown",
    summary: "The middle ground between a sticky 2000s lip gloss and an intensive overnight lip treatment.",
    whyTrending: "Aesthetic Movement: The viral 'dewy glaze' look has made heavy, sticky glosses obsolete in favour of peptide-infused hydrating oils.",
    whoItSuits: "Anyone who wants the mirror-shine reflection of gloss with the cushiony comfort of a nourishing balm.",
    howToStyle: "Layer directly over a warm brown lip liner flick for the quintessential college baddie pout.",
    considerations: "Lip oils absorb naturally over 2–3 hours. Keep one in your tote for quick campus touch-ups.",
    verifiedPrice: "₹399 – ₹850",
    priceCheckedAt: "October 2026",
    sourceLabel: "Editorial Beauty Tracker",
    disclosure: "Editorial spotlight only. DewBaddie does not sell products online.",
  },
  {
    name: "Oxidised Silver Jhumkas with Modern Streetwear",
    slug: "silver-jhumkas-streetwear",
    category: "Fashion & Accessories",
    badge: "Worth Knowing",
    summary: "The ultimate Desi Baddie fusion: elevating oversized casuals and cargo pants with heritage jewellery.",
    whyTrending: "Cultural Resurgence: South Asian Gen Z creators embracing cultural pride by pairing traditional silver filigree with Western silhouettes.",
    whoItSuits: "College students wanting an instant statement look without overspending on an entirely new wardrobe.",
    howToStyle: "Pair with an all-black fitted tank and straight-leg trousers, or an oversized hoodie with hair in a sleek slicked bun.",
    considerations: "Look for nickel-free silver polish if you have sensitive piercings.",
    disclosure: "Editorial style guide. Non-commercial fashion breakdown.",
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article {
  return ARTICLES.find((a) => a.featured) || ARTICLES[0];
}

export function getAllTrends(): EditorialTrend[] {
  return EDITORIAL_TRENDS;
}

export function getTrendBySlug(slug: string): EditorialTrend | undefined {
  return EDITORIAL_TRENDS.find((t) => t.slug === slug);
}
