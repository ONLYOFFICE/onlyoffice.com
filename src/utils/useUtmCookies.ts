import { useEffect } from "react";
import { parse as parseCookie, serialize as serializeCookie } from "cookie";
import { IConsentData } from "../components/modules/cookie/CookieBanner/CookieBanner";

const CONSENT_COOKIE = "cookie_preferences";

const UTM_KEYS = [
  "utm_term",
  "utm_source",
  "utm_campaign",
  "utm_content",
] as const;

export const DEFAULT_CONSENT: IConsentData = {
  necessary: "granted",
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  security_storage: "granted",
  functionality_storage: "denied",
  personalization_storage: "denied",
};

export const ALL_GRANTED: IConsentData = {
  necessary: "granted",
  analytics_storage: "granted",
  ad_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
  security_storage: "granted",
  functionality_storage: "denied",
  personalization_storage: "denied",
};

const EXPIRES_DAYS = 30;
type TUtmKey = (typeof UTM_KEYS)[number];
type TUtmData = Record<TUtmKey, string>;

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = serializeCookie(name, value, {
    expires,
    path: "/",
  });
}

export function setConsentCookie(data: IConsentData): void {
  document.cookie =
    CONSENT_COOKIE +
    "=" +
    encodeURIComponent(JSON.stringify(data)) +
    "; path=/; max-age=31536000; SameSite=Lax";
}

declare global {
  interface Window {
    dataLayer: Array<Array<string | object | number>>;
    gtag: (command: string, action: string, params: IConsentData) => void;
  }
}

export function applyConsent(data: IConsentData): void {
  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function (
      command: string,
      action: string,
      params: IConsentData,
    ) {
      window.dataLayer.push([command, action, params]);
    };
  }

  window.gtag("consent", "update", data);
}

function getCookie(name: string): string | undefined {
  const cookies = parseCookie(document.cookie);
  return cookies[name];
}

export const useUtmCookies = (): void => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData: Partial<TUtmData> = {};

    UTM_KEYS.forEach((key) => {
      const paramValue = urlParams.get(key);
      const existingCookie = getCookie(key);

      if (paramValue) {
        setCookie(key, paramValue, EXPIRES_DAYS);
        utmData[key] = paramValue;
      } else if (existingCookie) {
        utmData[key] = existingCookie;
      }
    });

    const consentFromCookie = getCookie(CONSENT_COOKIE);
    if (consentFromCookie) {
      try {
        const parsedConsent: IConsentData = JSON.parse(decodeURIComponent(consentFromCookie));
        applyConsent(parsedConsent);
      } catch (e) {
        console.error("Invalid consent cookie", e);
      }
    }
  }, []);
};
