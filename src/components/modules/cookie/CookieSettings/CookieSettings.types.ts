import { IConsentData } from "../CookieBanner/CookieBanner";

export interface ICookieSettings {
  /** The function to set the settings visibility. */
  setShowSettings: (show: boolean) => void;
  /** The consent data. */
  consent: IConsentData;
  /** The function to set the fab visibility. */
  setShowFab: (show: boolean) => void;
  /** The function to set the consent data. */
  setConsent: (consent: IConsentData) => void;
}
