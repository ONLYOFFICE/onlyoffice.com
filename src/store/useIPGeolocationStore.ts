import { create } from "zustand";

export interface IIPGeolocationInfo {
  ipStart: string;
  ipEnd: string;
  city: string;
  country: string;
  timezoneName: string;
  timezoneOffset: number;
  lang: string;
  countryCallingCodeKey: string;
  regionDbEntity: {
    regionDbKey: string;
    hostingRegion: string;
    domain: string;
    dbConnectionStringKey: string;
  };
}

export interface IIPGeolocationStore {
  IPGeolocationInfo: IIPGeolocationInfo;
  setIPGeolocationInfo: (data: Partial<IIPGeolocationInfo>) => void;
}

export const useIPGeolocationStore = create<IIPGeolocationStore>((set) => ({
  IPGeolocationInfo: {
    ipStart: "",
    ipEnd: "",
    city: "",
    country: "",
    timezoneName: "",
    timezoneOffset: 0,
    lang: "",
    countryCallingCodeKey: "",
    regionDbEntity: {
      regionDbKey: "",
      hostingRegion: "",
      domain: "",
      dbConnectionStringKey: "",
    },
  },
  setIPGeolocationInfo: (data) =>
    set((state) => ({
      IPGeolocationInfo: { ...state.IPGeolocationInfo, ...data },
    })),
}));
