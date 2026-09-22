import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/content';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8F5EF] relative paper-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9AE7A]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#57554E] font-semibold">
              QUESTIONS &amp; ANSWERS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#292824] tracking-tight mb-4 font-normal">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#57554E] leading-[1.7] max-w-xl mx-auto font-normal">
            Everything you need to know about our book writing, design, formatting, and custom keepsake
            creation process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-[#FFFDF9] rounded-xl border border-[#E8E2DA] transition-all duration-200 overflow-hidden shadow-[0_2px_10px_rgba(41,40,36,0.02)]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292824]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#292824] font-normal leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#292824] text-[#FFFDF9]' : 'bg-[#F2ECE2] text-[#292824]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base font-sans text-[#57554E] leading-[1.7] border-t border-[#F2ECE2] animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions note */}
        <div className="mt-12 text-center p-6 rounded-xl bg-[#F2ECE2]/60 border border-[#E8E2DA]">
          <p className="text-sm text-[#57554E]">
            Have a custom inquiry or specific print specification?{' '}
            <a href="#contact" className="font-medium text-[#292824] underline underline-offset-4 hover:text-[#C9AE7A]">
              Write to us directly
            </a>{' '}
            and we will gladly answer any details.
          </p>
        </div>

      </div>
    </section>
  );
}
