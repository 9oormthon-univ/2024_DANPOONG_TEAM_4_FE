import { faker } from '@faker-js/faker';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import Spacing from './Spacing';
import IconLabel from './IconLabel';

function Card({ storeName, category, term }) {
  return (
    <div className='flex flex-col gap-1 p-2 transition-all bg-white border shadow-md h-52 shrink-0 rounded-common hover:scale-95'>
      <LazyLoadImage
        src={faker.image.urlLoremFlickr({ category: 'store' })}
        alt='faker'
        effect='blur'
        className='h-[98px] w-[150px] rounded-common object-cover'
        wrapperClassName='flex justify-center items-center'
      />
      <Spacing size={term ? 4 : 8} />
      <IconLabel label={storeName} />
      <p className='text-xs text-text100'>{category}</p>
      {term && <p className='text-xs text-text100'>{term}</p>}
    </div>
  );
}

export default Card;
