import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import { DUMMY_CONTRACTS } from '@mocks/contracts';

import Card from '@shared/ui/Card';

function Contracts() {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView='2.1'
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation
    >
      {DUMMY_CONTRACTS.map((contract) => (
        <SwiperSlide key={contract.id}>
          <Card
            storeName={contract.name}
            category={contract.category}
            term={contract.term}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Contracts;
