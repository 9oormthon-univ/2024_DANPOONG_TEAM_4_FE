import Spacing from '@shared/ui/Spacing';
import Section from '@shared/ui/Section';

function LoginPage() {
  return (
    <div className='relative h-screen bg-auth bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-x-0 bottom-10 flex flex-col items-center justify-center pb-10'>
        <Section
          title='환영합니다.'
          desc='함께 걸어가는, 소상공인과 확실한 동행'
        />
        <Spacing size={50} />
        <img
          src='/src/assets/images/kakao.png'
          alt='카카오 로그인'
          className='cursor-pointer px-4 shadow-lg'
        />
      </div>
    </div>
  );
}

export default LoginPage;
