// import Sitemap from './Sitemap';

import MainPage from '@pages/MainPage';

// 다른 페이지 컴포넌트들도 여기에 import...

const Routes = [
  // {
  //   path: '/',
  //   element: <Sitemap />,
  //   previous: false,
  //   footer: true,
  // },
  //Customer Routes
  {
    path: '/',
    element: <MainPage />,
  },
  // 다른 고객 관련 라우트들...
];

export default Routes;
