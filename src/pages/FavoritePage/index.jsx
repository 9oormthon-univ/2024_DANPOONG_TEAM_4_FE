import Card from '@shared/ui/Card';
import { useNavigate } from 'react-router-dom';

function FavoritePage() {
  const navigate = useNavigate();

  const FAVORITES = JSON.parse(localStorage.getItem('favorites'));

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      {FAVORITES.map((store) => (
        <div
          key={store.id}
          className='cursor-pointer'
          onClick={() => navigate(`/detail/${store.id}`)}
        >
          <Card
            key={store.id}
            storeName={store.name}
            category={store.category}
          />
        </div>
      ))}
    </div>
  );
}

export default FavoritePage;
