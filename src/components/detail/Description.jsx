import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Description = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className='py-6 border-y'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={toggleOpen}
      >
        <p className='text-text200'>우리 상점은,</p>
        <motion.div
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className='mt-4 text-text100'>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Description;
