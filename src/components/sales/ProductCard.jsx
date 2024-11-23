import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

import LazyImage from '@shared/ui/LazyImage';
import TagButton from '@shared/ui/TagButton';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
} from '../../store/features/store-products-reducer';

function ProductCard({
  productId,
  count,
  name,
  unit,
  price,
  closeHandler,
  imageSrc,
}) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(count);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch(decreaseQuantity(productId));
    } else {
      toast.error('최소 하나 이상 담아야 합니다.');
    }
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
    dispatch(increaseQuantity(productId));
  };

  return (
    <section className='grid grid-cols-3'>
      <div className='col-span-1 mr-6'>
        <LazyImage imageSrc={imageSrc + '.jpg'} />
      </div>

      <div className='col-span-2'>
        <div className='flex justify-between w-full'>
          <span className='space-y-2'>
            <p className='text-lg text-text200'>{name}</p>
            <p className='text-text100'>{unit}, Price</p>
          </span>
          <IoMdClose color='#B3B3B3' size={20} onClick={closeHandler} />
        </div>

        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-x-4'>
            <TagButton width='46px' label='-' onClick={decrementQuantity} />
            <p>{quantity}</p>
            <TagButton
              width='46px'
              label='+'
              textColor='#53B175'
              onClick={incrementQuantity}
            />
          </div>

          <p>{price}원</p>
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
