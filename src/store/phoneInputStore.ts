import { create } from "zustand";

export interface IPhoneInputStore {
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
}

export const usePhoneInputStore = create<IPhoneInputStore>((set) => ({
  selectedCountry: "US",
  setSelectedCountry: (country) => set({ selectedCountry: country }),
}));
