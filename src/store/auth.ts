import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { OAuthResponse } from '@interfaces/api/oauth';

import client from '@apis/fetch';

interface AuthState {
  isLoggedIn: boolean;
  memberId: null | OAuthResponse['memberId'];
  refreshToken?: string;
}

interface AuthAction {
  login: (acessToken: string, refreshToken: string, memberId: number) => void;
  reLogin: () => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState & AuthAction>(
    (set, get) => ({
      isLoggedIn: false,
      memberId: null,
      login: (accessToken, refreshToken, memberId) => {
        set({ refreshToken, memberId, isLoggedIn: true });
        client.setAccessToken(accessToken);
      },
      reLogin: async () => {
        const refreshToken = get().refreshToken;

        if (!refreshToken) {
          set({ isLoggedIn: false });
          throw new Error('저장되어 있는 refreshToken이 없습니다.');
        }

        try {
          const response = await client.post<OAuthResponse>({
            path: '/auth/tokens',
            body: {
              refresh_token: refreshToken,
            },
          });
          const { refreshToken: newRefreshToken, memberId, accessToken } = response;
          set({ refreshToken: newRefreshToken, isLoggedIn: true, memberId });
          client.setAccessToken(accessToken);
          return get().isLoggedIn;
        } catch (e) {
          set({ isLoggedIn: false });
          throw new Error('만료된 refreshToken입니다.');
        }
      },
      logout: () => {
        set({ isLoggedIn: false, memberId: null });
        localStorage.clear();
      },
    }),
    {
      name: 'userLoginStatus',
    }
  )
);
