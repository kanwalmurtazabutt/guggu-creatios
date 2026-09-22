import { ArrowRight } from 'lucide-react';

interface BottomCTAProps {
  onOpenInquiry: () => void;
  onExploreServices: () => void;
}

export function BottomCTA({ onOpenInquiry, onExploreServices }: BottomCTAProps) {
  return (
    <section className="relative py-20 lg:py-24 bg-[#292824] text-[#F8F5EF] overflow-hidden">
      {/* Subtle Botanical Vector Accents in the Background */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.06] pointer-events-none transform translate-x-1/4 -translate-y-1/4"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 20C90 70 40 90 20 100C70 110 90 160 100 180C110 130 160 110 180 100C130 90 110 40 100 20Z"
          stroke="#FFFDF9"
          strokeWidth="1.5"
        />
        <circle cx="100" cy="100" r="50" stroke="#FFFDF9" strokeWidth="1" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.05] pointer-events-none transform -translate-x-1/4 translate-y-1/4"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M30 170C50 120 100 100 170 30"
          stroke="#C9AE7A"
          strokeWidth="1.5"
        />
        <circle cx="90" cy="110" r="8" fill="#A8B39F" />
        <circle cx="130" cy="70" r="6" fill="#A8B39F" />
      </svg>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-[11px] uppercase tracking-[0.24em] text-[#C9AE7A] font-semibold block mb-4">
          LET'S COLLABORATE
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F8F5EF] tracking-tight mb-5 font-normal">
          Have a Book Idea in Mind?
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#B8AA99] max-w-xl mx-auto mb-10 leading-[1.7] font-light">
          Let’s turn your idea, story, or memories into something beautiful that you, your readers,
          or your family will treasure for generations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="bottom-cta-start-project"
            onClick={onOpenInquiry}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFFDF9] text-[#292824] text-base font-medium transition-all duration-300 hover:bg-[#F2ECE2] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFDF9]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#C9AE7A]" />
          </button>

          <button
            id="bottom-cta-explore-services"
            onClick={onExploreServices}
            className="text-sm font-sans text-[#B8AA99] hover:text-[#FFFDF9] py-2 px-4 transition-colors underline underline-offset-4 decoration-[#B8AA99]/50 hover:decoration-[#FFFDF9]"
          >
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
