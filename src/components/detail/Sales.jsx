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
        <SwiperSlide key={product.product_name}>
          <SaleCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function SaleCard({ product }) {
  const { product_name, unit, product_price, imageUrl } = product;

  return (
    <div
      className='flex flex-col items-center gap-1 p-2 transition-all bg-white border shadow-md rounded-common h-44 shrink-0 hover:scale-95'
      onClick={() => {}}
    >
      <div className='w-full px-8 pt-2'>
        <LazyImage imageSrc={imageUrl + '.jpg'} height='65px' />
      </div>
      <Spacing size={2} />
      <p>{product_name}</p>
      <div className='w-full px-4'>
        <span className='flex items-center justify-between'>
          <p className='text-xs text-text100'>{unit}, 가격</p>
          <p className='text-sm text-text100'>{product_price}원</p>
        </span>
      </div>
    </div>
  );
}

export default Sales;
