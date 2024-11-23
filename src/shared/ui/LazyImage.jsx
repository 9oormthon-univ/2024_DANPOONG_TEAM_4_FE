import { faker } from '@faker-js/faker';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LazyImage({ imageSrc = null, height = '98px' }) {
  return (
    <LazyLoadImage
      src={imageSrc || faker.image.urlLoremFlickr({ category: 'store' })}
      alt='faker'
      effect='blur'
      className='object-cover w-full rounded-common'
      wrapperClassName='flex justify-center items-center w-full'
      style={{ height }}
      placeholder={
        <div
          className='w-full bg-gray-200 border animate-pulse rounded-common'
          style={{ height }}
        />
      }
    />
  );
}

export default LazyImage;
