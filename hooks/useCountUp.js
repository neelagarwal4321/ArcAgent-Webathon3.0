import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function useCountUp(target, duration = 1.5, trigger = true) {
  const ref = useRef(null);

  useEffect(() => {
    if (!trigger || !ref.current) return;
    const el = ref.current;
    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: target,
        duration,
        ease: 'expo.out',
        snap: { innerText: 1 },
        onUpdate() {
          el.innerText = Math.ceil(parseFloat(el.innerText));
        },
      }
    );
  }, [trigger, target, duration]);

  return ref;
}
