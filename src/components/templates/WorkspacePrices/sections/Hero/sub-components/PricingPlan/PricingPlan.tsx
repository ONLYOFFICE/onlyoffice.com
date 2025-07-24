import { useTranslation } from "next-i18next";
import {
  StyledPricingPlan,
  StyledPricingPlanHeader,
  StyledPricingPlanHeading,
  StyledPricingPlanPrice,
  StyledPricingPlanBtn,
  StyledPricingPlanCounterSelector,
  StyledPricingPlanItem,
  StyledPricingPlanFeatures,
  StyledPricingPlanFeaturesHeading,
  StyledPricingPlanFeaturesList,
  StyledPricingPlanFeaturesItem,
} from "./PricingPlan.styled";
import { IPricingPlan } from "./PricingPlan.types";
import { Text } from "@src/components/ui/Text";
import { getCurrencyByLocale } from "@src/utils/getCurrencyByLocale";

const PricingPlan = ({
  locale,
  active,
  heading,
  price,
  url,
  numberOfUsers,
  setNumberOfUsers,
  availableList,
  firstResponseTime,
  supportList,
  casesList,
  planKey,
}: IPricingPlan) => {
  const { t } = useTranslation("workspace-prices");
  const currency = getCurrencyByLocale(locale);

  return (
    <StyledPricingPlan $active={active}>
      <StyledPricingPlanHeader>
        <StyledPricingPlanHeading level={3} label={heading} />

        <Text
          as="div"
          fontSize="13px"
          lineHeight="16px"
          label={t("LifetimeLicense")}
        />

        <div>
          <StyledPricingPlanPrice>
            {numberOfUsers === "more" ? (
              <span>{t("UponRequest")}</span>
            ) : (
              <>
                <span>{currency.symbol}</span>
                {price}
              </>
            )}
          </StyledPricingPlanPrice>
          <Text
            as="div"
            fontSize="13px"
            lineHeight="16px"
            label={t("PerOneServer")}
          />
        </div>

        {numberOfUsers === "more" ? (
          <StyledPricingPlanBtn
            data-testid={`${planKey}-get-a-quote-button`}
            forwardedAs="a"
            href="mailto:sales@onlyoffice.com?subject=More%20connections%20for%20Enterprise%20Edition"
            variant="secondary"
            label={t("GetAQuote")}
          />
        ) : (
          <StyledPricingPlanBtn
            data-testid={`${planKey}-buy-now-button`}
            forwardedAs="a"
            target="_blank"
            href={url}
            variant={active ? "primary" : "secondary"}
            label={t("BuyNow")}
          />
        )}

        <StyledPricingPlanCounterSelector
          bgColor="#f5f5f5"
          buttonSize="medium"
          valueSize="small"
          label={t("NumberOfUsers")}
          items={[
            { id: "50", label: "50" },
            { id: "100", label: "100" },
            { id: "200", label: "200" },
            { id: "more", label: t("More") },
          ]}
          selected={numberOfUsers}
          onChange={(value) => setNumberOfUsers(value)}
        />

        <StyledPricingPlanFeaturesHeading
          $displayOnMobile
          forwardedAs="div"
          size={4}
          color="#808080"
          textAlign="center"
          label={t("AvailableOnWindowsServer/Linux")}
        />
      </StyledPricingPlanHeader>

      <StyledPricingPlanItem>
        <StyledPricingPlanFeatures>
          <StyledPricingPlanFeaturesHeading
            $rowGap="16px"
            forwardedAs="div"
            size={4}
            color="#808080"
            textAlign="center"
            label={t("AvailableOnWindowsServer/Linux")}
          />

          <StyledPricingPlanFeaturesList>
            {availableList.map((item, index) => (
              <StyledPricingPlanFeaturesItem key={index}>
                {item}
              </StyledPricingPlanFeaturesItem>
            ))}
          </StyledPricingPlanFeaturesList>
        </StyledPricingPlanFeatures>
      </StyledPricingPlanItem>

      <StyledPricingPlanItem $withBorder>
        <Text
          as="div"
          size={4}
          textAlign="center"
          label={t("FirstResponseTime")}
        />
        <Text as="div" size={4} textAlign="center">
          <Text
            as="span"
            fontSize="16px"
            fontWeight={700}
            lineHeight="26px"
            label={firstResponseTime}
          />{" "}
          {t("duringWorkingHours")}
        </Text>
      </StyledPricingPlanItem>

      <StyledPricingPlanItem>
        <StyledPricingPlanFeatures>
          <StyledPricingPlanFeaturesHeading
            $rowGap="8px"
            forwardedAs="div"
            size={4}
            fontWeight={700}
            label={t("SupportedModulesAndTools")}
          />

          <StyledPricingPlanFeaturesList>
            {supportList.map((item, index) => (
              <StyledPricingPlanFeaturesItem key={index}>
                {item}
              </StyledPricingPlanFeaturesItem>
            ))}
          </StyledPricingPlanFeaturesList>
        </StyledPricingPlanFeatures>

        <StyledPricingPlanFeatures>
          <StyledPricingPlanFeaturesHeading
            $rowGap="8px"
            forwardedAs="div"
            size={4}
            fontWeight={700}
            label={t("Cases")}
          />

          <StyledPricingPlanFeaturesList>
            {casesList.map((item, index) => (
              <StyledPricingPlanFeaturesItem key={index}>
                {item}
              </StyledPricingPlanFeaturesItem>
            ))}
          </StyledPricingPlanFeaturesList>
        </StyledPricingPlanFeatures>
      </StyledPricingPlanItem>
    </StyledPricingPlan>
  );
};

export { PricingPlan };
