import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenInquiry: (initialService?: string) => void;
}

export function Header({ onOpenInquiry }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Baby Journals', href: '#baby-journals' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#E8E2DA] shadow-[0_2px_12px_rgba(41,40,36,0.03)] py-3.5 sm:py-4'
          : 'bg-[#F8F5EF]/60 backdrop-blur-sm border-b border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824] rounded-lg transition-transform duration-200 hover:opacity-95"
          aria-label="Guggu Creations Home"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium tracking-normal text-[#57554E]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="transition-colors duration-200 hover:text-[#292824] relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9AE7A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="header-start-project-btn"
            onClick={() => onOpenInquiry()}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#292824] text-[#FFFDF9] text-sm font-medium transition-all duration-200 hover:bg-[#3D3B36] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824] focus-visible:ring-offset-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#C9AE7A]" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#292824] hover:bg-[#F2ECE2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-b border-[#E8E2DA] bg-[#F8F5EF] px-5 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-base font-medium text-[#292824] hover:text-[#C9AE7A] py-2 px-1 border-b border-[#F2ECE2] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                id="mobile-start-project-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#292824] text-[#FFFDF9] text-base font-medium shadow-md hover:bg-[#3D3B36] transition-colors"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#C9AE7A]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
