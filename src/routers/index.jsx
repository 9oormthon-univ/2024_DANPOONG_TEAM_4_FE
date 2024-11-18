import { HiLocationMarker } from 'react-icons/hi';

import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';

// 다른 페이지 컴포넌트들도 여기에 import...
/* isHeader, isFooter는 default가 true이므로 생략가능합니다
  isHide는 헤더, 푸터 모두 필요없을경우, default는 false입니다.
*/

const mainPageDefaults = {
  isHeader: true,
  leftIcon: false,
  content: (location) => (
    <span className='flex items-center gap-x-2'>
      <HiLocationMarker />
      <p className='text-xl'>
        {location.loading
          ? '주소를 가져오는 중...'
          : location.error
            ? '주소를 불러올 수 없습니다'
            : location.address || '위치를 설정하세요'}
      </p>
    </span>
  ),
  rightIcon: false,
  isFooter: true,
};

const RoutesMap = [
  {
    path: '/',
    element: <LandingPage />,
    isHide: true,
    isHeader: false,
    isFooter: false,
  },
  {
    path: '/login',
    element: <LoginPage />,
    isHide: true,
    isHeader: false,
    isFooter: false,
  },
  {
    path: '/main',
    element: <MainPage />,
    ...mainPageDefaults,
  },
  // 다른 고객 관련 라우트들...
];

export default RoutesMap;
