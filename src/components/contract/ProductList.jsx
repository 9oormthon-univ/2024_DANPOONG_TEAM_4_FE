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
        const {
          product_id,
          product_name,
          unit,
          product_price,
          quantity,
          imageUrl,
        } = product;

        return (
          <div className='py-6 border-b' key={product_id}>
            <ProductCard
              productId={product_id}
              count={quantity}
              name={product_name}
              unit={unit}
              price={product_price}
              closeHandler={() => removeHandler(product_id)}
              imageSrc={imageUrl}
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
