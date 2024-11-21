function OrderList({ products }) {
  // 주문 상품들의 총 합 갯수
  const totalQuantity = Object.values(products).reduce(
    (acc, product) => acc + product.quantity,
    0,
  );
  console.log(typeof products);

  return (
    <section>
      <p className='text-xl text-text200'>주문 상품 총 {totalQuantity}개</p>
    </section>
  );
}

export default OrderList;
