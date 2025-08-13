import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledGratitudionBanner,
  StyledGratitudionBannerImage,
  StyledGratitudionBannerHeading,
  StyledGratitudionBannerText,
  StyledGratitudionBannerUnsubscribe,
} from "./GratitudionBanner.styled";
import { Link } from "@src/components/ui/Link";

const GratitudionBanner = () => {
  const { t } = useTranslation("subscribe");
  const router = useRouter();

  return (
    <StyledGratitudionBanner>
      <StyledGratitudionBannerImage />
      <div>
        <StyledGratitudionBannerHeading
          level={3}
          size={4}
          label={t("ThankYouForChoosingOO")}
        />
        <StyledGratitudionBannerText
          size={2}
          label={t("WeReThrilledToContinueGrowingWithYou")}
        />
        <StyledGratitudionBannerUnsubscribe size={3} color="#666666">
          <Trans
            t={t}
            i18nKey="NotInterestedInOOUpdatesOrSubscribedByMistake"
            components={[
              <Link
                key={0}
                data-testid="unsubscribe-link"
                href={`/Unsubscribe${!router.query.SubscribePage_testing && router.query.id ? `?id=${router.query.id}#subscribe` : ""}`}
                color="main"
                textUnderline
                hover="underline-none"
              />,
            ]}
          />
        </StyledGratitudionBannerUnsubscribe>
      </div>
    </StyledGratitudionBanner>
  );
};

export { GratitudionBanner };
