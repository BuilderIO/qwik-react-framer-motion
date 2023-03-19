/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { motion } from 'framer-motion';

const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      backgroundColor: ['#ff008c', '#d309e1', '#9c1aff', '#7700ff', '#ff008c'],
      transition: { duration: 2 },
    }}
    className="h-52 w-52 rounded bg-green-500"
  />
);

export const FramerQwik = qwikify$(MyComponent);
