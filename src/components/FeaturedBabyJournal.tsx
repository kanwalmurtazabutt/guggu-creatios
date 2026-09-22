import { ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { ASSET_IMAGES } from '../data/content';

interface FeaturedBabyJournalProps {
  onStartBabyJournal: () => void;
}

export function FeaturedBabyJournal({ onStartBabyJournal }: FeaturedBabyJournalProps) {
  const features = [
    'First-year memories & developmental milestones',
    'Milestone pages with thoughtful prompts',
    'Family stories, heritage & grandparent reflections',
    'Dedicated photo spaces for ultrasound & portraits',
    'Guided letters to baby for each stage of growth',
    'Personalized name, birth details & gold foil debossing',
  ];

  return (
    <section
      id="baby-journals"
      className="py-20 lg:py-28 bg-[#FFFDF9] border-y border-[#E8E2DA] relative overflow-hidden"
    >
      {/* Delicate botanical background gradient */}
      <div
        className="absolute top-0 left-0 w-96 h-96 bg-[#EBF0E8]/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4EEDF]/50 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Large Premium Baby Journal Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl p-2 sm:p-3 bg-[#F8F5EF] border border-[#E8E2DA] shadow-[0_8px_30px_rgba(41,40,36,0.06)] group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={ASSET_IMAGES.babyJournal}
                  alt="Heirloom baby memory book and keepsake journal"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Floating heirloom badge */}
              <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:right-6 bg-[#FFFDF9]/95 backdrop-blur-md p-4 rounded-xl border border-[#E8E2DA] shadow-lg max-w-xs text-left">
                <div className="flex items-center gap-1.5 text-[#C9AE7A] mb-1">
                  <Heart className="w-3.5 h-3.5 fill-[#C9AE7A]" />
                  <span className="text-[11px] font-sans uppercase tracking-wider font-semibold text-[#292824]">
                    Heirloom Quality
                  </span>
                </div>
                <p className="text-xs text-[#57554E] leading-relaxed">
                  Printed on 140gsm acid-free archival paper with cloth-bound hardcover spine.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Emotional Editorial Story & Features */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9AE7A]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
                BABY MEMORY COLLECTION
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] leading-[1.2] tracking-tight mb-5 font-normal">
              Little Moments Deserve to Be Remembered.
            </h2>

            {/* Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] mb-8 font-normal">
              Create a beautiful place for first smiles, first steps, family stories, photographs,
              milestones, wishes, and memories that become more precious with time. Each journal is
              crafted with understated elegance, gentle botanical motifs, and timeless typography.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-9">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#292824] leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                id="featured-baby-journal-cta"
                onClick={onStartBabyJournal}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#292824] text-[#FFFDF9] text-base font-medium transition-all duration-300 hover:bg-[#3D3B36] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824]"
              >
                <span>Create a Baby Journal</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#C9AE7A]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
