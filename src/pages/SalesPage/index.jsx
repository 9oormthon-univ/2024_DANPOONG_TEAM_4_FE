import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { removeProduct } from '@/store/features/store-products-reducer';

import ProductCard from '@components/sales/ProductCard';

import Spacing from '@shared/ui/Spacing';
import Button from '@shared/ui/Button';

function SalesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id, products } = useSelector((state) => state.products);
  console.log(products);

  const removeHandler = (productId) => {
    dispatch(removeProduct(productId));
  };

  const goCartHandler = () => {
    navigate(`/cart/${id}`, { state: { products } }); // 장바구니로 상품 정보를 전달
  };

  const goContractHandler = () => {
    navigate(`/contract/${id}`);
  };

  if (products && products.length > 0) {
    return (
      <div>
        {products.map((product) => {
          const { productId, name, price, quantity } = product;
          const [title, unit] = name.split(' ');

          return (
            <div className='py-6 border-b' key={productId}>
              <ProductCard
                productId={productId}
                count={quantity}
                name={title}
                unit={unit}
                price={price}
                closeHandler={() => removeHandler(productId)}
              />
            </div>
          );
        })}
        <Spacing size={20} />
        <div className='flex flex-wrap gap-6'>
          <Button 
            color='secondary' 
            className='flex-1' 
            onClick={goCartHandler}
          >
            장바구니
          </Button>
          <Button
            color='primary'
            className='flex-1'
            onClick={goContractHandler}
          >
            계약하러 가기
          </Button>
        </div>
      </div>
    );
  }

  return <p>상품이 없습니다.</p>;
}

export default SalesPage;
