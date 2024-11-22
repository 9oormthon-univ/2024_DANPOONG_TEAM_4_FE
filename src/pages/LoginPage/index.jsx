import Spacing from '@shared/ui/Spacing';
import Section from '@shared/ui/Section';

const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_APP_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URL}`;
function LoginPage() {
  // TODO: 임시 main으로 라우팅 -> 추후 로그인 로직 후 수정 예정
  const kakaoLoginHandler = () => {
    window.location.href = KAKAO_LOGIN_URL;
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
