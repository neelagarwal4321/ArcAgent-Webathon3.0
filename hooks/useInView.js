import { useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';

export function useInView(options = {}) {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { once: true, amount: 0.15, ...options });
  return [ref, isInView];
}
