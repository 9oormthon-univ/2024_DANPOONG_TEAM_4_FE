import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  OAuthProvider,
  signInWithCredential,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

import {
  CLIENT_SECRET,
  REDIRECT_URI,
  REST_API_KEY,
} from '@app/firebase/config/KakaoConfig';
import { authService } from '@app/firebase';

import { publicApi } from '@/api/axios';

export const useLogin = () => {
  const navigate = useNavigate();

  const getTokenAndAuthenticate = async (authorizationCode) => {
    try {
      // Step 1: 카카오에서 토큰 받아오기
      const response = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        new URLSearchParams({
          grant_type: 'authorization_code',
          client_id: REST_API_KEY,
          redirect_uri: REDIRECT_URI,
          code: authorizationCode,
          client_secret: CLIENT_SECRET,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        },
      );

      const { id_token } = response.data;

      // Step 2: Firebase 인증 처리
      const provider = new OAuthProvider('oidc.kakao');
      const credential = provider.credential({
        idToken: id_token,
      });

      await setPersistence(authService, browserSessionPersistence);
      const result = await signInWithCredential(authService, credential);

      const user = result.user;
      const userData = user.providerData[0]; // 사용자 데이터 가져오기
      console.log('사용자 정보', userData);

      // Step 3: 서버와 데이터 주고받기
      await sendUserDataToServer(userData);

      // Step 4: localStorage 검사 후 페이지 이동
      const category = localStorage.getItem('category');
      if (!category) {
        // category가 설정되어 있지 않다면
        navigate('/select-category'); // 선택 페이지로 이동
      } else {
        // category가 설정되어 있다면
        navigate('/main'); // 메인 페이지로 이동
      }
    } catch (error) {
      console.error('토큰 요청 또는 인증 실패:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
      navigate('/login');
    }
  };

  const sendUserDataToServer = async (userData) => {
    try {
      const serverResponse = await publicApi.post(
        '/login',
        {
          providerId: userData.uid,
          nickname: userData.displayName,
          profileUrl: userData.photoURL,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('서버 응답:', serverResponse.data.data);

      const { accessToken } = serverResponse.data.data;
      localStorage.setItem('accessToken', accessToken); // 토큰 저장
    } catch (error) {
      console.error('서버와 데이터 통신 실패:', error);
      alert('서버와의 통신에 문제가 발생했습니다.');
    }
  };

  return { getTokenAndAuthenticate };
};
