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

export type { ProfileResponse, PresignedURLResponse };
