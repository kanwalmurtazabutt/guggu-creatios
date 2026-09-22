import { Mail, Globe, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { BRAND } from '../data/content';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const exploreLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Studio', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Baby Journals', href: '#baby-journals' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'eBook Writing', href: '#services' },
    { name: 'eBook Design & Layout', href: '#services' },
    { name: 'Baby Milestone Journals', href: '#baby-journals' },
    { name: 'Baby Memory Books', href: '#baby-journals' },
    { name: 'Personalized Keepsakes', href: '#services' },
    { name: 'Baptism & Christening Books', href: '#services' },
    { name: 'Children’s Storybooks', href: '#services' },
  ];

  return (
    <footer className="bg-[#292824] text-[#F8F5EF] pt-16 sm:pt-20 pb-12 border-t border-[#3D3B36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-[#3D3B36]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />
            
            <p className="font-serif italic text-lg text-[#C9AE7A] font-light">
              "{BRAND.tagline}"
            </p>

            <p className="font-sans text-sm text-[#B8AA99] max-w-sm leading-[1.7] font-light">
              Creative eBook writing, book design, baby journals, memory books, and personalized
              keepsakes crafted with warmth, intention, and editorial refinement.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#B8AA99]">
              <Globe className="w-4 h-4 text-[#A8B39F]" />
              <span>Worldwide remote creative publishing studio</span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#FFFDF9] mb-5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#B8AA99] hover:text-[#FFFDF9] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#FFFDF9] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#B8AA99] hover:text-[#FFFDF9] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Inquiries */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] font-sans font-semibold text-[#FFFDF9] mb-5">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-[#B8AA99]">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-[#FFFDF9] hover:text-[#C9AE7A] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C9AE7A]" />
                <span className="truncate">{BRAND.email}</span>
              </a>
              <p className="text-xs text-[#B8AA99] leading-relaxed">
                Send manuscript drafts, milestone outlines, or book concepts for review.
              </p>
              
              <div className="pt-3">
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs text-[#B8AA99] hover:text-[#FFFDF9] transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-[#C9AE7A]" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8AA99]">
          <p>© {new Date().getFullYear()} Guggu Creations. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#FFFDF9] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#FFFDF9] transition-colors"
            >
              Terms of Service
            </button>
            <a href="#contact" className="hover:text-[#FFFDF9] transition-colors">
              Contact
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
