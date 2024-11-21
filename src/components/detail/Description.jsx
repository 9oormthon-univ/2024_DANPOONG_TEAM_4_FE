import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Description = ({ title, subTitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={toggleOpen}
      >
        <span className='flex items-end gap-x-2'>
          <p className='text-text200'>{title}</p>
          {subTitle && <p className='text-xs text-text100'>{subTitle}</p>}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.2 }}
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
            <div className='mt-4'>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Description;
