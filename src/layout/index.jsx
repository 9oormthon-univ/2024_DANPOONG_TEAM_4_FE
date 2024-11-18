import { Outlet, useLocation } from 'react-router-dom';

import RoutesMap from '@routers';

import Header from './Header';
import Footer from './Footer';

function Layout() {
  const location = useLocation();

  const currentRoute = RoutesMap.find(
    (route) => route.path === location.pathname,
  );

  // 조건부 렌더링을 위한 속성
  const isReady = currentRoute?.isReady ?? false;
  const isHeader = currentRoute?.isHeader ?? true;
  const isFooter = currentRoute?.isFooter ?? true;

  return (
    <div className='flex items-center justify-center overflow-auto'>
      <div className='min-h-screen w-full max-w-mobile'>
        {/* Header 조건부 렌더링 */}
        {isHeader && <Header />}
        <main className={`${!isReady && 'px-6 pb-24'}`}>
          <Outlet />
        </main>
        {/* Footer 조건부 렌더링 */}
        {isFooter && (
          <footer className='fixed inset-x-0 bottom-0 h-20 max-w-mobile'>
            <Footer />
          </footer>
        )}
      </div>
    </div>
  );
}

export default Layout;
