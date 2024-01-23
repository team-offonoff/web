import { useMutation } from '@tanstack/react-query';

import { OAuthResponse } from '@interfaces/api/oauth';

import client from '@apis/fetch';

interface SingnUpRequestDTO {
  memberId: number;
  nickname: string;
  birth: string;
  gender: string;
  job: string;
}

type TermsConsetResponseDTO = Omit<OAuthResponse, 'newMember'>;

interface TermsConsentRequestDTO {
  memberId: number;
  listen_marketing: boolean;
}

const signup = (req: SingnUpRequestDTO) => {
  return client.post({
    path: '/auth/signup/profile',
    body: req,
  });
};

const terms = (req: TermsConsentRequestDTO) => {
  return client.post<TermsConsetResponseDTO>({
    path: '/auth/signup/terms',
    body: req,
  });
};

const useSignup = () => {
  return useMutation({ mutationFn: signup });
};

const useTerms = () => {
  return useMutation({ mutationFn: terms });
};

export { useSignup, useTerms };
export type { SingnUpRequestDTO, TermsConsentRequestDTO };
