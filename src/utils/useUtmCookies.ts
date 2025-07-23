import { useEffect } from "react";
import { parse as parseCookie, serialize as serializeCookie } from "cookie";

const UTM_KEYS = [
  "utm_term",
  "utm_source",
  "utm_campaign",
  "utm_content",
] as const;

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
  }, []);
};
