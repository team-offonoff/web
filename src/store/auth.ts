import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { OAuthResponse } from '@interfaces/api/oauth';

import { ACCESS_TOKEN } from '@constants/localStorage';

interface AuthState {
  isLoggedIn: boolean;
  memberId: null | OAuthResponse['memberId'];
}

interface AuthAction {
  login: (memberId: OAuthResponse['memberId']) => boolean;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState & AuthAction>(
    (set) => ({
      isLoggedIn: false,
      memberId: null,
      login: (memberId: OAuthResponse['memberId']) => {
        const userLocalStorage = localStorage.getItem(ACCESS_TOKEN);
        if (userLocalStorage) {
          set({ isLoggedIn: true, memberId: memberId });
          return true;
        } else {
          return false;
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
