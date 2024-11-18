import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import { DUMMY_BANNER } from '@/mocks/banners';

function Banners() {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 3_000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,
      }}
      pagination={{ clickable: true }}
      navigation
      className=''
    >
      {DUMMY_BANNER.map((image) => (
        <SwiperSlide key={image.id}>
          <div className='flex size-full items-center justify-center'>
            <img
              src={image.imageUrl}
              alt={`Banner ${image.id}`}
              className='w-full object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banners;
