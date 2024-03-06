import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@store/auth';

import { ResponseError } from '@apis/fetch';
import { OAuthLogin } from '@apis/oauth';

type Platforms = 'kakao' | 'google' | 'apple';

interface UseOAuthProps {
  type: Platforms;
}

export default function useOAuth({ type }: UseOAuthProps) {
  const navigate = useNavigate();
  const login = useAuthStore((store) => store.login);

  function getCode() {
    if (type === 'kakao') {
      return new URL(window.location.href).searchParams.get('code');
    } else if (type === 'google') {
      const code = new URL(window.location.href).searchParams.get('code') || '';
      return decodeURI(code);
    } else {
      return 'apple';
    }
  }

  async function handleLogin(code: string) {
    try {
      const response = await OAuthLogin(type, code);
      if (response.newMember) {
        navigate(`/signup`, {
          state: { memberId: response.memberId },
        });
      } else {
        if (!response.accessToken || !response.refreshToken || !response.memberId) {
          throw new Error('토큰이 올바르지 않습니다.');
        }
        login(response.accessToken, response.refreshToken, response.memberId);
        navigate('/');
      }
    } catch (err) {
      if (err instanceof ResponseError) {
        if (err.errorData.abCode === 'ILLEGAL_JOIN_STATUS') {
          navigate(`/signup`, {
            state: { memberId: err.errorData.errorContent.payload },
          });
          return;
        } else {
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    }
  }

  return { getCode, handleLogin };
}
