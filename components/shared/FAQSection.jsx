import AccordionItem from '../ui/AccordionItem';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from './ScrollReveal';

export default function FAQSection({ faqs = [], title = 'Frequently Asked Questions', dark = false }) {
  return (
    <section className={`py-section-md ${dark ? 'bg-bg-alt' : 'bg-bg-base'}`}>
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <SectionHeader heading={title} centered dark={dark} className="mb-10" />
        </ScrollReveal>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <AccordionItem title={faq.question} dark={dark}>
                {faq.answer}
              </AccordionItem>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
