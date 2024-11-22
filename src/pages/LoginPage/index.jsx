import { useState, useEffect } from 'react';

import Spacing from '@shared/ui/Spacing';
import Section from '@shared/ui/Section';

function LoginPage() {
  const [kakaoLoginUrl, setKakaoLoginUrl] = useState('');

  useEffect(() => {
    const baseUrl = window.location.origin;
    const url = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_APP_KEY}&redirect_uri=${baseUrl}/oauth/callback/kakao`;
    setKakaoLoginUrl(url);
  }, []); // 브라우저 환경에서만 실행

  const kakaoLoginHandler = () => {
    if (kakaoLoginUrl) {
      window.location.href = kakaoLoginUrl;
    } else {
      console.error('Kakao Login URL이 초기화되지 않았습니다.');
    }
  };

  return (
    <div className='relative h-screen bg-center bg-no-repeat bg-cover bg-auth'>
      <div className='absolute inset-x-0 flex flex-col items-center justify-center pb-10 bottom-10'>
        <Section
          title='환영합니다.'
          desc='함께 걸어가는, 소상공인과 확실한 동행'
        />
        <Spacing size={50} />
        <button type='button' onClick={kakaoLoginHandler}>
          <img
            src='kakao.svg'
            alt='카카오 로그인'
            className='px-4 shadow-lg cursor-pointer'
          />
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
