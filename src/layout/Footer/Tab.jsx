import { Link, useLocation } from 'react-router-dom';

function Tab({ icon: Icon, url, name }) {
  const location = useLocation();
  const selected = url === location.pathname;

  return (
    <Link
      to={url}
      className={`flex flex-col items-center justify-center space-y-1 transition-all duration-100 ease-in-out ${
        selected ? 'text-primary' : 'text-gray-500 hover:text-primary'
      }`}
    >
      <Icon size={24} />
      <p className='text-sm'>{name}</p>
    </Link>
  );
}

export default Tab;
