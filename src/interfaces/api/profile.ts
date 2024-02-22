interface ProfileResponse {
  profileImageUrl: string;
  nickname: string;
  birth: string;
  gender: string;
  job: string;
}

interface PresignedURLResponse {
  presignedUrl: string;
}

interface ModifyProfileRequestDTO {
  nickname: string;
  job: string;
}

export type { ProfileResponse, PresignedURLResponse, ModifyProfileRequestDTO };
