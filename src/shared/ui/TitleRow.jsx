import { useNavigate } from 'react-router-dom';

function TitleRow({ title, sub, navigateTo }) {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between px-2'>
      <p className='text-xl text-text300'>{title}</p>
      <p
        className='cursor-pointer text-primary'
        onClick={() => navigate(navigateTo)}
      >
        {sub}
      </p>
    </div>
  );
}

export default TitleRow;
