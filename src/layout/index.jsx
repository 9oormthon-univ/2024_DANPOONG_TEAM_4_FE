import { matchPath, Outlet, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import RoutesMap from '@routers';

import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import useAddressLocation from '../hooks/use-address-location';

function Layout() {
  const location = useLocation();

  const { latitude, longitude } = useSelector((state) => state.location);

  const { addressData, getAddressLocation } = useAddressLocation();

  useEffect(() => {
    if (latitude && longitude) {
      getAddressLocation(latitude, longitude);
    }
  }, [latitude, longitude, getAddressLocation]);

  const currentRoute = RoutesMap.find((route) =>
    matchPath(route.path, location.pathname),
  );

  // 조건부 렌더링을 위한 속성
  const isHide = currentRoute?.isHide ?? false;

  const isHeader = currentRoute?.isHeader ?? true;
  const leftIcon = currentRoute?.leftIcon ?? false;
  const rightIcon = currentRoute?.rightIcon ?? false;

  const isFooter = currentRoute?.isFooter ?? true;

  const content =
    typeof currentRoute?.content === 'function'
      ? currentRoute.content(addressData) // 주소 데이터를 content로 전달
      : currentRoute?.content;

  return (
    <div className='flex items-center justify-center overflow-auto'>
      <div className='w-full min-h-screen max-w-mobile'>
        {isHeader && (
          <Header leftIcon={leftIcon} content={content} rightIcon={rightIcon} />
        )}

        <motion.main
          key={location.pathname}
          initial={{ y: 20, opacity: 0 }}
          exit={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className={`${!isHide && 'px-6 pb-24'}`}
        >
          <Outlet />
        </motion.main>

        {isFooter && (
          <footer className='fixed inset-x-0 bottom-0 h-20 z-footer max-w-mobile bg-text10'>
            <Footer />
          </footer>
        )}
      </div>
    </div>
  );
}

export default Layout;
