import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className='flex items-center justify-center overflow-auto'>
      <div className='min-h-screen w-full max-w-mobile bg-red-400'>
        <Header />
        <main className='px-6 pb-24'>
          <Outlet />
        </main>
        <footer className='fixed inset-x-0 bottom-0 h-20 max-w-mobile'>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Layout;
