import { create } from 'zustand';

import { User } from '@interfaces/models/user';

interface AuthState {
  user: User | null;
}

interface AuthAction {
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
  user: null,
  setUser: (user: User) => {
    set({ user: user });
  },
}));
