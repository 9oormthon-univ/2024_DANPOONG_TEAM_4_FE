import { useEffect } from 'react';

import { useLogin } from '@hooks/use-login';

function GetAccessPage() {
  const { signIn } = useLogin();

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    signIn(code);
  }, []);

  return <div>잠시 로그인 중입니다.</div>;
}

export default GetAccessPage;
