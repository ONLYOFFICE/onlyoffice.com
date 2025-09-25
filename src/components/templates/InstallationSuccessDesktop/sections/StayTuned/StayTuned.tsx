import { Trans, useTranslation } from "next-i18next";
import { useState } from "react";
import {
  StyledStayTunedContainer,
  StyledStayTunedSection,
  StyledStayTunedTitle,
  StyledStayTunedSubTitle,
  StyledFormWrapper,
  StyledForm,
  StyledStayTunedWrapper,
} from "./StayTuned.styled";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { validateEmail } from "@src/utils/validators";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { useRouter } from "next/router";
import { Input } from "@src/components/ui/Input";

const StayTuned = () => {
  const { t } = useTranslation("installation-success-desktop");

  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [status, setStatus] = useState<ILoaderButton["status"]>("default");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { locale } = useRouter();

  const resetForm = () => {
    setEmail("");
    setIsEmpty(false);
    setStatus("default");
    setIsSuccess(false);
    setErrorMessage("");
  };

  const onSubmit = async () => {
    if (!email) {
      setIsEmpty(true);
      setStatus("error");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/sendsubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "",
          email,
          type: "Common",
          locale,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setIsSuccess(true);
      } else {
        setStatus("error");
        setErrorMessage(data.message);
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(resetForm, 2500);
    }
  };

  const handleInputClick = () => {
    setIsEmpty(false);
    setStatus("default");
  };

  return (
    <StyledStayTunedSection
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["112px", "112px"]}
      tabletSmallSpacing={["80px", "91px"]}
      mobileSpacing={["48px", "56px"]}
      background="linear-gradient(136deg,#ffc671 0%,#ff7541 59.38%,#ff6f3d 100%)"
    >
      <StyledStayTunedContainer>
        <StyledStayTunedWrapper>
          <StyledStayTunedTitle level={2} size={3} label={t("StayTuned")} />
          <StyledStayTunedSubTitle size={1} label={t("StayTunedSubTitle")} />
          <StyledFormWrapper>
            <StyledForm $locale={locale}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("Placeholder")}
                caption={
                  isEmpty
                    ? t("EmailIsEmpty")
                    : !validateEmail(email)
                      ? t("EmailIsIncorrect")
                      : errorMessage
                }
                status={
                  isEmpty || errorMessage
                    ? "error"
                    : email.length > 0
                      ? validateEmail(email)
                        ? "success"
                        : "error"
                      : "default"
                }
                onClick={handleInputClick}
              />
              <LoaderButton
                onClick={onSubmit}
                status={status}
                label={t("Subscribe")}
              />
            </StyledForm>
            {isSuccess ? (
              <Text size={3} color="#808080">
                {t("ThankYouForSubscribing")}
              </Text>
            ) : (
              <Text size={3} color="#808080">
                <Trans
                  t={t}
                  i18nKey="StayTunedText"
                  components={[
                    <Link
                      href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6615734&doc=cy9XcGc5TXNONjVTMkNrR2NZUEVTT2E1Y1FDZGVRQ1YvOTJYTnpkZ3JEWT0_IjY2MTU3MzQi0"
                      target="_blank"
                      color="main"
                      textUnderline
                      hover="underline-none"
                      key="0"
                    />,
                    <Link
                      href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                      target="_blank"
                      color="main"
                      textUnderline
                      hover="underline-none"
                      key="1"
                    />,
                  ]}
                />
              </Text>
            )}
          </StyledFormWrapper>
        </StyledStayTunedWrapper>
      </StyledStayTunedContainer>
    </StyledStayTunedSection>
  );
};

export { StayTuned };
