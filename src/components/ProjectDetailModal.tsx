import { useEffect } from 'react';
import { X, ArrowRight, BookOpen, Check, Layers } from 'lucide-react';
import { PortfolioItem } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onStartSimilar: (projectCategory: string) => void;
}

export function ProjectDetailModal({
  project,
  onClose,
  onStartSimilar,
}: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292824]/65 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl border border-[#E8E2DA] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#F2ECE2] overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#FFFDF9]/90 backdrop-blur-xs text-[#292824] hover:bg-[#FFFDF9] transition-colors shadow-md"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 bg-[#292824]/85 text-[#FFFDF9] backdrop-blur-sm px-3 py-1 rounded-md text-xs font-sans">
            {project.category}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#C9AE7A] font-medium block mb-1">
              {project.subtitle}
            </span>
            <h2 id="portfolio-modal-title" className="font-serif text-3xl sm:text-4xl text-[#292824] font-normal">
              {project.title}
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#57554E] leading-relaxed">
            {project.description}
          </p>

          {/* Project Specifications */}
          <div className="p-5 rounded-xl bg-[#F8F5EF] border border-[#E8E2DA]">
            <div className="flex items-center gap-2 mb-3 text-xs font-sans uppercase tracking-wider text-[#292824] font-semibold">
              <Layers className="w-4 h-4 text-[#C9AE7A]" />
              <span>Project Specifications &amp; Craft Details</span>
            </div>
            <ul className="space-y-2">
              {project.specifications.map((spec, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-[#57554E]">
                  <Check className="w-4 h-4 text-[#A8B39F] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-[#E8E2DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#57554E]">
              <BookOpen className="w-4 h-4 text-[#C9AE7A]" />
              <span>Customizable for your family story or manuscript</span>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onStartSimilar(project.category);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#292824] text-[#FFFDF9] text-sm font-medium hover:bg-[#3D3B36] transition-colors"
            >
              <span>Inquire About This Style</span>
              <ArrowRight className="w-4 h-4 text-[#C9AE7A]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
