import { useMutation } from '@tanstack/react-query';

import client from '@apis/fetch';

interface SingnUpRequestDTO {
  memberId: number;
  nickname: string;
  birth: string;
  gender: string;
  job: string;
}

const signup = (req: SingnUpRequestDTO) => {
  return client.post({
    path: '/auth/signup/profile',
    body: req,
  });
};

const useSignup = () => {
  return useMutation({ mutationFn: signup });
};

export { useSignup };
export type { SingnUpRequestDTO };
