import { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292824]/65 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl border border-[#E8E2DA] shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#57554E] hover:bg-[#F2ECE2] hover:text-[#292824] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-[#C9AE7A] font-semibold">
          <Shield className="w-4 h-4" />
          <span>Guggu Creations Policy</span>
        </div>

        <h2 id="legal-modal-title" className="font-serif text-3xl text-[#292824] mb-6 font-normal">
          {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        </h2>

        <div className="font-sans text-sm text-[#57554E] space-y-4 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At Guggu Creations, we hold your personal stories, family photographs, and intellectual property with the utmost care and confidentiality.
              </p>
              <h3 className="font-serif text-lg text-[#292824] font-semibold pt-2">
                1. Information We Collect
              </h3>
              <p>
                When you contact us or submit an inquiry, we collect your name, email address, and project notes. This information is used solely to respond to your project requests and deliver your custom book or journal design.
              </p>
              <h3 className="font-serif text-lg text-[#292824] font-semibold pt-2">
                2. Manuscript &amp; Photo Confidentiality
              </h3>
              <p>
                Any draft manuscripts, family photographs, ultrasound scans, or personalized notes shared with our studio remain 100% your private property. We will never share, sell, or disclose your materials to third parties without your explicit prior written permission.
              </p>
              <h3 className="font-serif text-lg text-[#292824] font-semibold pt-2">
                3. Hosting &amp; Security
              </h3>
              <p>
                Our web platform is designed with static safety and secure standard SSL encryption, ensuring your communication with our team is protected.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Guggu Creations. By collaborating with our creative publishing studio, you agree to these fundamental project terms.
              </p>
              <h3 className="font-serif text-lg text-[#292824] font-semibold pt-2">
                1. Project Scopes &amp; Approvals
              </h3>
              <p>
                Each custom book design, ghostwriting, or baby journal commission follows a defined milestone process. You will receive draft proofs and revision opportunities prior to final file preparation.
              </p>
              <h3 className="font-serif text-lg text-[#292824] font-semibold pt-2">
                2. Intellectual Property Rights
              </h3>
              <p>
                Upon final payment, full copyright and usage rights for written eBooks, custom journals, and personalized print designs transfer to the client for publication or private family printing.
              </p>
              <h3 className="font-serif text-lg text-[#292824] font-semibold pt-2">
                3. Print &amp; Publishing Specifications
              </h3>
              <p>
                We provide print-ready PDFs formatted to industry standards (such as Amazon KDP, IngramSpark, or luxury bookbinders). Clients are responsible for choosing their preferred print vendor.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-[#E8E2DA] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#292824] text-[#FFFDF9] text-sm font-medium hover:bg-[#3D3B36] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
