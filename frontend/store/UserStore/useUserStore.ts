import { create } from 'zustand';

import type { User } from '@ktube/shared';

// TODO: add real user type

interface UserStore {
    user: User | null;

    isAuthorized: boolean;
    setUser: (newUser: User | null) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
    user: null,
    isAuthorized: false,

    setUser: (newUser) =>
        set({
            user: newUser,
            isAuthorized: Boolean(newUser),
        }),
}));
