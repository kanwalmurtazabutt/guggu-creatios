import { ArrowRight, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreServices: () => void;
}

export function Hero({ onOpenInquiry, onExploreServices }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] lg:min-h-[92vh] pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 flex items-center justify-center overflow-hidden paper-pattern"
    >
      {/* Decorative ambient background glows */}
      <div
        className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#EBF0E8]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/10 w-80 h-80 rounded-full bg-[#F4EEDF]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Copy, & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col text-left max-w-2xl">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#C9AE7A]" />
              <span className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#57554E] font-semibold">
                CREATIVE PUBLISHING &amp; BOOK DESIGN STUDIO
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-normal leading-[1.14] text-[#292824] tracking-tight mb-6">
              Turn Your Ideas &amp; Memories Into{' '}
              <span className="italic font-serif text-[#C9AE7A] font-normal">
                Beautiful Books.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] mb-8 max-w-xl font-normal">
              From professionally written eBooks to beautifully designed baby journals and
              personalized keepsakes, Guggu Creations brings meaningful ideas to life with care,
              creativity, and attention to every detail.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                id="hero-primary-cta"
                onClick={onOpenInquiry}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#292824] text-[#FFFDF9] text-base font-medium transition-all duration-300 hover:bg-[#3D3B36] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824] focus-visible:ring-offset-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#C9AE7A]" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-[#292824]/20 hover:border-[#292824] text-[#292824] text-base font-medium transition-all duration-300 hover:bg-[#F2ECE2] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824]"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Statement */}
            <div className="pt-4 border-t border-[#E8E2DA]/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-[13px] text-[#57554E]">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C9AE7A]" />
                <span className="font-medium text-[#292824]">Thoughtful design</span>
              </div>
              <span className="text-[#B8AA99]">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A8B39F]" />
                <span className="font-medium text-[#292824]">Professional quality</span>
              </div>
              <span className="text-[#B8AA99]">•</span>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#C9AE7A]" />
                <span className="font-medium text-[#292824]">Personalized service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Book Mockup Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Subtle organic backdrop geometry */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EBF0E8]/70 via-[#F2ECE2] to-[#F4EEDF]/50 rounded-2xl transform rotate-1 scale-98 -z-10 shadow-sm border border-[#E8E2DA]/60" />

            {/* Main Mockup Presentation */}
            <div className="relative w-full rounded-2xl p-2 sm:p-3 bg-[#FFFDF9] border border-[#E8E2DA] shadow-[0_12px_40px_rgba(41,40,36,0.08)] overflow-hidden group">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src={ASSET_IMAGES.hero}
                  alt="Guggu Creations luxury book and baby memory journal collection"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292824]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Editorial Badge (Bottom Left) */}
              <div className="absolute bottom-6 left-6 sm:bottom-7 sm:left-7 bg-[#FFFDF9]/95 backdrop-blur-md py-2 px-3.5 rounded-lg border border-[#E8E2DA] shadow-md flex items-center gap-2.5 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="w-2 h-2 rounded-full bg-[#C9AE7A]" />
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-wider text-[#57554E] font-medium leading-none">
                    Studio Collection
                  </p>
                  <p className="text-xs font-serif font-semibold text-[#292824] leading-tight mt-0.5">
                    eBooks &amp; Baby Keepsakes
                  </p>
                </div>
              </div>

              {/* Delicate Botanical Accent Badge (Top Right) */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-[#292824]/90 text-[#FFFDF9] backdrop-blur-sm py-1.5 px-3 rounded-full text-[11px] font-sans tracking-wide flex items-center gap-1.5 shadow-sm">
                <span className="text-[#C9AE7A]">★</span>
                <span>Bespoke Publishing</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
