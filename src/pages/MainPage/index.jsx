import { useQuery } from '@tanstack/react-query';

import { privateApi } from '@/api/axios';

import Banners from '@components/main/Banners';
import Alerts from '@components/main/Alerts';
import Contracts from '@components/main/Contracts';
import Stores from '@components/main/Stores';

import TitleRow from '@shared/ui/TitleRow';
import Spacing from '@shared/ui/Spacing';

function MainPage() {
  const categoryName =
    localStorage.getItem('category') || 'AGRICULTURAL_PRODUCTS';

  const { data: contractData } = useQuery({
    queryKey: ['myContracts'],
    queryFn: () =>
      privateApi
        .get('/contracts?page=0&limit=10')
        .then((response) => response.data.data.content),
  });

  const { data: storeData } = useQuery({
    queryKey: ['enterprises', categoryName],
    queryFn: () =>
      privateApi
        .get(`/enterprises/category/${categoryName}?size=10&limit=0`)
        .then((response) => response.data.data.content),
  });

  return (
    <div>
      <Banners />
      <section>
        <TitleRow title='알림 확인' sub='전체보기' navigateTo='/alert' />
        <Spacing size={6} />
        <Alerts />
      </section>

      <section className='my-4'>
        <TitleRow
          title='정기 계약 현황'
          sub='전체보기'
          navigateTo='/mycontract'
        />
        <Spacing size={6} />
        {contractData && <Contracts data={contractData} />}
      </section>

      <section>
        <TitleRow
          title='내 업체를 위한 추천 상점'
          sub='전체보기'
          navigateTo='/recommended'
        />
        <Spacing size={6} />
        <Stores data={storeData} />
      </section>
    </div>
  );
}

export default MainPage;
