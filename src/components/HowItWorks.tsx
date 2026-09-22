import { HOW_IT_WORKS_STEPS } from '../data/content';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8F5EF] relative paper-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
              SIMPLE 4-STEP PROCESS
            </span>
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-4 font-normal">
            From Idea to Beautiful Book.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-2xl mx-auto font-normal">
            A structured, collaborative publishing path designed to make the creation of your book
            or memory journal enjoyable and seamless.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-[#FFFDF9] rounded-xl p-7 border border-[#E8E2DA] shadow-[0_4px_20px_rgba(41,40,36,0.02)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#B8AA99]"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-[#C9AE7A]">
                    {step.step}
                  </span>
                  <span className="w-8 h-[1px] bg-[#E8E2DA]" />
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#292824] mb-3 font-normal">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans text-sm text-[#57554E] leading-[1.65]">
                  {step.description}
                </p>
              </div>

              {/* Progress indicator bar at bottom */}
              <div className="pt-6 mt-6 border-t border-[#F2ECE2] flex items-center justify-between text-[11px] text-[#A8B39F] font-sans font-medium uppercase tracking-wider">
                <span>Phase {idx + 1} of 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9AE7A]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
