import Spacing from '@shared/ui/Spacing';

function OrderList({ products }) {
  const totalPrice = products.reduce(
    (acc, product) => acc + product.product_price,
    0,
  );

  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  return (
    <section>
      <p className='text-xl text-text200'>주문 상품 총 {totalQuantity}개</p>
      <Spacing size={10} />
      <div className='px-4 border rounded-common'>
        {products.map((product) => (
          <section key={product.product_id} className='py-5 border-b'>
            <span className='flex items-center gap-x-1'>
              <p className='text-text200'>{product.product_name}</p>x
              <p>{product.quantity}</p>
            </span>

            <Spacing size={4} />

            <div className='flex items-center justify-between text-text100'>
              <p className='text-sm'>
                개당 {product.originalPrice.toLocaleString()}원
              </p>
              <p>{product.product_price.toLocaleString()}원</p>
            </div>
          </section>
        ))}
        <div className='flex items-center justify-between py-8 text-2xl text-primary'>
          <p>총 주문 금액</p>
          <p>{totalPrice.toLocaleString()}원</p>
        </div>
      </div>
    </section>
  );
}

export default OrderList;
