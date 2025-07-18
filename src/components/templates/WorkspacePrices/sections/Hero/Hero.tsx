import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroTabs,
  StyledHeroTab,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeader,
  StyledHeroLink,
  StyledHeroPricingPlans,
  StyledHeroPricingPlanPlaceholder,
  StyledHeroPricingPlanText,
} from "./Hero.styled";
import { IWorkspacePricesTemplate } from "../../WorkspacePrices.types";
import { IPricingPlan } from "./sub-components/PricingPlan";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Reseller } from "@src/components/modules/pricing/Reseller";
import { PricingPlan } from "./sub-components/PricingPlan";
import { CompareFeatures } from "./sub-components/CompareFeatures";
import { pricingPlans } from "./data/pricing-plans";

const Hero = ({ locale, productsData }: IWorkspacePricesTemplate) => {
  const { t } = useTranslation("workspace-prices");

  const [numberOfUsers, setNumberOfUsers] = useState<{
    basic: IPricingPlan["numberOfUsers"];
    plus: IPricingPlan["numberOfUsers"];
    premium: IPricingPlan["numberOfUsers"];
  }>({
    basic: "50",
    plus: "50",
    premium: "50",
  });

  const productMap = {
    basic: {
      50: productsData.basic50,
      100: productsData.basic100,
      200: productsData.basic200,
      more: { price: null, url: "" },
    },
    plus: {
      50: productsData.plus50,
      100: productsData.plus100,
      200: productsData.plus200,
      more: { price: null, url: "" },
    },
    premium: {
      50: productsData.premium50,
      100: productsData.premium100,
      200: productsData.premium200,
      more: { price: null, url: "" },
    },
  };

  return (
    <StyledHero
      background="#f5f5f5"
      desktopSpacing={["120px", "0"]}
      tabletSpacing={["120px", "0"]}
      tabletSmallSpacing={["128px", "0"]}
      mobileSpacing={["96px", "0"]}
    >
      <Container>
        <StyledHeroTabs>
          <StyledHeroTab
            onClick={() =>
              history.pushState(null, "", "#workspace-on-premises")
            }
          >
            {t("OnPremises")}
          </StyledHeroTab>
        </StyledHeroTabs>
      </Container>

      <StyledHeroWrapper>
        <Container>
          <StyledHeroContent
            id="workspace-on-premises"
            forwardedAs="div"
            desktopSpacing={["82px", "112px"]}
          >
            <StyledHeroHeader>
              <Heading level={1} label={t("OOWorkspaceEnterprise")} />

              <StyledHeroLink
                color="main"
                textUnderline
                hover="underline-none"
                href="/download-workspace?from=workspace-enterprise-prices"
                label={t("TryFreeFor30Days")}
              />

              <Text size={1} label={t("PlansAndPricing")} />
            </StyledHeroHeader>

            <StyledHeroPricingPlans>
              {pricingPlans.map((plan) => {
                const product = productMap[plan.key]?.[numberOfUsers[plan.key]];

                return (
                  <PricingPlan
                    key={plan.key}
                    locale={locale}
                    active={plan.key === "plus"}
                    heading={t(plan.headingKey)}
                    price={product.price}
                    url={product.url}
                    numberOfUsers={numberOfUsers[plan.key]}
                    setNumberOfUsers={(value) =>
                      setNumberOfUsers((prev) => ({
                        ...prev,
                        [plan.key]: value,
                      }))
                    }
                    availableList={plan.availableKeys.map((item) => t(item))}
                    firstResponseTime={plan.firstResponseTime}
                    supportList={plan.supportKeys.map((item) => t(item))}
                    casesList={plan.casesKeys.map((item) => t(item))}
                    planKey={plan.key}
                  />
                );
              })}

              <CompareFeatures />

              <StyledHeroPricingPlanPlaceholder
                aria-hidden="true"
                role="presentation"
              ></StyledHeroPricingPlanPlaceholder>
              <StyledHeroPricingPlanPlaceholder
                aria-hidden="true"
                role="presentation"
              ></StyledHeroPricingPlanPlaceholder>

              <StyledHeroPricingPlanText>
                {t("*consultingOnlyForActivePassiveConfiguration")}
              </StyledHeroPricingPlanText>
            </StyledHeroPricingPlans>

            <Reseller />
          </StyledHeroContent>
        </Container>
      </StyledHeroWrapper>
    </StyledHero>
  );
};

export { Hero };
