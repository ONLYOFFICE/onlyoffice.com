import { create } from "zustand";

interface IUseHeaderStore {
  scrolled: boolean;
  setScrolled: (value: boolean) => void;
}

export const useHeaderStore = create<IUseHeaderStore>((set) => ({
  scrolled: false,
  setScrolled: (value) => set({ scrolled: value }),
}));
