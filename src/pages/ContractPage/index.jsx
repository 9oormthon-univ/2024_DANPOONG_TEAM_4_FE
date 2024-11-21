import { useSelector } from 'react-redux';
import { useState } from 'react';

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
  const { id, name, products } = useSelector((state) => state.products);

  const [selectedWeek, setSelectedWeek] = useState('매주');
  const [selectedDate, setSelectedDate] = useState(['월']);
  const [selectedDelivery, setSelectedDelivery] = useState('배달');
  const [requestedTerm, setRequestedTerm] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const isValidated =
    selectedWeek !== '' &&
    selectedDate.length > 0 &&
    selectedDelivery !== '' &&
    isCheck === true;

  const totalPrice = Object.values(products).reduce(
    (acc, product) => acc + product.price,
    0,
  );

  const submitHandler = () => {
    console.log(
      products,
      selectedWeek,
      selectedDate,
      selectedDelivery,
      requestedTerm,
      isCheck,
    );
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
