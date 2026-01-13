import { create } from 'zustand';

// TODO: add real user type

interface UserStore {
    user: object | null;

    setUser: (newUser: object) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
    user: null,

    setUser: (newUser) =>
        set((state) => ({
            user: { ...state.user, ...newUser },
        })),
}));
