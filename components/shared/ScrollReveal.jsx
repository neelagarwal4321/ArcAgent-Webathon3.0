import { motion } from 'framer-motion';

export default function ScrollReveal({ children, delay = 0, direction = 'up', className = '', once = true }) {
  const variants = {
    up:    { hidden: { opacity: 0, y: 24 },  visible: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 24 },  visible: { opacity: 1, x: 0 } },
    fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  };

  const v = variants[direction] || variants.up;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={v}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
