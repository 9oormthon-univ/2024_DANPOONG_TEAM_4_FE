import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import { DUMMY_ALERTS } from '../../mocks/alerts';

function Alerts() {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView='2.1'
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation
    >
      {DUMMY_ALERTS.map((alert) => (
        <SwiperSlide key={alert.id}>
          <div className='flex flex-col p-4 space-y-4 transition-all border shadow-lg h-28 rounded-common hover:scale-95'>
            <h3 className='font-bold text-text200'>{alert.title}</h3>
            <p className='text-xs text-text100'>{alert.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Alerts;
