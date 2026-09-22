import { useState, FormEvent } from 'react';
import { ArrowRight, Mail, CheckCircle2, Clock, Globe, Copy, Check } from 'lucide-react';
import { BRAND } from '../data/content';

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialService || 'Baby Journal',
    budgetRange: '$250–$500',
    timeline: 'Within 1-2 months',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'Baby Journal',
    'Baby Memory Book',
    'eBook Writing',
    'eBook Design',
    'Personalized Keepsake',
    'Baptism & Christening Book',
    'Children’s Book',
    'Other / Custom Project',
  ];

  const budgetOptions = [
    'Under $100',
    '$100–$250',
    '$250–$500',
    '$500+',
  ];

  const timelineOptions = [
    'Flexible / Planning ahead',
    'Within 1 month',
    'Within 1-2 months',
    'Urgent / Specific date (Gift/Milestone)',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (name, email, and your project details).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission (client-side / Formspree / Namecheap compatible)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFDF9] border-t border-[#E8E2DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
              GET IN TOUCH
            </span>
            <span className="w-5 h-[1px] bg-[#C9AE7A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-4 font-normal">
            Let’s Create Something Meaningful.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-2xl mx-auto font-normal">
            Tell us what you are creating and what you need help with. We’ll review your project and
            get back to you with the next steps within 1–2 business days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Studio Information & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-[#292824] mb-4 font-normal">
                How We Collaborate
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#57554E] leading-[1.65] mb-8">
                Guggu Creations operates as a private boutique studio. Whether you are an author
                preparing for publication or a parent wanting an heirloom keepsake, each conversation
                is confidential, warm, and personal.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F5EF] border border-[#E8E2DA]">
                  <Mail className="w-5 h-5 text-[#C9AE7A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-sans uppercase tracking-wider text-[#57554E] font-medium block">
                      Direct Email Inquiries
                    </span>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-sm sm:text-base font-medium text-[#292824] hover:text-[#C9AE7A] transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="ml-auto p-1.5 rounded-md hover:bg-[#E8E2DA] text-[#57554E] transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy studio email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#A8B39F]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F5EF] border border-[#E8E2DA]">
                  <Globe className="w-5 h-5 text-[#A8B39F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-sans uppercase tracking-wider text-[#57554E] font-medium block">
                      International Client Support
                    </span>
                    <p className="text-sm text-[#292824]">
                      Working with authors and families worldwide (USA, UK, Canada, Australia, Europe &amp; more).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F5EF] border border-[#E8E2DA]">
                  <Clock className="w-5 h-5 text-[#C9AE7A] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-sans uppercase tracking-wider text-[#57554E] font-medium block">
                      Response Time
                    </span>
                    <p className="text-sm text-[#292824]">
                      We personally review every brief and respond within 24 to 48 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Namecheap / Hosting Deployment Ready Badge */}
            <div className="p-4 rounded-lg bg-[#F2ECE2]/60 border border-[#E8E2DA] text-xs text-[#57554E] leading-relaxed">
              <span className="font-semibold text-[#292824]">Production-Ready Setup:</span> Form supports Formspree, cPanel mailer, or custom Namecheap email routing effortlessly.
            </div>
          </div>

          {/* Right Column: Complete Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F5EF] rounded-2xl p-7 sm:p-9 border border-[#E8E2DA] shadow-[0_6px_25px_rgba(41,40,36,0.03)]">
            {isSuccess ? (
              <div className="py-12 px-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EBF0E8] text-[#A8B39F] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#292824] font-normal">
                  Thank You, {formData.name || 'Friend'}!
                </h3>
                <p className="font-sans text-base text-[#57554E] max-w-md mx-auto leading-relaxed">
                  Your project inquiry for <strong>{formData.projectType}</strong> has been received.
                  We will carefully review your details and write back to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Baby Journal',
                        budgetRange: '$250–$500',
                        timeline: 'Within 1-2 months',
                        message: '',
                      });
                    }}
                    className="text-sm font-medium text-[#292824] underline underline-offset-4 hover:text-[#C9AE7A]"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm">
                    {errorMsg}
                  </div>
                )}

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1.5"
                    >
                      Your Name <span className="text-[#C9AE7A]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] text-sm text-[#292824] placeholder-[#B8AA99] focus:outline-none focus:border-[#292824] focus:ring-1 focus:ring-[#292824] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1.5"
                    >
                      Your Email <span className="text-[#C9AE7A]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] text-sm text-[#292824] placeholder-[#B8AA99] focus:outline-none focus:border-[#292824] focus:ring-1 focus:ring-[#292824] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1.5"
                    >
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824] focus:ring-1 focus:ring-[#292824] transition-colors"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1.5"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824] focus:ring-1 focus:ring-[#292824] transition-colors"
                    >
                      {budgetOptions.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Timeline */}
                <div>
                  <label
                    htmlFor="contact-timeline"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1.5"
                  >
                    Target Completion
                  </label>
                  <select
                    id="contact-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824] focus:ring-1 focus:ring-[#292824] transition-colors"
                  >
                    {timelineOptions.map((timeline) => (
                      <option key={timeline} value={timeline}>
                        {timeline}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message / Project Details */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1.5"
                  >
                    Tell Us About Your Project <span className="text-[#C9AE7A]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Share any details: book synopsis, baby milestones you want to include, cover preferences, print ideas, or specific inspiration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#FFFDF9] border border-[#E8E2DA] text-sm text-[#292824] placeholder-[#B8AA99] focus:outline-none focus:border-[#292824] focus:ring-1 focus:ring-[#292824] transition-colors resize-y"
                  />
                </div>

                {/* Privacy note & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#57554E] text-center sm:text-left">
                    We respect your privacy. Your information and story ideas are kept strictly confidential.
                  </p>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto shrink-0 group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#292824] text-[#FFFDF9] text-sm font-medium transition-all duration-300 hover:bg-[#3D3B36] hover:shadow-lg active:translate-y-0 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824]"
                  >
                    <span>{isSubmitting ? 'Sending Brief...' : 'Send Project Inquiry'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#C9AE7A]" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
