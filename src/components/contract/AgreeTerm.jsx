import { IoMdCheckmark } from 'react-icons/io';
import Spacing from '@shared/ui/Spacing';

function AgreeTerm({ isCheck, setIsCheck }) {
  const toggleCheck = () => setIsCheck((prev) => !prev);

  return (
    <div className='p-4 border rounded-common'>
      <p className='text-sm text-primary'>
        3주마다 월요일에 일주일치 금액이 선결제됩니다.{' '}
        <span className='font-bold text-text200'>동의하십니까?</span>
        <span className='ml-[2px] text-text100'>
          (추후 마이페이지에서 수정 가능)
        </span>
      </p>

      <Spacing size={12} />

      <div className='flex items-center gap-2'>
        <input
          type='checkbox'
          id='agree'
          checked={isCheck}
          onChange={toggleCheck}
          className='hidden peer'
        />

        <label
          htmlFor='agree'
          className={`flex items-center justify-center w-6 h-6 transition-all duration-200 border-2 rounded cursor-pointer ${
            isCheck ? 'bg-primary border-primary' : 'bg-white border-text50'
          }`}
        >
          {isCheck && <IoMdCheckmark color='white' size={16} />}
        </label>

        <label
          htmlFor='agree'
          className={`font-bold cursor-pointer ${isCheck ? 'text-primary' : 'text-text50'}`}
        >
          동의합니다.
        </label>
      </div>
    </div>
  );
}

export default AgreeTerm;
