import { useMutation } from '@tanstack/react-query';

import { privateApi } from '@/api/axios';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductList from '@components/contract/ProductList';
import SelectedWeek from '@components/contract/SelectedWeek';
import SelectedDelivery from '@components/contract/SelectedDelivery';
import Request from '@components/contract/Request';
import Description from '@components/detail/Description';
import AgreeTerm from '@components/contract/AgreeTerm';

import IconLabel from '@shared/ui/IconLabel';
import Spacing from '@shared/ui/Spacing';
import FloatingButton from '@shared/ui/FloatingButton';

function ContractPage() {
  const navigate = useNavigate();

  const { id, name, products } = useSelector((state) => state.products);

  const postMutation = useMutation({
    mutationFn: (body) => privateApi.post('/contracts', body),
    onSettled: () => {
      navigate(`/credit/${id}`);
    },
  });

  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDate, setSelectedDate] = useState(['MONDAY']);
  const [selectedDelivery, setSelectedDelivery] = useState('delivery');
  const [requestedTerm, setRequestedTerm] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const isValidated =
    selectedWeek !== '' &&
    selectedDate.length > 0 &&
    selectedDelivery !== '' &&
    isCheck === true;

  const totalPrice = Object.values(products).reduce(
    (acc, product) => acc + product.product_price,
    0,
  );

  const transformedProducts = products.map((product) => ({
    productId: product.product_id,
    productName: product.product_name,
    unit: product.unit,
    price: product.product_price,
    quantity: product.quantity,
  }));

  const submitHandler = () => {
    const data = {
      enterpriseId: id,
      deliveryWeek: selectedWeek,
      deliveryDay: selectedDate.join(','),
      takeMethod: selectedDelivery,
      requestedTerm: requestedTerm,
      totalPrice: totalPrice,
      products: transformedProducts,
    };
    postMutation.mutate(data);
  };

  return (
    <div className='pb-10'>
      <IconLabel label={name} />

      <Spacing size={10} />

      <section className='px-3 border rounded-common'>
        <ProductList id={id} products={products} />
      </section>

      <Spacing size={16} />

      <section>
        <SelectedWeek
          selectedWeek={selectedWeek}
          onSelectWeek={setSelectedWeek}
          selectedDate={selectedDate}
          onSelectedDate={setSelectedDate}
        />
      </section>

      <Spacing size={16} />

      <section>
        <SelectedDelivery
          selectedDelivery={selectedDelivery}
          onSelectedDelivery={setSelectedDelivery}
        />
      </section>

      <Spacing size={16} />

      <section>
        <Request value={requestedTerm} onChange={setRequestedTerm} />
      </section>

      <Spacing size={16} />

      <Description
        title='약관 동의'
        subTitle='(약관에 동의하시면 계약이 가능합니다.)'
      >
        <AgreeTerm isCheck={isCheck} setIsCheck={setIsCheck} />
      </Description>
      <FloatingButton
        label={`${totalPrice.toLocaleString()}원 결제`}
        disabled={!isValidated}
        onClick={submitHandler}
      />
    </div>
  );
}

export default ContractPage;
