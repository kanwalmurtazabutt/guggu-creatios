import { useState, useEffect, FormEvent } from 'react';
import { X, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { BRAND } from '../data/content';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function ProjectInquiryModal({
  isOpen,
  onClose,
  preselectedService = 'Baby Journal',
}: ProjectInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Baby Journal',
    budget: '$250–$500',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your name and email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292824]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-inquiry-title"
    >
      <div
        className="relative w-full max-w-xl bg-[#FFFDF9] rounded-2xl border border-[#E8E2DA] shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#57554E] hover:bg-[#F2ECE2] hover:text-[#292824] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#EBF0E8] text-[#A8B39F] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 id="modal-inquiry-title" className="font-serif text-3xl text-[#292824] font-normal">
              Inquiry Received!
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#57554E] leading-relaxed max-w-md mx-auto">
              Thank you for sharing your project for <strong>{formData.service}</strong>. We will review
              your requirements and write to <strong>{formData.email}</strong> with next steps.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#292824] text-[#FFFDF9] text-sm font-medium hover:bg-[#3D3B36] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C9AE7A] font-medium mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Start Your Project</span>
              </div>
              <h2 id="modal-inquiry-title" className="font-serif text-2xl sm:text-3xl text-[#292824] font-normal">
                Tell Us About Your Vision
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#57554E] mt-1">
                Let us know what you would like to create with Guggu Creations.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8F5EF] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="modal-email"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1"
                  >
                    Your Email *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8F5EF] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-service"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1"
                  >
                    Project Type
                  </label>
                  <select
                    id="modal-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8F5EF] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824]"
                  >
                    <option value="Baby Journal">Baby Journal</option>
                    <option value="Baby Memory Book">Baby Memory Book</option>
                    <option value="eBook Writing">eBook Writing</option>
                    <option value="eBook Design">eBook Design</option>
                    <option value="Personalized Keepsake">Personalized Keepsake</option>
                    <option value="Children’s Book">Children’s Book</option>
                    <option value="Baptism Keepsake">Baptism Keepsake</option>
                    <option value="Other">Other Custom Book</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="modal-budget"
                    className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1"
                  >
                    Budget Range
                  </label>
                  <select
                    id="modal-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8F5EF] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824]"
                  >
                    <option value="Under $100">Under $100</option>
                    <option value="$100–$250">$100–$250</option>
                    <option value="$250–$500">$250–$500</option>
                    <option value="$500+">$500+</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-details"
                  className="block text-xs font-sans font-medium uppercase tracking-wider text-[#292824] mb-1"
                >
                  Notes &amp; Project Description
                </label>
                <textarea
                  id="modal-details"
                  rows={3}
                  placeholder="Share any details about dates, style preferences, story drafts, or questions..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#F8F5EF] border border-[#E8E2DA] text-sm text-[#292824] focus:outline-none focus:border-[#292824] resize-y"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#57554E]">
                  Or email directly: {BRAND.email}
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#292824] text-[#FFFDF9] text-sm font-medium hover:bg-[#3D3B36] transition-colors disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9AE7A]" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
