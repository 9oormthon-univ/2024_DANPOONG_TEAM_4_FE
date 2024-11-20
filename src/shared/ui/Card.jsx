import Spacing from './Spacing';
import IconLabel from './IconLabel';
import LazyImage from './LazyImage';

function Card({ storeName, category, term, onClick = () => {} }) {
  return (
    <div
      className='flex flex-col gap-1 p-2 transition-all bg-white border shadow-md h-52 shrink-0 rounded-common hover:scale-95'
      onClick={onClick}
    >
      <LazyImage />
      <Spacing size={term ? 4 : 8} />
      <IconLabel label={storeName} />
      <p className='text-xs text-text100'>{category}</p>
      {term && <p className='text-xs text-text100'>{term}</p>}
    </div>
  );
}

export default Card;
