import { useLocation } from 'react-router-dom';
import LazyImage from '@shared/ui/LazyImage';
import IconLabel from '@shared/ui/IconLabel';
import Spacing from '@shared/ui/Spacing';

function StoreDetailPage() {
  const location = useLocation();
  const store = location.state; // navigate로 전달된 데이터를 읽음

  if (!store) {
    return <div>상점 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4">
      <IconLabel label={store.name} />

      <Spacing size={10} />

      <div className="border p-4 rounded-common">
        <LazyImage height='220px'/>
        {/* <div className="bg-gray-200 h-64 flex items-center justify-center">
          상점대표이미지
        </div> */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">{store.name}</h1>
          <p className="text-gray-500">{store.category}</p>

          <div className="mt-4">
            <h2 className="text-lg font-bold">상품</h2>
            <p className="text-gray-500">{store.products}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">정규 배송일</h2>
            <p className="text-gray-500">{store.deliveryDay}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">계약 기간</h2>
            <p className="text-gray-500">{store.contractPeriod}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold">추가 요청 사항</h2>
            <p className="text-gray-500">{store.additionalRequest}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreDetailPage;
