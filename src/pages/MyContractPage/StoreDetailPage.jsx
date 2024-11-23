import { useQuery } from '@tanstack/react-query';

import { privateApi } from '@/api/axios';

import LazyImage from '@shared/ui/LazyImage';
import IconLabel from '@shared/ui/IconLabel';
import Spacing from '@shared/ui/Spacing';
import { useParams } from 'react-router-dom';

function StoreDetailPage() {
  const { id } = useParams();

  const { data: contractData } = useQuery({
    queryKey: ['myContracts', id],
    queryFn: () =>
      privateApi.get(`/contracts/${id}`).then((response) => response.data.data),
  });

  if (contractData) {
    <div className='p-4'>
      <IconLabel label={contractData.enterpriseName} />

      <Spacing size={10} />

      <div className='p-4 border rounded-common'>
        <LazyImage height='220px' imageSrc={contractData.profileImgUrl} />
        <div className='mt-4'>
          <h1 className='text-2xl font-bold'>{contractData.enterpriseName}</h1>
          <p className='text-gray-500'>{contractData.category}</p>

          <div className='mt-4'>
            <h2 className='text-lg font-bold'>상품</h2>
            <p className='text-gray-500'>{contractData.products}</p>
          </div>
          <div className='mt-4'>
            <h2 className='text-lg font-bold'>정규 배송일</h2>
            <p className='text-gray-500'>{contractData.deliveryDay}</p>
          </div>
          {/* <div className='mt-4'>
            <h2 className='text-lg font-bold'>계약 기간</h2>
            <p className='text-gray-500'>{store.contractPeriod}</p>
          </div> */}
          {contractData.requestTerm && (
            <div className='mt-4'>
              <h2 className='text-lg font-bold'>추가 요청 사항</h2>
              <p className='text-gray-500'>{contractData.requestTerm}</p>
            </div>
          )}
        </div>
      </div>
    </div>;
  }

  return <p>없어요</p>;
}

export default StoreDetailPage;
