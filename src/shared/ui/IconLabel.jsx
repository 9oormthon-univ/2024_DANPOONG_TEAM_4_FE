import { FaAngleRight } from 'react-icons/fa6';

function IconLabel({ label }) {
  return (
    <span className='flex place-x-2'>
      <p className='text-text200'>{label}</p>
      <FaAngleRight color='#181725' size={18} />
    </span>
  );
}

export default IconLabel;
