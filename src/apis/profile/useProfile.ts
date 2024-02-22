import { useMutation } from '@tanstack/react-query';

import {
  ModifyProfileRequestDTO,
  PresignedURLResponse,
  ProfileResponse,
} from '@interfaces/api/profile';

import client from '@apis/fetch';

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

const modifyProfile = (req: ModifyProfileRequestDTO) => {
  return client.put({
    path: `/members/profile/information`,
    body: req,
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

const useModifyProfile = () => {
  return useMutation({ mutationFn: modifyProfile });
};

export {
  getProfile,
  useGetPresignedURL,
  useUpdateProfileImgURL,
  useDeleteProfileImg,
  useModifyProfile,
};
