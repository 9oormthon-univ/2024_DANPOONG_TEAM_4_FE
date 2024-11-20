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

function DetailPage() {
  const { favorites, toggleHandler, isLoading } = useFavoriteStore();

  const { description, star, location, products } = DUMMY_STORE[0].data.store;

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

      <Spacing size={15} />

      <Description description={description} />

      <section className='flex items-center justify-between border-b py-6'>
        <p>평점</p>
        <RatingStars rating={star} />
      </section>

      <section className='border-b py-4'>
        <MapSection lat={location.latitude} lng={location.longitude} />
      </section>

      <>
        <section className='flex items-center justify-between py-4'>
          <p>판매 품목</p>
          <span className='flex items-center gap-x-2'>
            <Tag label='자세히 보기' onClick={() => {}} />
            <MdKeyboardArrowRight size={20} />
          </span>
        </section>
        <Sales products={products} />
      </>
      <FloatingButton label='더 보러 가기' />
    </div>
  );
}

export default DetailPage;
