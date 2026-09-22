import { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
}

export function PortfolioSection({ onSelectProject }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Baby Journals',
    'Memory Books',
    'eBooks',
    'Keepsake Journals',
    'Children\'s Books',
    'Covers & Interiors',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#FFFDF9] border-y border-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
              OUR PORTFOLIO
            </span>
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-4 font-normal">
            Selected Work
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-2xl mx-auto font-normal">
            A collection of book concepts, journals, keepsakes, and creative publishing projects
            tailored for international authors and families.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#292824] text-[#FFFDF9] shadow-sm'
                  : 'bg-[#F2ECE2] text-[#57554E] hover:bg-[#E8E2DA] hover:text-[#292824]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-[#F8F5EF] rounded-xl border border-[#E8E2DA] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(41,40,36,0.08)] hover:border-[#B8AA99]"
            >
              {/* Project Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2ECE2]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Category / Featured Badge */}
                {project.badge && (
                  <span className="absolute top-3.5 left-3.5 bg-[#FFFDF9]/95 backdrop-blur-xs text-[#292824] border border-[#E8E2DA] text-[10.5px] font-sans font-medium px-2.5 py-1 rounded-md shadow-xs">
                    {project.badge}
                  </span>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#292824]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFFDF9] text-[#292824] text-xs font-medium px-3.5 py-1.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C9AE7A]" />
                  </span>
                </div>
              </div>

              {/* Project Metadata */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-sans font-medium tracking-wide uppercase text-[#A8B39F]">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#B8AA99] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#292824]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#292824] mb-1.5 font-normal">
                    {project.title}
                  </h3>
                  <p className="text-xs font-sans text-[#57554E] mb-3 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#57554E] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8E2DA]/70 flex items-center gap-1.5 text-[11px] text-[#57554E]">
                  <BookOpen className="w-3.5 h-3.5 text-[#C9AE7A]" />
                  <span>Custom Typography &amp; Binding Specs</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
