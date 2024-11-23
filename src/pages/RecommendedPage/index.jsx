import { useQuery } from '@tanstack/react-query';

import { privateApi } from '@/api/axios';

import { useNavigate } from 'react-router-dom';

import Card from '@shared/ui/Card';
import { getCategoryDisplayName } from '../../mocks/shopcategory';

function RecommendedStorePage() {
  const categoryName =
    localStorage.getItem('category') || 'AGRICULTURAL_PRODUCTS';

  const { data: storeData } = useQuery({
    queryKey: ['enterprises', categoryName],
    queryFn: () =>
      privateApi
        .get(`/enterprises/category/${categoryName}?size=10&limit=0`)
        .then((response) => response.data.data.content),
  });
  const navigate = useNavigate();

  if (storeData) {
    return (
      <div className='grid grid-cols-2 gap-4 p-4'>
        {storeData.map((store) => (
          <div
            key={store.enterprise_id}
            className='cursor-pointer'
            onClick={() =>
              navigate(`/detail/${store.enterprise_id}`, { state: store })
            }
          >
            <Card
              imageSrc={store.enterprise_image_url}
              key={store.enterprise_id}
              storeName={store.enterprise_name}
              category={getCategoryDisplayName(store.category)}
            />
          </div>
        ))}
      </div>
    );
  }
  return <p>없어용</p>;
}

export default RecommendedStorePage;
