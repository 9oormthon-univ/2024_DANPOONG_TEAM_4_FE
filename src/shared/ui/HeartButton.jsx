import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

function HeartButton({ store, isFavorite, onFavorite }) {
  return (
    <motion.button
      onClick={() => onFavorite(store)}
      className='flex items-center transition-all'
      whileTap={{ scale: 0.8 }}
    >
      {isFavorite ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <FaHeart color='#D9534F' />
        </motion.div>
      ) : (
        <FaRegHeart />
      )}
    </motion.button>
  );
}

export default HeartButton;
