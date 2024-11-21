import { useSelector } from 'react-redux';

import OrderList from '@components/credit/OrderList';

import IconLabel from '@shared/ui/IconLabel';
import Spacing from '@shared/ui/Spacing';

function CreditPage() {
  const { name, products } = useSelector((state) => state.products);

  return (
    <div className='pb-10'>
      <IconLabel label={name} />

      <Spacing size={10} />

      <OrderList products={products} />
    </div>
  );
}

export default CreditPage;
