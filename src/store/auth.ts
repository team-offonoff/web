import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ACCESS_TOKEN } from '@constants/localStorage';

interface AuthState {
  isLoggedIn: boolean;
}

interface AuthAction {
  login: () => boolean;
  logout: () => void;
}

export const useAuthStore = create(
  persist<AuthState & AuthAction>(
    (set) => ({
      isLoggedIn: false,
      login: () => {
        const userLocalStorage = localStorage.getItem(ACCESS_TOKEN);
        if (userLocalStorage) {
          set({ isLoggedIn: true });
          return true;
        } else {
          return false;
        }
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
      },
    }),
    {
      name: 'userLoginStatus',
    }
  )
);
