import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function GlitchText404() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    tl.to(ref.current, { skewX: 10, duration: 0.05, ease: 'power1.inOut' })
      .to(ref.current, { skewX: -8, duration: 0.05 })
      .to(ref.current, { skewX: 0, duration: 0.05 })
      .to(ref.current, { opacity: 0.4, x: -6, duration: 0.05 })
      .to(ref.current, { opacity: 1, x: 0, duration: 0.05 })
      .to(ref.current, { opacity: 0.6, x: 4, duration: 0.05 })
      .to(ref.current, { opacity: 1, x: 0, duration: 0.1 });
  }, []);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="font-syne font-extrabold text-white block"
        style={{ fontSize: 'clamp(120px, 20vw, 240px)', lineHeight: 1, letterSpacing: '-0.04em' }}
      >
        404
      </span>
    </div>
  );
}
