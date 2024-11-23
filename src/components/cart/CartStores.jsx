import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import { DUMMY_STORES } from '@mocks/stores';

import Card from '@shared/ui/Card';
import { useNavigate } from 'react-router-dom';

function CartStores() {
  const navigate = useNavigate();

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView='2.1'
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation
    >
      {DUMMY_STORES.map((store) => (
        <SwiperSlide key={store.id}>
          <Card
            storeName={store.name}
            category={store.category}
            // onClick={() => navigate(`/detail/${store.id}`)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CartStores;
