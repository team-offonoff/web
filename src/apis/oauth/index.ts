import { OAuthLoginRequest, OAuthResponse } from '@interfaces/api/oauth';

import client from '@apis/fetch';

export const OAuthLogin = async (type: 'kakao' | 'google' | 'apple', authorizeCode: string) => {
  const body: OAuthLoginRequest = {
    type: 'BY_CODE',
    code: authorizeCode,
    redirect_uri: import.meta.env[`VITE_${type.toUpperCase()}_REDIRECT_URI`],
    id_token: null,
    provider: null,
  };

  const response = await client.post<OAuthResponse>({
    path: `/oauth/${type}/authorize`,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body,
  });

  return response;
};
