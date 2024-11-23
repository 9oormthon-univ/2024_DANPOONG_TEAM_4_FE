import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useLogin } from '@hooks/use-login';

function AllowLoginPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { signIn } = useLogin();

  useEffect(() => {
    const code = searchParams.get('code'); // URL에서 인가 코드 추출

    if (code) {
      signIn(code); // 인가 코드로 로그인 처리
    } else {
      alert('인가 코드가 없습니다. 다시 로그인 해주세요.');
      navigate('/login'); // 인가 코드가 없으면 로그인 페이지로 이동
    }
  }, [searchParams, signIn, navigate]);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold'>로그인 처리 중...</h1>
      <p>잠시만 기다려 주세요.</p>
    </div>
  );
}

export default AllowLoginPage;
