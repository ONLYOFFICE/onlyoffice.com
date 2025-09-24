import { useState, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledUnsubscribe,
  StyledUnsubscribeWrapper,
  StyledUnsubscribeBody,
  StyledUnsubscribeImage,
  StyledUnsubscribeUpdates,
  StyledUnsubscribeUpdatesHeading,
  StyledUnsubscribeUpdatesText,
  StyledUnsubscribeSuccessLogo,
  StyledUnsubscribeBanner,
  StyledUnsubscribeBannerBtn,
} from "./Unsubscribe.styled";
import { IUnsubscribeTemplate } from "./Unsubscribe.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import {
  SubscribeInput,
  ISubscribeInput,
} from "@src/components/widgets/SubscribeInput";
import { validateEmail } from "@src/utils/validators";

const UnsubscribeTemplate = ({ email }: IUnsubscribeTemplate) => {
  const { t } = useTranslation("unsubscribe");
  const router = useRouter();

  const [activeBlock, setActiveBlock] = useState<"portals" | "marketing">(
    "portals",
  );
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<
    "resubscribe" | "unsubscribe" | "notRegistered"
  >("unsubscribe");
  const [subscribeStatus, setSubscribeStatus] =
    useState<ISubscribeInput["status"]>("default");

  useEffect(() => {
    const { utm_source } = router.query;
    const hash = window.location.hash;

    if (utm_source === "newsletter" || hash === "#subscribe") {
      setActiveBlock("marketing");
    }
  }, [router.query]);

  const handleSubscription = async (
    subscribe: boolean,
    newsOnly: boolean,
    statusValue: "resubscribe" | "unsubscribe",
  ) => {
    const res = await fetch("/api/subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: router.query.id,
        subscribe,
        newsOnly,
      }),
    });

    const data = await res.json();
    if (data.status === "success") {
      setStatus(statusValue);
      setActiveBlock("portals");
    } else {
      setStatus("notRegistered");
    }
  };

  const handleReSubscribe = () => handleSubscription(true, true, "resubscribe");
  const handleUnsubscribe = () =>
    handleSubscription(false, false, "unsubscribe");

  const handleSubscribeNews = async () => {
    if (subscribeStatus === "error" || subscribeStatus === "success") {
      setSubscribeStatus("default");
      return;
    }

    if (subscribeStatus !== "default") return;

    if (!validateEmail(value)) {
      setSubscribeStatus("error");
      return;
    }

    setSubscribeStatus("loading");

    const res = await fetch("/api/sendsubscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "",
        email: value,
        type: "Common",
        locale: router.locale,
      }),
    });
    const data = await res.json();

    if (data.status === "success") {
      setSubscribeStatus("success");
    } else {
      setSubscribeStatus("error");
    }
  };

  return (
    <StyledUnsubscribe
      background="#f9f9f9"
      desktopSpacing={["160px", "250px"]}
      tabletSpacing={["136px", "250px"]}
      tabletSmallSpacing={["128px", "80px"]}
      mobileSpacing={["128px", "80px"]}
    >
      <Container maxWidth="1000px">
        {status == "unsubscribe" ? (
          activeBlock === "marketing" ? (
            <>
              <StyledUnsubscribeWrapper>
                <StyledUnsubscribeBody>
                  <StyledUnsubscribeImage $unsubscribe />
                  <Heading level={1} label={t("UnsubscribeSuccessful")} />
                  <Text size={3}>
                    <Trans
                      t={t}
                      i18nKey="TheEmailHasBeenSuccessfullyRemoved"
                      values={{ email }}
                      components={[<Text key="0" as="b" />]}
                    />
                  </Text>
                  <Text
                    size={3}
                    label={t("IfYouDidThisInErrorYouMayResubscribe")}
                  />
                </StyledUnsubscribeBody>
                <Button
                  onClick={handleReSubscribe}
                  data-testid="marketing-resubscribe-button"
                  label={t("Resubscribe")}
                />
              </StyledUnsubscribeWrapper>

              <StyledUnsubscribeBanner>
                <Text size={4}>
                  <Trans
                    t={t}
                    i18nKey="WouldYouLikToUnsubscribeFromAllOOEmails"
                    components={[
                      <StyledUnsubscribeBannerBtn
                        onClick={handleUnsubscribe}
                        data-testid="unsubscribe-button"
                        key="0"
                      />,
                    ]}
                  />
                </Text>
              </StyledUnsubscribeBanner>
            </>
          ) : (
            <>
              <StyledUnsubscribeWrapper>
                <StyledUnsubscribeBody>
                  <StyledUnsubscribeImage $unsubscribe />
                  <Heading
                    level={1}
                    label={t("YouHaveSuccessfullyUnsubscribed")}
                  />
                  <Text size={3}>
                    <Trans
                      t={t}
                      i18nKey="TheEmailAddressHasBeenSuccessfullyRemoved"
                      values={{ email }}
                      components={[<Text key="0" as="b" />]}
                    />
                  </Text>
                  <Text
                    size={3}
                    label={t("IfYouDidThisByMistakeYouCanResubscribe")}
                  />
                </StyledUnsubscribeBody>
                <Button
                  onClick={handleReSubscribe}
                  data-testid="portals-resubscribe-button"
                  label={t("Resubscribe")}
                />
              </StyledUnsubscribeWrapper>

              <StyledUnsubscribeUpdates>
                <StyledUnsubscribeUpdatesHeading
                  level={2}
                  size={4}
                  textAlign="center"
                  label={t("OOUpdatesAndSpecialOffers")}
                />
                <StyledUnsubscribeUpdatesText
                  size={3}
                  textAlign="center"
                  label={t("WishToKeepUpToDate")}
                />
                <SubscribeInput
                  dataTestId="unsubscribe-input"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                  onFocus={() => setSubscribeStatus("default")}
                  onSubmit={handleSubscribeNews}
                  value={value}
                  placeholder={t("YourEmail")}
                  buttonContent={t("Subscribe")}
                  variant="tertiary"
                  status={subscribeStatus}
                  caption={
                    value.length === 0
                      ? t("EmailIsEmpty")
                      : !validateEmail(value)
                        ? t("EmailIsIncorrect")
                        : ""
                  }
                />
              </StyledUnsubscribeUpdates>
            </>
          )
        ) : status == "resubscribe" ? (
          <>
            <StyledUnsubscribeWrapper>
              <StyledUnsubscribeBody>
                <StyledUnsubscribeImage $resubscribe />
                <StyledUnsubscribeSuccessLogo />
                <Heading level={1} label={t("YouHaveBeenResubscribed")} />
                <Text size={3}>
                  <Trans
                    t={t}
                    i18nKey="TheEmailHasBeenSuccessfullyAdded"
                    values={{ email }}
                    components={[<Text key="0" as="b" />]}
                  />
                </Text>
              </StyledUnsubscribeBody>
            </StyledUnsubscribeWrapper>

            <StyledUnsubscribeBanner>
              <Text size={4}>
                <Trans
                  t={t}
                  i18nKey="WouldYouLikToUnsubscribeFromAllOOEmails"
                  components={[
                    <StyledUnsubscribeBannerBtn
                      onClick={handleUnsubscribe}
                      data-testid="unsubscribe-button"
                      key="0"
                    />,
                  ]}
                />
              </Text>
            </StyledUnsubscribeBanner>
          </>
        ) : status === "notRegistered" ? (
          <Heading level={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="TheEmailAddressIsNotRegistered"
              values={{ email }}
              components={[<Text key="0" as="b" />]}
            />
          </Heading>
        ) : null}
      </Container>
    </StyledUnsubscribe>
  );
};

export { UnsubscribeTemplate };
