import { ArrowRight, PenTool, BookOpen, Heart, Sparkles, BookMarked, Palette, Check } from 'lucide-react';
import { SERVICES } from '../data/content';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-[#C9AE7A]" strokeWidth={1.75} />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#A8B39F]" strokeWidth={1.75} />;
      case 'HeartHandshake':
        return <Heart className="w-5 h-5 text-[#C9AE7A]" strokeWidth={1.75} />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#A8B39F]" strokeWidth={1.75} />;
      case 'BookMarked':
        return <BookMarked className="w-5 h-5 text-[#C9AE7A]" strokeWidth={1.75} />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#A8B39F]" strokeWidth={1.75} />;
      default:
        return <BookOpen className="w-5 h-5 text-[#C9AE7A]" strokeWidth={1.75} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8F5EF] relative paper-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
              WHAT WE CREATE
            </span>
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-4 font-normal">
            Creative Services Designed Around Your Story.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-2xl mx-auto font-normal">
            Bespoke writing, interior typography, and handcrafted book design crafted for authors,
            families, and meaningful celebrations worldwide.
          </p>
        </div>

        {/* Services Grid: 3-column Desktop, 2-column Tablet, 1-column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FFFDF9] rounded-xl p-7 sm:p-8 border border-[#E8E2DA] shadow-[0_3px_15px_rgba(41,40,36,0.03)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(41,40,36,0.06)] hover:border-[#B8AA99]"
            >
              <div>
                {/* Header with Icon & Category badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-lg bg-[#F2ECE2] border border-[#E8E2DA] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#FFFDF9] group-hover:border-[#C9AE7A]/40">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-sans font-medium tracking-wide uppercase text-[#57554E] bg-[#F2ECE2]/80 px-2.5 py-1 rounded-md">
                    {service.tagline}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl text-[#292824] mb-3 font-normal transition-colors group-hover:text-[#292824]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm sm:text-[15px] text-[#57554E] leading-[1.65] mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-4 border-t border-[#F2ECE2] mb-6 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#57554E] font-medium block mb-2">
                    Included in service:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#57554E]">
                      <Check className="w-3.5 h-3.5 text-[#A8B39F] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#292824] pt-2 border-t border-transparent group-hover:text-[#C9AE7A] transition-colors self-start"
              >
                <span>{service.actionText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
