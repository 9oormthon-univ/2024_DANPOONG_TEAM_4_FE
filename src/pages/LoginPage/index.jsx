import { KAKAO_AUTH_URL } from '@app/firebase/config/KakaoConfig';

import Spacing from '@shared/ui/Spacing';
import Section from '@shared/ui/Section';

function LoginPage() {
  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_AUTH_URL;
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
