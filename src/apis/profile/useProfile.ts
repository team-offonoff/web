import { useMutation } from '@tanstack/react-query';

import { PresignedURLResponse, ProfileResponse } from '@interfaces/api/profile';

import client from '@apis/fetch';

// export interface profileRequestDTO {
//   status?: 'VOTING' | 'CLOSED';
//   keyword_id?: number;
//   page?: number;
//   size?: number;
//   sort?: string;
//   side?: 'TOPIC_A' | 'TOPIC_B';
// }

const getProfile = () => {
  return client.get<ProfileResponse>('/members/profile');
};

const getPresignedURL = (fileName: string) => {
  return client.post<PresignedURLResponse>({
    path: `/images/profile`,
    body: {
      fileName: fileName,
    },
  });
};

const updateProfileImgURL = (profileImgURL: string) => {
  return client.put({
    path: `/members/profile/image`,
    body: {
      imageUrl: profileImgURL,
    },
  });
};

const deleteProfileImg = () => {
  return client.delete(`/members/profile/image`);
};

const useGetPresignedURL = (fileName: string) => {
  return useMutation({ mutationFn: () => getPresignedURL(fileName) });
};

const useUpdateProfileImgURL = (profileImgURL: string) => {
  return useMutation({ mutationFn: () => updateProfileImgURL(profileImgURL) });
};

const useDeleteProfileImg = () => {
  return useMutation({ mutationFn: () => deleteProfileImg() });
};

export { getProfile, useGetPresignedURL, useUpdateProfileImgURL, useDeleteProfileImg };
