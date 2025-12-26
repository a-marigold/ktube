import { create } from 'zustand';

interface NavbarStore {
    showNavbar: boolean;
    toggleNavbar: () => void;
}
export const useNavbarStore = create<NavbarStore>()((set) => ({
    showNavbar: false,

    toggleNavbar: () => set((state) => ({ showNavbar: !state.showNavbar })),
}));
