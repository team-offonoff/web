export enum JoinStatus {
  EMPTY = 'EMPTY',
  AUTH_REGISTERED = 'AUTH_REGISTERED',
  PERSONAL_REGISTERED = 'PERSONAL_REGISTERED',
  COMPLETE = 'COMPLETE',
}

export interface OAuthLoginRequest {
  type: 'BY_CODE' | 'BY_IDTOKEN';

  /**
   * 카카오 서버로 부터 받은 authorize code
   */
  code: string | null;

  /**
   * authorize code를 받을 때 입력했던 redirect_uri
   */
  redirect_uri: string;

  /**
   * 카카오 서버로 부터 받은 id_token
   */
  id_token: string | null;

  /**
   * 서버 내 작업 용. 입력 X
   */
  provider: null;
}

export interface OAuthResponse {
  newMember: boolean;
  memberId: number;
  joinStatus: JoinStatus;
  accessToken?: string;
  refreshToken?: string;
}
