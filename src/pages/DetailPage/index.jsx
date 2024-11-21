import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MdKeyboardArrowRight } from 'react-icons/md';

import { DUMMY_STORE } from '@mocks/store';

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

function DetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { favorites, toggleHandler, isLoading } = useFavoriteStore();

  const { id, name, description, star, location, products } =
    DUMMY_STORE[0].data.store;

  const handleNavigateToSales = () => {
    dispatch(addProducts({ id, name, products }));
    navigate(`/detail/${id}/sales`);
  };

  if (isLoading) {
    // 추후 Loader로 변경 예정
    return <p>Loading...</p>;
  }

  return (
    <div className='w-full'>
      <LazyImage height='230px' />

      <Spacing size={20} />

      <Header
        store={DUMMY_STORE[0].data.store}
        favorites={favorites}
        toggleHandler={toggleHandler}
      />

      <section className='py-6 border-y'>
        <Spacing size={15} />
      </section>

      <Description title='우리 상점은,'>{description}</Description>

      <section className='flex items-center justify-between py-6 border-b'>
        <p>평점</p>
        <RatingStars rating={star} />
      </section>

      <section className='py-4 border-b'>
        <MapSection lat={location.latitude} lng={location.longitude} />
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
