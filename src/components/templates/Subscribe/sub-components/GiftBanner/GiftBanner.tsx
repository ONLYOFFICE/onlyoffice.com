import { useTranslation, Trans } from "next-i18next";
import toast from "react-hot-toast";
import {
  StyledGiftBanner,
  StyledGiftBannerImage,
  StyledGiftBannerWrapper,
  StyledGiftBannerHeading,
  StyledGiftBannerText,
  StyledGiftBannerCode,
} from "./GiftBanner.styled";
import { Text } from "@src/components/ui/Text";
import { Tooltip } from "@src/components/ui/Tooltip";

const GiftBanner = () => {
  const { t } = useTranslation("subscribe");

  return (
    <StyledGiftBanner>
      <StyledGiftBannerImage />
      <StyledGiftBannerWrapper>
        <StyledGiftBannerHeading
          level={3}
          size={4}
          label={t("ASpecialThankYouGift")}
        />
        <StyledGiftBannerText size={1}>
          <Trans
            t={t}
            i18nKey="AsATokenOfOurAppreciation"
            components={[<Text as="b" color="#ff6f3d" key="0" />]}
          />
        </StyledGiftBannerText>

        <StyledGiftBannerCode forwardedAs="div" size={1}>
          <Trans
            t={t}
            i18nKey="SimplyUseTheCodeAtCheckout"
            components={[
              <Tooltip
                key={0}
                id="code-tooltip"
                onClick={() =>
                  navigator.clipboard.writeText("THANKYOU5").then(() => {
                    toast.success(() => t("TheCodeHasBeenCopied"), {
                      style: {
                        borderRadius: "3px",
                        padding: "15px",
                        fontSize: "13px",
                        lineHeight: "13px",
                        color: "#000000",
                        backgroundColor: "#bcdf7e",
                        boxShadow: "1px 2px 4px #d1d1d1",
                      },
                    });
                  })
                }
                className="gift-banner-code"
                tabIndex={-1}
                float
                offset={24}
                place="bottom-start"
                content={t("CopyCode")}
              ></Tooltip>,
            ]}
          />
        </StyledGiftBannerCode>
      </StyledGiftBannerWrapper>
    </StyledGiftBanner>
  );
};

export { GiftBanner };
