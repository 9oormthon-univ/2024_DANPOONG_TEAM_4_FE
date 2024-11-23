import { TbTruckDelivery } from 'react-icons/tb';
import { RiContractLine } from 'react-icons/ri';
import { HiOutlineTicket } from 'react-icons/hi2';

import { getFormatDate } from '@shared/util/get-format-date';

function AlertCard({ type, content, date, image }) {
  const getIcon = (category) => {
    switch (category) {
      case '주문/배송':
        return <TbTruckDelivery size={40} color='#53B175' />;
      case '계약':
        return <RiContractLine size={40} color='#53B175' />;
      case '프로모션':
        return <HiOutlineTicket size={40} color='#53B175' />;
      default:
        return null;
    }
  };

  return (
    <div className='p-4 my-2 border rounded-common'>
      <div className='flex justify-between'>
        <span className='flex gap-x-2'>
          {getIcon(type)}
          <p className='text-xl text-text200'>{type}</p>
        </span>
        <p className='text-sm text-gray-400'>{getFormatDate(date)}</p>
      </div>

      <div className='ml-12'>
        <p className='text-sm text-text100'>{content}</p>
        {image && (
          <img
            src={image}
            alt='image'
            className='object-cover mt-2 w-28 h-28 rounded-common'
          />
        )}
      </div>
    </div>
  );
}

export default AlertCard;
