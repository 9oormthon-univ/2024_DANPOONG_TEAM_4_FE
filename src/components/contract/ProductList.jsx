import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { removeProduct } from '@/store/features/store-products-reducer';

import ProductCard from '@components/sales/ProductCard';

function ProductList({ id, products }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removeHandler = (name) => {
    dispatch(removeProduct(name));
  };

  const addProductHandler = () => {
    navigate(`/detail/${id}`);
  };

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
      <div className='py-6 text-center'>
        <p className='cursor-pointer text-text100' onClick={addProductHandler}>
          + 상품 추가
        </p>
      </div>
    </div>
  );
}

export default ProductList;