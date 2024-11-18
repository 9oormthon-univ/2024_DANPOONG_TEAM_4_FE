import { useSelector } from 'react-redux';

function MainPage() {
  const location = useSelector((state) => state.location);

  console.log(location);

  return <div className='bg-yellow-300'>메인페이지입니다</div>;
}

export default MainPage;
