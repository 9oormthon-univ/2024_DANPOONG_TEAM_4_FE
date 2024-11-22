import { useNavigate } from 'react-router-dom';
import { DUMMY_SHOPCATEGORY } from '@mocks/shopcategory';
import CategoryCard from '../../components/category/CategoryCard';

function CategoryPage() {
  const navigate = useNavigate(); // navigate 생성

  const handleCardClick = (category) => {
    navigate(`/category/shop/${category.id}`, { state: { name: category.name } }); // ID와 이름 전달
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {DUMMY_SHOPCATEGORY.map((category) => (
        <div key={category.id} onClick={() => handleCardClick(category)}>
          <CategoryCard
            storeName={category.name}
            imageSrc={category.image}
            borderColor={category.bordercolor}
            bgColor={category.bgcolor}
          />
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;
