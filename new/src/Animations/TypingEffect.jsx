/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingEffect = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <p className="font-Syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px]">
      <AnimatePresence>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </p>
  );
};

export default TypingEffect;
