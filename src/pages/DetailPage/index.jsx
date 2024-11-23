import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useQuery } from '@tanstack/react-query';

import { MdKeyboardArrowRight } from 'react-icons/md';

import { privateApi } from '@/api/axios';

import { useFavoriteStore } from '@hooks/use-favorite-store';

import Header from '@components/detail/Header';
import Description from '@components/detail/Description';
import MapSection from '@components/detail/MapSection';
import Sales from '@components/detail/Sales';

import LazyImage from '@shared/ui/LazyImage';
import Spacing from '@shared/ui/Spacing';
import RatingStars from '@shared/ui/RatingStars';
import Tag from '@shared/ui/Tag';
import FloatingButton from '@shared/ui/FloatingButton';

import { addProducts } from '@/store/features/store-products-reducer';
import { getCategoryDisplayName } from '../../mocks/shopcategory';
function DetailPage() {
  const storeId = useParams().id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['enterprises', storeId],
    queryFn: () =>
      privateApi
        .get(`/enterprises/${storeId}`)
        .then((response) => response.data.data),
    retry: 2, // 실패 시 최대 2번 재시도
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { favorites, toggleHandler } = useFavoriteStore();

  // 로딩 상태 처리
  if (isLoading) {
    return <p className='text-center'>Loading...</p>; // 더 나은 로딩 UI를 추가 가능
  }

  // 에러 상태 처리
  if (isError) {
    return (
      <p className='text-center'>
        데이터를 불러오지 못했습니다. 다시 시도해주세요.
      </p>
    );
  }

  // 데이터가 없는 경우 처리
  if (!data) {
    return <p className='text-center'>상점 정보를 찾을 수 없습니다.</p>;
  }

  // 구조 분해는 데이터가 존재할 때만 수행
  const {
    enterprise_id,
    enterprise_name,
    enterprise_image_url,
    category,
    description,
    star,
    latitude,
    longitude,
    products,
  } = data;

  const handleNavigateToSales = () => {
    dispatch(
      addProducts({
        id: enterprise_id,
        name: enterprise_name,
        products: products,
      }),
    );
    navigate(`/detail/${enterprise_id}/sales`);
  };

  return (
    <div className='w-full'>
      <LazyImage imageSrc={enterprise_image_url + '.jpg'} height='230px' />

      <Spacing size={20} />

      <Header
        id={enterprise_id}
        name={enterprise_name}
        category={getCategoryDisplayName(category)}
        favorites={favorites}
        toggleHandler={toggleHandler}
      />

      <Spacing size={15} />

      <Description title='우리 상점은,'>{description}</Description>

      <Spacing size={10} />

      <section className='flex items-center justify-between py-6 border-b'>
        <p>평점</p>
        <RatingStars rating={star} />
      </section>

      <section className='py-4 border-b'>
        <MapSection lat={latitude} lng={longitude} />
      </section>

      <>
        <section className='flex items-center justify-between py-4'>
          <p>판매 품목</p>
          <span className='flex items-center gap-x-2'>
            <Tag label='자세히 보기' onClick={handleNavigateToSales} />
            <MdKeyboardArrowRight size={20} />
          </span>
        </section>
        <Sales products={products} />
      </>
      <FloatingButton label='더 보러 가기' onClick={handleNavigateToSales} />
    </div>
  );
}

export default DetailPage;
