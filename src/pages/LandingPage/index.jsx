import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useGeolocation from '@hooks/use-geo-location';
import { locateTo } from '@/store/features/current-location-reducer';

import Spacing from '@shared/ui/Spacing';
import Section from '@shared/ui/Section';

function LandingPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useGeolocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/login'); // 로그인 페이지로 이동
    }, 2_000);

    // 위치 정보를 받으면 dispatch
    if (location.loaded) {
      const { lat, lng } = location.coordinates || {};
      if (lat && lng) {
        dispatch(locateTo({ latitude: lat, longitude: lng }));
      }
    }

    return () => clearTimeout(timeout);
  }, [location.loaded, dispatch, navigate]);

  return (
    <div className='flex flex-col items-center justify-center h-screen transition-all duration-500 bg-primary'>
      <img src='Logo.svg' alt='로고' className='size-28' />
      <Spacing size={20} />
      <Section title='소확행' desc='소상공인과 확실한 동행' />
    </div>
  );
}

export default LandingPage;
