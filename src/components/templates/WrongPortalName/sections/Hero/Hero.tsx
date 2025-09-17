import { useState, useRef } from "react";
import { Trans, useTranslation } from "next-i18next";
import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { ILoaderButton } from "@src/components/ui/LoaderButton";
import { validateTestEmail } from "@src/utils/IsTestEmail";
import { IFormData } from "../../WrongPortalName.types";

import {
  StyledHeroForm,
  StyledHeroHeading,
  StyledPortalName,
  StyledCreatePortal,
  StyledHeroInputText,
  StyledHeroInputTextBlock,
  StyledHeroLoaderButton,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoaderStatusLoadText,
  StyledHeroPopupStatus,
  StyledHeroCrossButton,
  StyledHeroStatusHeading,
  StyledHeroStatusText,
  StyledHeroPopupCloseButton,
  StyledHeroPopupWrapper,
} from "./Hero.styled";

interface HeroProps {
  url: string;
}

const Hero = ({ url }: HeroProps) => {
  const { t } = useTranslation("wrongportalname");

  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const [status, setStatus] = useState<ILoaderButton["status"]>("default");
  const [formData, setFormData] = useState<IFormData>({
    whoIsResponsible: "",
    captchaToken: null,
  });
  const [inputValue, setInputValue] = useState("");
  const [isTestEmailValid, setIsTestEmailValid] = useState(false);

  const clearData = () => {
    setStatus("default");
    setFormData({
      whoIsResponsible: "",
      captchaToken: null,
    });
    hCaptchaRef.current?.resetCaptcha();
  };

  const handleHCaptchaChange = async (token: string | null) => {
    setFormData((prev) => ({
      ...prev,
      captchaToken: token,
    }));
  };

  const handleSubmit = async () => {
  };

  const portalName = `"${url}"`;

  return (
    <>
      <Section
        desktopSpacing={["80px", "80px"]}
        tabletSpacing={["48px", "60px"]}
        tabletSmallSpacing={["48px", "60px"]}
        mobileSpacing={["48px", "60px"]}
      >
        <Container maxWidth="1050px">
          <StyledHeroHeading
            level={2}
            size={5}
            label={t("YouEntered")}
          />
          <StyledPortalName size={1}>{portalName}</StyledPortalName>
          <StyledCreatePortal size={3}><span className="numeral">1.</span>{t("CheckTheSpelling")}</StyledCreatePortal>
          <StyledCreatePortal size={3}>
            <span className="numeral">2.</span>
            <Trans t={t} i18nKey={"CreatePortalNowItIsNotInUseYet"}
              values={{ portal: portalName }}
              components={[<span key={0} />]}
            />
          </StyledCreatePortal>
          <StyledCreatePortal size={3} className="supportLink">
            <Trans t={t} i18nKey={"IfYoureStillHavingTrouble"}
              components={[
                <Link
                  href="/support-contact-form"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledCreatePortal>

          {/* Temporary hidden with  display: none; */}
          <StyledHeroForm>
            <StyledHeroInputTextBlock>
              <StyledHeroInputText
                name="whoIsResponsible"
                value={formData.whoIsResponsible}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    whoIsResponsible: e.target.value,
                  })
                }
              />

            <HCaptcha
              ref={hCaptchaRef}
              onVerify={handleHCaptchaChange}
              onExpire={() => handleHCaptchaChange(null)}
            />
            </StyledHeroInputTextBlock>

            <input
              id="email-input"
              style={{ display: "none" }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={async () => {
                const isTestEmail = await validateTestEmail(inputValue);
                setIsTestEmailValid(Boolean(isTestEmail));
              }}
              type="email"
            />

            <StyledHeroLoaderButtonWrapper>
              {status === "loading" && (
                <StyledHeroLoaderStatusLoadText
                  label={t("PleaseWait")}
                  color="#999999"
                  size={4}
                />
              )}
              <StyledHeroLoaderButton
                label={t("SendFeedback")}
                onClick={handleSubmit}
                status={status}
                disabled={
                  isTestEmailValid
                    ? false
                    : formData.captchaToken === null
                      ? true
                      : false
                }
              />
            </StyledHeroLoaderButtonWrapper>
          </StyledHeroForm>
        </Container>
      </Section>

      {(status === "success" || status === "error") && (
        <Container maxWidth="1050px">
          <StyledHeroPopupStatus>
            <StyledHeroCrossButton onClick={clearData} />
            {status === "success" && (
              <StyledHeroStatusHeading
                label={t("SendInstallFeedbackSuccessful")}
                size={5}
                level={2}
              />
            )}
            {status === "error" && (
              <StyledHeroStatusHeading
                label={t("SendInstallFeedbackError")}
                size={5}
                level={2}
              />
            )}
            <StyledHeroPopupWrapper>
              {status === "success" && (
                <StyledHeroStatusText
                  label={t("ThankYouForYourTimeAndGoodLuck")}
                  size={4}
                />
              )}
              {status === "error" && (
                <StyledHeroStatusText label={t("WeAreSorryBut")} size={4} />
              )}
              <StyledHeroPopupCloseButton
                label={t("OK")}
                variant="secondary"
                borderRadius="3px"
                fullWidth={true}
                onClick={clearData}
              />
            </StyledHeroPopupWrapper>
          </StyledHeroPopupStatus>
        </Container>
      )}
    </>
  );
};

export { Hero };
