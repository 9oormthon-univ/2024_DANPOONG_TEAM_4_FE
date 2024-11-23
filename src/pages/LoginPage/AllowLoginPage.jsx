import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useLogin } from '@hooks/use-login';

function AllowLoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { getTokenAndAuthenticate } = useLogin();

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      getTokenAndAuthenticate(code);
    } else {
      alert('인가 코드가 없습니다. 다시 로그인 해주세요.');
      navigate('/login');
    }
  }, [searchParams]);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold'>로그인 처리 중...</h1>
      <p>잠시만 기다려 주세요.</p>
    </div>
  );
}

export default AllowLoginPage;
