import { HeartHandshake, Eye, Sparkles, Shield } from 'lucide-react';
import { WHY_US_PILLARS } from '../data/content';

export function WhyUs() {
  const icons = [HeartHandshake, Eye, Sparkles, Shield];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] border-y border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
              WHY CHOOSE OUR STUDIO
            </span>
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-4 font-normal">
            Thoughtful Work. Beautiful Results.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-2xl mx-auto font-normal">
            We believe that books and journals hold life’s most significant stories and memories.
            Here is what guides our craft on every project.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {WHY_US_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.title}
                className="bg-[#F8F5EF] rounded-xl p-7 border border-[#E8E2DA] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#B8AA99]"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] flex items-center justify-center mb-5 text-[#C9AE7A]">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#292824] mb-3 font-normal">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-[#57554E] leading-[1.65]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2DA]/60 flex items-center gap-1.5 text-xs text-[#A8B39F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A8B39F]" />
                  <span>Dedicated craft</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
