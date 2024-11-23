import { useNavigate } from 'react-router-dom';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@shared/ui/swiper-style.css';

import Card from '@shared/ui/Card';
import { getCategoryDisplayName } from '../../mocks/shopcategory';

function Stores({ data }) {
  const navigate = useNavigate();

  if (data) {
    return (
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView='2.1'
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((store) => (
          <SwiperSlide key={store.enterprise_id}>
            <Card
              imageSrc={store.enterprise_image_url}
              storeName={store.enterprise_name}
              category={getCategoryDisplayName(store.category)}
              onClick={() => navigate(`/detail/${store.enterprise_id}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return <p>없어용</p>;
}

export default Stores;
