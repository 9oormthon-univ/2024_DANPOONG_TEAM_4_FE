import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';

// 다른 페이지 컴포넌트들도 여기에 import...
// TODO: isHeader, isFooter는 default가 true이므로 생략가능합니다

const RoutesMap = [
  {
    path: '/',
    element: <LandingPage />,
    isReady: true,
    isHeader: false,
    isFooter: false,
  },
  {
    path: '/login',
    element: <LoginPage />,
    isReady: true,
    isHeader: false,
    isFooter: false,
  },
  {
    path: '/main',
    element: <MainPage />,
    isHeader: true,
    isFooter: true,
  },
  // 다른 고객 관련 라우트들...
];

export default RoutesMap;
