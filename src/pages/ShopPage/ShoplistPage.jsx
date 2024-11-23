import { useQuery } from '@tanstack/react-query';

import { privateApi } from '@/api/axios';

import { useLocation, useNavigate } from 'react-router-dom';
import Card from '@shared/ui/Card';
import Header from '../../layout/Header';
import {
  getCategoryDisplayName,
  getCategoryName,
} from '../../mocks/shopcategory';

function ShoplistPage() {
  const navigate = useNavigate();
  const location = useLocation(); // 라우터에서 전달된 상태(location.state) 가져오기
  const categoryName = location.state?.name; // 전달된 category.name 값

  const { data } = useQuery({
    queryKey: ['enterprises', categoryName],
    queryFn: () =>
      privateApi
        .get(
          `/enterprises/category/${getCategoryName(categoryName)}?size=10&limit=0`,
        )
        .then((response) => response.data.data.content),
  });
  if (data) {
    return (
      <div>
        {/* Header 추가 */}
        <Header
          leftIcon={true}
          content={<span className='text-xl'>{categoryName}</span>} // 헤더에 category.name 표시
          rightIcon={true}
        />
        <div className='grid grid-cols-2 gap-4 p-4'>
          {data.map((store) => (
            <div
              key={store.enterprise_id}
              className='cursor-pointer'
              onClick={() =>
                navigate(`/detail/${store.enterprise_id}`, { state: store })
              }
            >
              <Card
                key={store.enterprise_id}
                storeName={store.enterprise_name}
                category={getCategoryDisplayName(store.category)}
                imageSrc={store.enterprise_image_url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <p>없어요</p>;
}

export default ShoplistPage;
