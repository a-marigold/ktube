import { create } from 'zustand';

import type { User } from '@ktube/shared';

// TODO: add real user type

interface UserStore {
    user: User | null;

    setUser: (newUser: User) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
    user: null,

    setUser: (newUser) =>
        set((state) => ({
            user: { ...state.user, ...newUser },
        })),
}));
