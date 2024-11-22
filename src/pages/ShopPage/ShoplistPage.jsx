import { useLocation } from 'react-router-dom';
import { DUMMY_STORES } from '@mocks/stores';
import Card from '@shared/ui/Card';

function ShoplistPage() {
  const location = useLocation(); // 라우터에서 전달된 상태(location.state) 가져오기

  const filteredStores = DUMMY_STORES.filter(
    (store) => store.category === location.state?.name // 전달된 카테고리 이름으로 필터링
  );

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {filteredStores.map((store) => (
        <Card
          key={store.id}
          storeName={store.name}
          category={store.category}
        />
      ))}
    </div>
  )
}

export default ShoplistPage
