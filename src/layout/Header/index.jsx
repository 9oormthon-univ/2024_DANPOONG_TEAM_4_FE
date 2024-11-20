import { MdChevronLeft } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Header({ leftIcon, content, rightIcon }) {
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  const goCartHandler = () => {
    // TODO: 카트 페이지로 가기
  };

  return (
    <header className='relative flex items-center justify-between p-6 py-10'>
      {leftIcon && <MdChevronLeft size={28} onClick={backHandler} />}

      <div className='absolute left-1/2 flex -translate-x-1/2 items-center gap-1 text-base text-gray-800'>
        {content}
      </div>
      {rightIcon && (
        <IoCartOutline
          size={28}
          className={`${rightIcon ? 'block' : 'hidden'}`}
          onClick={goCartHandler}
        />
      )}
    </header>
  );
}

export default Header;
