import { useNavigate } from 'react-router-dom';
import { DUMMY_STORES } from '../../mocks/stores';

import Card from '@shared/ui/Card';

function RecommendedStorePage() {
    const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
    {DUMMY_STORES.map((store) => (
        <div
        key={store.id}
        className='cursor-pointer'
        onClick={() => navigate(`/detail/${store.id}`, { state: store })}
        >
        <Card
            key={store.id}
            storeName={store.name}
            category={store.category}
        />
        </div>
    ))}
    </div>
  )
}

export default RecommendedStorePage;
