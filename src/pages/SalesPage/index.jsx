import { useSelector } from 'react-redux';

import ProductCard from '@components/sales/ProductCard';

import Spacing from '@shared/ui/Spacing';
import Button from '@shared/ui/Button';

function SalesPage() {
  const { products } = useSelector((state) => state.products);

  if (products && products.length > 0) {
    return (
      <div>
        {products.map((product, index) => {
          const { name, price } = product;
          const [title, unit] = name.split(' ');

          return (
            <div className='py-6 border-b' key={index}>
              <ProductCard name={title} unit={unit} price={price} />
            </div>
          );
        })}
        <Spacing size={20} />
        <div className='flex flex-wrap gap-6'>
          <Button color='secondary' className='flex-1'>
            장바구니
          </Button>
          <Button color='primary' className='flex-1'>
            계약하러 가기
          </Button>
        </div>
      </div>
    );
  }

  return <p>상품이 없습니다.</p>;
}

export default SalesPage;
