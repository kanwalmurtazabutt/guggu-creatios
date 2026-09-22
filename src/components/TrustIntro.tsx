import { Lightbulb, Layout, Heart } from 'lucide-react';

export function TrustIntro() {
  const trustPillars = [
    {
      icon: Lightbulb,
      title: 'Creative Thinking',
      description: 'Ideas transformed into meaningful, reader-ready book concepts with clear voice and structure.',
      color: 'text-[#C9AE7A]',
      bg: 'bg-[#F4EEDF]/70',
    },
    {
      icon: Layout,
      title: 'Beautiful Design',
      description: 'Clean, polished layouts with refined typography, balanced margins, and heirloom-grade visual rhythm.',
      color: 'text-[#A8B39F]',
      bg: 'bg-[#EBF0E8]/80',
    },
    {
      icon: Heart,
      title: 'Personal Attention',
      description: 'Every project is developed around your unique story and vision, with dedicated one-on-one collaboration.',
      color: 'text-[#C9AE7A]',
      bg: 'bg-[#F2ECE2]',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#F2ECE2]/45 border-y border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold block mb-3">
            Our Studio Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-5 font-normal">
            From First Idea to Finished Book.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-2xl mx-auto font-normal">
            Whether you are creating a personal keepsake, launching an eBook, documenting your
            family memories, or developing a children’s book, we combine thoughtful writing and
            refined design to create something you will be proud to share.
          </p>
        </div>

        {/* Three Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#FFFDF9] rounded-xl p-8 border border-[#E8E2DA] shadow-[0_4px_20px_rgba(41,40,36,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#B8AA99]"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${pillar.bg} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-6 h-6 ${pillar.color}`} strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#292824] mb-3 font-normal">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#57554E] leading-[1.6]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
