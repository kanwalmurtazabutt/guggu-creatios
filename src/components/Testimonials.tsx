import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F5EF] relative paper-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
              EXPERIENCE &amp; WORDS
            </span>
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-4 font-normal">
            Reflections on Working With Us.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-2xl mx-auto font-normal">
            Representative feedback illustrating our commitment to personal care, typesetting precision,
            and timeless keepsake design.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF9] rounded-xl p-8 border border-[#E8E2DA] shadow-[0_4px_20px_rgba(41,40,36,0.02)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#B8AA99]"
            >
              <div>
                <Quote className="w-7 h-7 text-[#C9AE7A]/60 mb-5" />
                <p className="font-serif text-lg text-[#292824] italic leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-[#F2ECE2] flex items-center justify-between">
                <div>
                  <h3 className="font-sans text-sm font-semibold text-[#292824]">
                    {item.clientName}
                  </h3>
                  <span className="text-xs text-[#A8B39F] font-medium block mt-0.5">
                    {item.projectType}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#57554E] bg-[#F2ECE2] px-2 py-0.5 rounded">
                  Sample Project
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
