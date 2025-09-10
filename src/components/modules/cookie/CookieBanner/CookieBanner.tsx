import { Trans, useTranslation } from "next-i18next";
import {
  StyledCookieFab,
  StyledCookieBannerHeading,
  StyledCookieBanner,
  ButtonsArea,
  StyledCookieBannerHeader,
  StyledCross,
} from "./CookieBanner.styled";
import { useIPGeolocationStore } from "@src/store/useIPGeolocationStore";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { useState, useEffect, useRef } from "react";
import { CookieSettings } from "../CookieSettings/CookieSettings";
import {
  setConsentCookie,
  applyConsent,
  DEFAULT_CONSENT,
  ALL_GRANTED,
} from "@src/utils/useUtmCookies";

function getConsentCookie(): IConsentData | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/cookie_preferences=([^;]*)/);
  return match ? JSON.parse(decodeURIComponent(match[1])) : null;
}

export interface IConsentData {
  necessary: string;
  analytics_storage: string;
  ad_storage: string;
  ad_user_data: string;
  ad_personalization: string;
  security_storage: string;
  functionality_storage: string;
  personalization_storage: string;
}

const CookieBanner = () => {
  const { t } = useTranslation("common");
  const IPGeolocationCountry = useIPGeolocationStore(
    (state) => state.IPGeolocationInfo.country,
  );

  const [consent, setConsent] = useState<IConsentData | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isFullGDPR, setIsFullGDPR] = useState(true);
  const scrolledRef = useRef(false);

  useEffect(() => {
    let gdpr = true;

    if (!IPGeolocationCountry) {
      const lang = navigator.language.slice(0, 2).toLowerCase();
      // prettier-ignore
      const GDPR_LANGS = [
        "de", "fr", "it", "es", "nl", "pl", "fi", "sv", "da", "hu", "el", "cs", "pt", "ro", "sk",
        "sl", "hr", "et", "lv", "lt", "mt", "ga", "is", "no", "nb", "nn", "lb", "bg", "tr",
        "ca", "eu", "gl", "rm", "en"
      ];

      if (!GDPR_LANGS.includes(lang)) {
        gdpr = false;
      }
    } else {
      // prettier-ignore
      const ALL_COUNTRIES = [
        "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT",
        "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
        "NO", "IS", "LI", "CH", "GB",
        "CN", "SG", "ZA", "NG", "KE"
      ];

      if (!ALL_COUNTRIES.includes(IPGeolocationCountry)) {
        gdpr = false;
      }
    }

    setIsFullGDPR(gdpr);
  }, [IPGeolocationCountry]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isFullGDPR && !scrolledRef.current && !getConsentCookie()) {
        const top = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;

        const scrollPercent = (top + winHeight) / docHeight;

        if (scrollPercent >= 0.2) {
          scrolledRef.current = true;
          setConsentCookie(ALL_GRANTED);
          applyConsent(ALL_GRANTED);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFullGDPR]);

  useEffect(() => {
    const consentFromCookie = getConsentCookie();

    if (consentFromCookie) {
      setConsent(consentFromCookie);
      setShowBanner(false);
      setShowFab(true);
    } else {
      if (!isFullGDPR) {
        const sameOrigin =
          document.referrer &&
          location.hostname === new URL(document.referrer).hostname;

        if (sameOrigin) {
          applyConsent(ALL_GRANTED);
          setConsentCookie(ALL_GRANTED);
          setShowBanner(false);
          setShowFab(true);
        } else {
          setShowFab(false);
          setShowBanner(true);
        }
      } else {
        setShowFab(false);
        setShowBanner(true);
      }
    }
  }, [isFullGDPR]);

  const handleAcceptAll = () => {
    setConsentCookie(ALL_GRANTED);
    applyConsent(ALL_GRANTED);
    setShowBanner(false);
    setShowFab(true);
  };

  const handleDeclineAll = () => {
    setConsentCookie(DEFAULT_CONSENT);
    applyConsent(DEFAULT_CONSENT);
    setShowBanner(false);
    setShowFab(true);
  };

  const handleSettings = () => {
    if (showSettings) {
      setShowSettings(false);
      setShowFab(true);
    } else {
      setShowBanner(false);
      setShowFab(false);
      setShowSettings(true);
    }
  };

  const handleBanner = () => {
    setShowBanner(true);
    setShowFab(false);
    setShowSettings(false);
  };

  const handleCross = () => {
    setShowBanner(false);
    setShowFab(true);
  };
  return (
    <>
      {showFab && <StyledCookieFab id="cookieBanner" onClick={handleBanner} />}
      {showBanner && (
        <StyledCookieBanner>
          <StyledCookieBannerHeader>
            <StyledCookieBannerHeading
              label={t("HarmonyInYourCookies")}
              level={4}
            />
            {!isFullGDPR && (
              <StyledCross id="cookie-banner-close" onClick={handleCross} />
            )}
          </StyledCookieBannerHeader>
          <Text fontSize="14px">
            <Trans
              t={t}
              i18nKey="CookieText"
              components={[
                <Link
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key={0}
                  href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.239950403.1196593722.1525950411-169631771.1404734630"
                />,
              ]}
            />
          </Text>
          <ButtonsArea>
            <Button
              id="decline-all"
              label={t("Deny")}
              onClick={handleDeclineAll}
            />
            <Button
              id="settings"
              label={t("Customize")}
              onClick={handleSettings}
            />
            <Button
              id="accept-all"
              label={t("AcceptAll")}
              onClick={handleAcceptAll}
            />
          </ButtonsArea>
        </StyledCookieBanner>
      )}
      {showSettings && (
        <CookieSettings
          setShowSettings={handleSettings}
          consent={consent ? consent : DEFAULT_CONSENT}
          setShowFab={setShowFab}
          setConsent={setConsent}
        />
      )}
    </>
  );
};

export { CookieBanner };
