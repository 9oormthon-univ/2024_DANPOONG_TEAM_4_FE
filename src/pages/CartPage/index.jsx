import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { removeProduct } from '../../store/features/store-products-reducer';

import ProductCard from '@components/sales/ProductCard';

import Spacing from '@shared/ui/Spacing';
import FloatingButton from '@shared/ui/FloatingButton';

function CartPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // products 상태를 products slice에서 가져옵니다.
    const { products = [] } = useSelector((state) => state.products); // state.products로 수정

    const removeHandler = (productId) => {
        dispatch(removeProduct(productId));
    };

    const goContractHandler = () => {
        const id = 'someContractId'; // 적절한 id 정의
        navigate(`/contract/${id}`);
    };

    if (products.length > 0) {
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
                <FloatingButton label='계약하러 가기' onClick={goContractHandler} />
            </div>
        );
    }

    return <p>장바구니가 비어있습니다.</p>;
}

export default CartPage;
