import Spacing from '@shared/ui/Spacing';
import Section from '@shared/ui/Section';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  // TODO: 임시 main으로 라우팅 -> 추후 로그인 로직 후 수정 예정
  const navigate = useNavigate();

  return (
    <div className='relative h-screen bg-auth bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-x-0 bottom-10 flex flex-col items-center justify-center pb-10'>
        <Section
          title='환영합니다.'
          desc='함께 걸어가는, 소상공인과 확실한 동행'
        />
        <Spacing size={50} />
        <button type='button' onClick={() => navigate('/main')}>
          <img
            src='/src/assets/images/kakao.png'
            alt='카카오 로그인'
            className='cursor-pointer px-4 shadow-lg'
          />
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
