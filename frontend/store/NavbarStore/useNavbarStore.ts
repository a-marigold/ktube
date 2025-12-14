import { create } from 'zustand';

interface NavbarStore {
    showNavbar: boolean;
    setShowNavbar: (value: boolean) => void;
}
export const useNavbarStore = create<NavbarStore>()((set) => ({
    showNavbar: true,
    setShowNavbar: (value) => set({ showNavbar: value }),
}));
