import { useSelector } from 'react-redux';

import OrderList from '@components/credit/OrderList';
import AddressSection from '@components/credit/AddressSection';
import PaymentMethod from '@components/credit/PaymentMethod';

import IconLabel from '@shared/ui/IconLabel';
import Spacing from '@shared/ui/Spacing';
import FlexBetween from '@shared/ui/FlexBetween';
import FloatingButton from '@shared/ui/FloatingButton';
import { useNavigate } from 'react-router-dom';

function CreditPage() {
  const navigate = useNavigate();
  const { name, products } = useSelector((state) => state.products);

  const totalPrice = Object.values(products).reduce(
    (acc, product) => acc + product.product_price,
    0,
  );

  return (
    <div className='pb-10'>
      <IconLabel label={name} />

      <Spacing size={10} />

      <OrderList products={Object.values(products)} />

      <section className='py-8 border-y'>
        <AddressSection />
      </section>

      <section className='py-6 border-b'>
        <PaymentMethod />
      </section>

      <Spacing size={10} />

      <section className='space-y-6'>
        <FlexBetween
          size='xl'
          left='최종 결제 금액'
          right='1,000원'
          leftColor='text-red-500'
          rightColor='text-green-500'
        />

        <FlexBetween
          left='주문 금액'
          right={`${totalPrice.toLocaleString()}원`}
        />
        <FlexBetween left='배달비' right='0원' />
      </section>
      <FloatingButton
        label={`${totalPrice.toLocaleString()}원 결제하기`}
        onClick={() => navigate('/success')}
      />
    </div>
  );
}

export default CreditPage;
