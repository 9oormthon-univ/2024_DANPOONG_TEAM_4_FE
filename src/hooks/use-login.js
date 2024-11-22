import { publicApi } from '@/api/axios';

export const useLogin = () => {
  const signIn = async (code) => {
    try {
      const response = await publicApi.post(`/kakao/token?code=${code}`);

      if (response.status === 200) {
        const { accessToken } = response.data;

        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
          window.location.href = '/main'; // 성공 시 메인 페이지로 이동
        }
      } else if (response.status === 401) {
        alert('ID 혹은 비밀번호가 일치하지 않습니다.');
      } else {
        console.error(
          '로그인 실패:',
          response.data?.message || '알 수 없는 오류',
        );
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      alert('로그인 요청 중 문제가 발생했습니다.');
    }
  };

  return { signIn };
};
