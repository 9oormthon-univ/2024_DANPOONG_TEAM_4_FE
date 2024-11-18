import { MdChevronLeft } from 'react-icons/md';
import { IoCartOutline } from 'react-icons/io5';

function Header({ leftIcon, content, rightIcon }) {
  return (
    <header className='relative flex items-center justify-between p-6 py-10'>
      {leftIcon && <MdChevronLeft size={24} />}

      <div className='absolute left-1/2 flex -translate-x-1/2 items-center gap-1 text-base text-gray-800'>
        {content}
      </div>
      {rightIcon && (
        <IoCartOutline
          size={28}
          className={`${rightIcon ? 'block' : 'hidden'}`}
        />
      )}
    </header>
  );
}

export default Header;
