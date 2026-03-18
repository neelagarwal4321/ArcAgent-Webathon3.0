import { useDemoModal } from '@/context/DemoModalContext';
import ScrollReveal from './ScrollReveal';

export default function CTABanner({ headline = 'Ready to automate your revenue lifecycle?', buttonText = 'Schedule a Demo →' }) {
  const { openModal } = useDemoModal();

  return (
    <section className="bg-primary page-section border-y border-white/10">
      <div className="page-container">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-syne font-semibold text-xl text-white text-center sm:text-left">
              {headline}
            </p>
            <button
              onClick={openModal}
              className="shrink-0 bg-white text-primary font-figtree font-medium text-sm px-6 py-2.5 rounded-button hover:bg-surface-2 transition-colors"
            >
              {buttonText}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
