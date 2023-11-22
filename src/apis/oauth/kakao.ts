import { OAuthLoginRequest, OAuthResponse } from '@types/api/oauth';

import client from '@apis/fetch';

export const kakaoLogin = async (authorizeCode: string) => {
  const body: OAuthLoginRequest = {
    type: 'BY_CODE',
    code: authorizeCode,
    redirect_uri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
    id_token: null,
    provider: null,
  };

  const response = await client.post<OAuthResponse>({
    path: '/oauth/kakao/authorize',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body,
  });

  if (response.accessToken) {
    client.setAccessToken(response.accessToken);
  }

  return response;
};
