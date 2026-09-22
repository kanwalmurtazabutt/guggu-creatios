import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedBabyJournal } from './components/FeaturedBabyJournal';
import { FeaturedEbook } from './components/FeaturedEbook';
import { PortfolioSection } from './components/PortfolioSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { BottomCTA } from './components/BottomCTA';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { LegalModal } from './components/LegalModal';
import { PortfolioItem } from './types';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('Baby Journal');
  const [activePortfolioItem, setActivePortfolioItem] = useState<PortfolioItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenInquiry = (serviceName: string = 'Baby Journal') => {
    setSelectedServiceForInquiry(serviceName);
    setInquiryModalOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartSimilarProject = (category: string) => {
    handleOpenInquiry(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#292824] selection:bg-[#C9AE7A]/30 selection:text-[#292824]">
      {/* Sticky Navigation Header */}
      <Header onOpenInquiry={() => handleOpenInquiry('General Book Project')} />

      <main className="flex-1">
        {/* 1. Hero Section (85-92vh) */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry('General Project')}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Trust / Intro Section */}
        <TrustIntro />

        {/* 3. Core Services Grid */}
        <ServicesSection onSelectService={(serviceTitle) => handleOpenInquiry(serviceTitle)} />

        {/* 4. Featured Baby Journal Section (Emotional Split Layout) */}
        <FeaturedBabyJournal
          onStartBabyJournal={() => handleOpenInquiry('Baby Journal')}
        />

        {/* 5. Featured eBook Publishing Section (Editorial Split Layout) */}
        <FeaturedEbook
          onDiscussEbook={() => handleOpenInquiry('eBook Writing & Design')}
        />

        {/* 6. Selected Work / Portfolio Gallery */}
        <PortfolioSection
          onSelectProject={(project) => setActivePortfolioItem(project)}
        />

        {/* 7. How It Works (4-Step Process) */}
        <HowItWorks />

        {/* 8. Why Guggu Creations (4 Pillars) */}
        <WhyUs />

        {/* 9. Testimonials (Clearly Marked Sample Projects) */}
        <Testimonials />

        {/* 10. Bottom Full-Width Charcoal CTA Banner */}
        <BottomCTA
          onOpenInquiry={() => handleOpenInquiry('General Project')}
          onExploreServices={handleExploreServices}
        />

        {/* 11. Complete Interactive Contact Form */}
        <ContactSection initialService={selectedServiceForInquiry} />

        {/* 12. Frequently Asked Questions Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Modals */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedService={selectedServiceForInquiry}
      />

      <ProjectDetailModal
        project={activePortfolioItem}
        onClose={() => setActivePortfolioItem(null)}
        onStartSimilar={handleStartSimilarProject}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
