import { ArrowRight, BookOpen, Check, Tablet, Compass } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface FeaturedEbookProps {
  onDiscussEbook: () => void;
}

export function FeaturedEbook({ onDiscussEbook }: FeaturedEbookProps) {
  const highlights = [
    {
      title: 'Editorial Ghostwriting',
      desc: 'Developing chapters, tone, pacing, and comprehensive narrative structure.',
    },
    {
      title: 'Amazon KDP & Apple Books',
      desc: 'Validated EPUB and mobi files that format seamlessly across all e-readers.',
    },
    {
      title: 'Refined Typography & Grids',
      desc: 'Balanced margins, drop-caps, callout boxes, and readable hierarchy.',
    },
    {
      title: 'Print-Ready PDF Editions',
      desc: 'Formatted with proper trim sizes, gutters, bleeds, and CMYK cover wraps.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8F5EF] relative paper-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Highlights */}
          <div className="lg:col-span-6 flex flex-col text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-3">
              <Compass className="w-3.5 h-3.5 text-[#C9AE7A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
                DIGITAL PUBLISHING &amp; AUTHOR SERVICES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] leading-[1.2] tracking-tight mb-5 font-normal">
              Your Ideas, Professionally Shaped.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] mb-8 font-normal">
              A strong book begins with a clear idea. We help transform concepts, notes, stories,
              and rough drafts into polished digital books with thoughtful writing and professional
              design that stands proudly next to major publishing houses.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Check className="w-4 h-4 text-[#C9AE7A] shrink-0" />
                    <h3 className="font-sans text-sm font-semibold text-[#292824]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#57554E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                id="featured-ebook-cta"
                onClick={onDiscussEbook}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#292824] text-[#FFFDF9] text-base font-medium transition-all duration-300 hover:bg-[#3D3B36] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824]"
              >
                <span>Discuss Your eBook</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#C9AE7A]" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Workspace Mockup */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative rounded-2xl p-2 sm:p-3 bg-[#FFFDF9] border border-[#E8E2DA] shadow-[0_8px_30px_rgba(41,40,36,0.06)] group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={ASSET_IMAGES.ebook}
                  alt="Modern eBook typography and digital publishing mockup"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Floating Format Badge */}
              <div className="absolute top-6 left-6 bg-[#292824]/90 text-[#FFFDF9] backdrop-blur-sm py-2 px-4 rounded-lg text-xs flex items-center gap-2 border border-white/10 shadow-md">
                <Tablet className="w-3.5 h-3.5 text-[#C9AE7A]" />
                <span className="font-medium tracking-wide">Kindle, iPad &amp; Print Ready</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
