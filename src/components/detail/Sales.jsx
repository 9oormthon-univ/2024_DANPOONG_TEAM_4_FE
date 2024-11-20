import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import LazyImage from '@shared/ui/LazyImage';
import Spacing from '@shared/ui/Spacing';

function Sales({ products }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView='2.1'
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation
    >
      {products.map((product) => (
        <SwiperSlide key={product.name}>
          <SaleCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function SaleCard({ product }) {
  const { name, price } = product;

  const [productName, unit] = name.split(' ');
  return (
    <div
      className='rounded-common flex h-44 shrink-0 flex-col items-center gap-1 border bg-white p-2 shadow-md transition-all hover:scale-95'
      onClick={() => {}}
    >
      <div className='w-full px-8 pt-2'>
        <LazyImage height='65px' />
      </div>
      <Spacing size={2} />
      <p>{productName}</p>
      <div className='w-full px-4'>
        <span className='flex items-center justify-between'>
          <p className='text-text100 text-xs'>{unit}, 가격</p>
          <p className='text-text100 text-sm'>{price}원</p>
        </span>
      </div>
    </div>
  );
}

export default Sales;
