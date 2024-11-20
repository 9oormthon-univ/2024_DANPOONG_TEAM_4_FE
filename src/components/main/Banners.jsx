import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import { DUMMY_BANNER } from '@/mocks/banners';

function Banners() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 3_000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: false,
      }}
      navigation
      className=''
    >
      {DUMMY_BANNER.map((image) => (
        <SwiperSlide key={image.id}>
          <div className='flex items-center justify-center size-full'>
            <img
              src={image.imageUrl}
              alt={`Banner ${image.id}`}
              className='object-cover w-full'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banners;
