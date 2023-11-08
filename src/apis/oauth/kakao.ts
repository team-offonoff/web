import client from '@apis/fetch';

interface KakaoLoginResponse {
  newMember: boolean;
  accessToken: string;
}

export const kakaoLogin = async (authorizeCode: string) => {
  const response = await client.post<KakaoLoginResponse>({
    path: '/oauth/kakao/authorize',
    body: {
      authorizeCode: authorizeCode,
      redirectUri: import.meta.env.VITE_KAKAO_REDIRECT_URI,
    },
  });

  if (response.accessToken) {
    client.setAccessToken(response.accessToken);
  }

  return response;
};
