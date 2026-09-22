export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  icon: string;
  actionText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'eBooks' | 'Baby Journals' | 'Memory Books' | 'Children\'s Books' | 'Keepsake Journals' | 'Covers & Interiors';
  subtitle: string;
  description: string;
  specifications: string[];
  image: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  projectType: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProjectInquiryData {
  name: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  details: string;
}
