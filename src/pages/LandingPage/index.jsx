import { useEffect, useState } from 'react';
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

  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (location.loaded) {
      const { lat, lng } = location.coordinates || {};
      if (lat && lng) {
        dispatch(locateTo({ latitude: lat, longitude: lng }));

        // dispatch 이후 타이머 설정
        const timeout = setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            navigate('/login'); // 로그인 되었다면 바로 main, 아니라면 아저씨 화면으로 navigate
          }, 500);
        }, 1_000);

        return () => clearTimeout(timeout);
      }
    }
  }, [location.loaded, dispatch, navigate]);

  return (
    <div
      className={`flex h-screen flex-col items-center justify-center bg-primary transition-all duration-500 ${
        fadeOut ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
      }`}
    >
      <img src='/src/assets/svgs/Logo.svg' alt='로고' className='size-28' />
      <Spacing size={20} />
      <Section title='소확행' desc='소상공인과 확실한 동행' />
    </div>
  );
}

export default LandingPage;
