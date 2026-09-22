import { ServiceItem, PortfolioItem, TestimonialItem, FAQItem } from '../types';

import heroImg from '../assets/images/hero_books_collection_1789568818595.jpg';
import babyJournalImg from '../assets/images/baby_journal_mockup_1789568839635.jpg';
import ebookImg from '../assets/images/ebook_design_mockup_1789568854218.jpg';
import keepsakeImg from '../assets/images/keepsake_book_mockup_1789568868842.jpg';
import childrenBookImg from '../assets/images/children_storybook_mockup_1789568886775.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  babyJournal: babyJournalImg,
  ebook: ebookImg,
  keepsake: keepsakeImg,
  childrenBook: childrenBookImg,
};

export const BRAND = {
  name: 'Guggu Creations',
  tagline: 'Beautiful Stories. Meaningful Memories.',
  eyebrow: 'CREATIVE PUBLISHING & BOOK DESIGN STUDIO',
  description:
    'Guggu Creations is a creative digital publishing and book-design studio helping authors, families, and small businesses turn ideas and memories into beautifully written, professionally designed books and journals.',
  email: 'guggucreationsstudio@gmail.com',
  workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM EST (Worldwide Online Studio)',
  location: 'Serving international clients globally',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ebook-writing',
    title: 'eBook Writing',
    tagline: 'Concept to polished manuscript',
    description:
      'From concept to completed manuscript, we help turn your ideas into clear, engaging, reader-friendly eBooks tailored to your audience and publishing goals.',
    deliverables: [
      'Comprehensive outline & chapter structure',
      'Original, ghostwritten manuscript draft',
      'Tone-of-voice alignment & copy editing',
      'Fact-checked content & bibliography',
    ],
    idealFor: 'Entrepreneurs, educators, coaches, and first-time authors seeking a ghostwritten book.',
    icon: 'PenTool',
    actionText: 'Explore eBook Writing',
  },
  {
    id: 'ebook-design',
    title: 'eBook Design',
    tagline: 'Refined digital typesetting & covers',
    description:
      'Professional interiors, covers, typography, and layouts designed to make your digital book look polished and professional on Kindle, Apple Books, and PDF.',
    deliverables: [
      'Bespoke front & back cover typography',
      'EPUB & MOBI reflowable format files',
      'Fixed-layout PDF for digital distribution',
      'Amazon KDP compliant specifications',
    ],
    idealFor: 'Self-published authors wanting their digital book to match traditional publishing houses.',
    icon: 'BookOpen',
    actionText: 'Explore eBook Design',
  },
  {
    id: 'baby-journals',
    title: 'Baby Journals',
    tagline: 'Heirloom milestone preservation',
    description:
      'Beautiful journals designed to preserve precious milestones, memories, photographs, and little moments with graceful botanical aesthetics.',
    deliverables: [
      'First-year milestone tracking spreads',
      'Dedicated prompts for parents & grandparents',
      'Archival photo mount layout spaces',
      'High-resolution print-ready interior & cover',
    ],
    idealFor: 'Parents, expectant mothers, and loved ones creating an heirloom memory treasure.',
    icon: 'HeartHandshake',
    actionText: 'Explore Baby Journals',
  },
  {
    id: 'baby-memory-books',
    title: 'Baby Memory Books',
    tagline: 'The earliest chapters of life',
    description:
      'Thoughtfully designed keepsakes for recording a child’s earliest memories, milestones, photographs, and family stories in timeless archival format.',
    deliverables: [
      'Birth story & arrival announcement page',
      'Monthly development & growth chronicles',
      'Hands & feet print dedicated spaces',
      'Custom color palette & family tree spreads',
    ],
    idealFor: 'Preserving the unrepeatable wonders of babyhood for generations to come.',
    icon: 'Sparkles',
    actionText: 'Explore Memory Books',
  },
  {
    id: 'personalized-keepsakes',
    title: 'Personalized Keepsakes',
    tagline: 'Bespoke custom memories & occasions',
    description:
      'Custom books and journals created around names, dates, stories, celebrations, baptisms, christenings, and meaningful family milestones.',
    deliverables: [
      'Baptism, christening & dedication books',
      'Foil-stamped monogram & personalized titles',
      'Anniversary & family heritage compilations',
      'Hardcover cloth-bound print specifications',
    ],
    idealFor: 'Distinctive ceremonial gifts and heirloom family celebrations.',
    icon: 'BookMarked',
    actionText: 'Explore Keepsakes',
  },
  {
    id: 'childrens-books',
    title: 'Children’s Books',
    tagline: 'Charming storybook writing & page craft',
    description:
      'Creative storybook writing and professional page design for charming children’s books that ignite wonder in young readers.',
    deliverables: [
      'Lyrical narrative structuring & story editing',
      'Picture-book typography & layout pacing',
      'Print-ready spreads with bleed margins',
      'IngramSpark & Amazon KDP hardback sizing',
    ],
    idealFor: 'Storytellers, parents, and authors creating illustrated children’s literature.',
    icon: 'Palette',
    actionText: 'Explore Children’s Books',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'little-moments',
    title: 'Little Moments',
    category: 'Baby Journals',
    subtitle: 'Heirloom First-Year Keepsake Journal',
    description:
      'An intimate, cloth-bound baby journal featuring soft sage foil borders, delicate botanical leaf motifs, and prompts honoring the quiet first milestones of infancy.',
    specifications: [
      '96 interior pages on 140gsm archival ivory paper',
      'Foil-stamped hardcover linen spine',
      'Tailored photo placeholders & parent note sections',
    ],
    image: babyJournalImg,
    badge: 'Popular Keepsake',
  },
  {
    id: 'my-first-year',
    title: 'My First Year',
    category: 'Memory Books',
    subtitle: 'Comprehensive Baby Memory Chronicle',
    description:
      'A structured yet gentle milestone album tracing gestation through the first birthday celebration with dedicated monthly reflection spreads.',
    specifications: [
      'Custom watercolor floral chapter dividers',
      'Embossed keepsake envelope for hospital bracelets',
      'Ready for luxury print-on-demand or local boutique binding',
    ],
    image: heroImg,
    badge: 'Signature Series',
  },
  {
    id: 'the-thoughtful-founder',
    title: 'The Thoughtful Founder',
    category: 'eBooks',
    subtitle: 'Executive Leadership eBook & Guide',
    description:
      'Complete ghostwriting, chapter pacing, and digital typography for a modern business strategy eBook optimized for Kindle Paperwhite and tablet reading.',
    specifications: [
      '140-page manuscript with custom diagrams',
      'Reflowable EPUB 3.0 & interactive PDF editions',
      'Amazon KDP top 10 category formatting',
    ],
    image: ebookImg,
    badge: 'eBook Writing & Design',
  },
  {
    id: 'the-little-garden',
    title: 'The Little Garden',
    category: 'Children\'s Books',
    subtitle: 'Illustrated Botanical Storybook',
    description:
      'A whimsical nature tale structured with rhythmic prose and airy editorial typesetting designed to complement soft watercolor artwork.',
    specifications: [
      '32-page hardcover picture book format (8.5 × 8.5 in)',
      'Custom hand-lettered title typography',
      'IngramSpark and KDP print-ready PDF with CMYK calibration',
    ],
    image: childrenBookImg,
    badge: 'Storybook & Layout',
  },
  {
    id: 'our-family-story',
    title: 'Our Family Story',
    category: 'Keepsake Journals',
    subtitle: 'Multi-Generational Heritage Keepsake',
    description:
      'A bespoke family heirloom book documenting oral histories, vintage portrait scans, handwritten recipes, and treasured family lore.',
    specifications: [
      'Custom gold foil monogramming',
      'Layflat binding design for seamless two-page photo panoramas',
      'Personalized interview questionnaires included',
    ],
    image: keepsakeImg,
    badge: 'Custom Heirloom',
  },
  {
    id: 'letters-to-my-baby',
    title: 'Letters to My Baby',
    category: 'Baby Journals',
    subtitle: 'Guided Motherhood Reflection Journal',
    description:
      'A soothing, meditative writing journal designed for mothers and fathers to pen letters to their child throughout pregnancy and early childhood.',
    specifications: [
      'Fountain pen friendly 120gsm unlined & lined leaves',
      'Soft champagne gold ribbon page divider',
      'Minimalist typography with generous negative space',
    ],
    image: babyJournalImg,
  },
  {
    id: 'a-journey-of-memories',
    title: 'A Journey of Memories',
    category: 'Keepsake Journals',
    subtitle: 'Baptism & Christening Commemorative Book',
    description:
      'An understated ceremonial keepsake celebrating faith, godparents, blessing inscriptions, and family dedication memories.',
    specifications: [
      'Neutral oat linen cover with debossed cross and wreath',
      'Dedicated guest sign-in & godparent benediction pages',
      'Archival acid-free paper preservation specs',
    ],
    image: keepsakeImg,
    badge: 'Ceremonial',
  },
  {
    id: 'the-creative-compass',
    title: 'The Creative Compass',
    category: 'Covers & Interiors',
    subtitle: 'Editorial Nonfiction Book Design',
    description:
      'Interior typography styling, grid layouts, drop caps, and minimalist dust-jacket cover design for an independent creative publisher.',
    specifications: [
      'Custom typographical grid system using Cormorant Garamond',
      'Refined chapter openers and running headers',
      'Print-ready wrap cover with barcode placement',
    ],
    image: ebookImg,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Share Your Idea',
    description:
      'Tell us about your book, journal, audience, or keepsake idea. We discuss your vision, preferred aesthetics, scope, and timeline.',
  },
  {
    step: '02',
    title: 'Plan & Create',
    description:
      'We develop the concept, outline, layout structure, typography hierarchy, and visual direction tailored to your project.',
  },
  {
    step: '03',
    title: 'Refine Together',
    description:
      'Review initial drafts and mockups. We incorporate your thoughtful feedback and make revisions until every page feels right.',
  },
  {
    step: '04',
    title: 'Receive Your Finished Book',
    description:
      'Get polished, professionally prepared files ready for publishing on Amazon KDP, printing with high-end bookbinders, or sharing digitally.',
  },
];

export const WHY_US_PILLARS = [
  {
    title: 'Personalized Approach',
    description:
      'Every project begins with your unique goals. We never use cookie-cutter formulas or generic templates.',
  },
  {
    title: 'Attention to Detail',
    description:
      'From optical kerning and margin proportion to paper weight considerations and page rhythm, every micro-detail is crafted with intention.',
  },
  {
    title: 'Creative + Professional',
    description:
      'We combine warm artistic storytelling with the technical rigor of production-ready publishing standards.',
  },
  {
    title: 'Made With Care',
    description:
      'Meaningful projects—whether an author’s life work or a family’s baby memories—deserve thoughtful, dedicated execution.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'The final baby journal felt personal, elegant, and beautifully organized. Every little detail made a difference—from the soft botanical accents to the thoughtful milestone prompts.',
    clientName: 'Sample Client',
    projectType: 'Baby Journal Project',
    location: 'United States',
  },
  {
    id: 'test-2',
    quote:
      'The book design gave our original idea a completely professional presentation. Our eBook formatted flawlessly on Kindle and looked like a work from a high-end publishing house.',
    clientName: 'Sample Client',
    projectType: 'eBook Design Project',
    location: 'United Kingdom',
  },
  {
    id: 'test-3',
    quote:
      'Working on our family memory book was effortless. Guggu Creations took our fragmented stories and turned them into a timeless keepsake that our children will cherish.',
    clientName: 'Sample Client',
    projectType: 'Keepsake Journal Project',
    location: 'Canada',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What types of books do you create?',
    answer:
      'We specialize in eBooks (both writing and interior/cover design), baby journals, baby memory books, personalized keepsake journals, baptism and christening books, and children’s storybook layouts. Whether you are an independent author or a parent preserving family memories, we tailor each project to your exact vision.',
  },
  {
    id: 'faq-2',
    question: 'Can you write and design an eBook from an idea?',
    answer:
      'Yes. If you have an initial concept, outline, voice notes, or bullet points, we can guide you through full ghostwriting, structuring, editing, interior formatting, and cover design to deliver a complete, publication-ready eBook.',
  },
  {
    id: 'faq-3',
    question: 'Can baby journals and memory books be personalized?',
    answer:
      'Every baby journal or keepsake we craft can include personalized names, birth statistics, dedication messages, custom chapter prompts, family photos, and bespoke color palettes reflecting your aesthetic.',
  },
  {
    id: 'faq-4',
    question: 'Can I request revisions?',
    answer:
      'Revisions are built into every project phase. We provide progress proofs for structure, sample chapter layouts, and final files so you can review and suggest refinements until you are thoroughly satisfied.',
  },
  {
    id: 'faq-5',
    question: 'What file formats do I receive?',
    answer:
      'Depending on your package, you receive publication-ready files: print-ready PDF with CMYK color profiles, crop marks, and bleeds; reflowable EPUB and MOBI files for Amazon Kindle and Apple Books; and high-resolution JPEG/PNG covers.',
  },
  {
    id: 'faq-6',
    question: 'Can you design books for Amazon KDP and IngramSpark?',
    answer:
      'Yes! We follow exact Amazon KDP and IngramSpark technical specifications, ensuring accurate spine widths, barcode areas, gutter margins, paper thicknesses, and interior bleed configurations so your upload is accepted without errors.',
  },
  {
    id: 'faq-7',
    question: 'How do I start a project?',
    answer:
      'Simply fill out our project inquiry form below or click "Start Your Project". Tell us about your concept, timeline, and goals. We will review your requirements and respond within 1-2 business days with a tailored proposal.',
  },
  {
    id: 'faq-8',
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope. A custom baby journal or book layout design generally takes 2 to 3 weeks, while comprehensive ghostwritten eBooks typically range between 4 to 8 weeks. We will provide an exact timeline during our initial consultation.',
  },
];
