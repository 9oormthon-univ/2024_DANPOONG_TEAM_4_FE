import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import Card from '@shared/ui/Card';
import { getCategoryDisplayName } from '../../mocks/shopcategory';

function Contracts({ data }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView='2.1'
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation
    >
      {data.map((contract) => (
        <SwiperSlide key={contract.contractId}>
          <Card
            storeName={contract.enterpriseName}
            category={getCategoryDisplayName(contract.category)}
            imageSrc={contract.profileImage}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Contracts;
