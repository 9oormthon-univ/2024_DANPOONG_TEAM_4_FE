import { IoMdClose } from 'react-icons/io';

import LazyImage from '@shared/ui/LazyImage';
import TagButton from '@shared/ui/TagButton';

function ProductCard({ name, unit, price }) {
  return (
    <section className='grid grid-cols-3'>
      <div className='col-span-1 mr-6'>
        <LazyImage />
      </div>
      <div className='col-span-2'>
        <div className='flex justify-between w-full'>
          <span className='space-y-2'>
            <p className='text-lg text-text200'>{name}</p>
            <p className='text-text100'>{unit}, Price</p>
          </span>
          <IoMdClose color='#B3B3B3' size={20} />
        </div>
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-x-4'>
            <TagButton label='-' />
            <p>1</p>
            <TagButton label='+' textColor='#53B175' />
          </div>
          <p>{price}원</p>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
