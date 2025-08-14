import { useTranslation } from "next-i18next";

import {
  StyledCookieSettings,
  StyledCookieSettingsHeader,
  StyledCross,
  StyledCheckboxes,
  StyledCheckText,
} from "./CookieSettings.styled";
import { Checkbox } from "@src/components/ui/Checkbox";
import { useState } from "react";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { IConsentData } from "../CookieBanner/CookieBanner";
import { setConsentCookie, applyConsent } from "@src/utils/useUtmCookies";
import { ICookieSettings } from "./CookieSettings.types";

const CookieSettings = ({
  setShowSettings,
  consent,
  setShowFab,
  setConsent,
}: ICookieSettings) => {
  const { t } = useTranslation("common");
  const [checkedItems, setCheckedItems] = useState<IConsentData>(consent);

  const handleMarketingChange = () => {
    const newValue =
      checkedItems.ad_storage === "granted" ? "denied" : "granted";

    setCheckedItems((prev) => ({
      ...prev,
      ad_storage: newValue,
      ad_user_data: newValue,
      ad_personalization: newValue,
    }));
  };

  const handleChange = (key: keyof IConsentData) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: prev[key] === "granted" ? "denied" : "granted",
    }));
  };

  const confirmChanges = () => {
    setConsentCookie(checkedItems);
    setConsent(checkedItems);
    applyConsent(checkedItems);
    setShowSettings(false);
    setShowFab(true);
  };

  return (
    <StyledCookieSettings id="cookie-settings">
      <StyledCookieSettingsHeader>
        <Heading label={t("CookieSettings")} level={4} />
        <StyledCross
          id="cookie-settings-close"
          onClick={() => setShowSettings(false)}
        />
      </StyledCookieSettingsHeader>
      <StyledCheckboxes>
        <Checkbox
          label={
            <StyledCheckText>
              <Heading level={4}>{t("Technical")}</Heading>
              <Text fontSize="14px">{t("TechnicalDescription")}</Text>
            </StyledCheckText>
          }
          checked={checkedItems.necessary === "granted"}
          disabled={true}
          onChange={() => {}}
        />
        <Checkbox
          label={
            <StyledCheckText>
              <Heading level={4}>{t("Analytical")}</Heading>
              <Text fontSize="14px">{t("AnalyticalDescription")}</Text>
            </StyledCheckText>
          }
          checked={checkedItems.analytics_storage === "granted"}
          onChange={() => handleChange("analytics_storage")}
        />
        <Checkbox
          label={
            <StyledCheckText>
              <Heading level={4}>{t("Marketing")}</Heading>
              <Text fontSize="14px">{t("MarketingDescription")}</Text>
            </StyledCheckText>
          }
          checked={checkedItems.ad_storage === "granted"}
          onChange={handleMarketingChange}
        />
      </StyledCheckboxes>
      <Button
        id="confirm-cookie"
        label={t("ConfirmMyChoices")}
        onClick={confirmChanges}
      />
    </StyledCookieSettings>
  );
};

export { CookieSettings };
