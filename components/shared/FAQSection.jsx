import AccordionItem from '../ui/AccordionItem';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from './ScrollReveal';

export default function FAQSection({ faqs = [], title = 'Frequently Asked Questions', dark = false }) {
  return (
    <section className={`page-section ${dark ? 'bg-bg-alt' : 'bg-bg-base'}`}>
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <SectionHeader heading={title} centered dark={dark} className="mb-10" />
          </ScrollReveal>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <AccordionItem title={faq.question} dark={dark}>
                  {faq.answer}
                </AccordionItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
