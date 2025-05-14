import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroPlans,
  StyledHeroFeaturesHeading,
} from "./Hero.styled";
import { IDocSpacePricesTemplate } from "@src/components/templates/DocSpacePrices";
import { Container } from "@src/components/ui/Container";
import { PlanCard } from "./sub-components/PlanCard";
import { FeaturesTable } from "./sub-components/FeaturesTable";
import { BusinessModal } from "./sub-components/BusinessModal";
import { EnterpriseModal } from "./sub-components/EnterpriseModal";

const Hero = ({ locale, productsData }: IDocSpacePricesTemplate) => {
  const { t } = useTranslation("docspace-prices");
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [isEnterpriseModalOpen, setIsEnterpriseModalOpen] = useState(false);

  return (
    <StyledHero
      background="#f9f9f9"
      desktopSpacing={["160px", "112px"]}
      tabletSpacing={["152px", "88px"]}
      tabletSmallSpacing={["128px", "80px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroHeading
          level={1}
          textAlign="center"
          label={t("OODocSpace")}
        />

        <StyledHeroText textAlign="center" label={t("PricingPlans")} />

        <StyledHeroPlans>
          <PlanCard
            locale={locale}
            heading={t("Startup")}
            subHeading={t("Cloud")}
            headingLabel={t("LimitedTimeOffer")}
            price={{
              free: true,
            }}
            btn={{
              label: t("StartNow"),
              url: "/docspace-registration",
            }}
          />

          <PlanCard
            locale={locale}
            heading={t("Business")}
            subHeading={t("Cloud")}
            price={{
              prev: locale === "zh" ? 227 : 30,
              current: productsData.business.price,
              label: t("PerAdminMonth"),
            }}
            isActive={true}
            btn={{
              label: t("GetAQuote"),
              onClick: () => setIsBusinessModalOpen(true),
            }}
          />

          <PlanCard
            locale={locale}
            heading={t("Enterprise")}
            subHeading={t("OnPremises")}
            price={{
              from: true,
              current: productsData.enterpriseUsers100.price,
              label: t("PerServer"),
            }}
            btn={{
              label: t("GetAQuote"),
              onClick: () => setIsEnterpriseModalOpen(true),
            }}
            link={{
              label: t("TryItFree"),
              url: "/download?from=docspace-enterprise-prices#docspace-enterprise",
            }}
          />
        </StyledHeroPlans>

        <StyledHeroFeaturesHeading
          level={4}
          textAlign="center"
          label={t("ComparePlanFeatures")}
        />

        <FeaturesTable
          setIsBusinessModalOpen={setIsBusinessModalOpen}
          setIsEnterpriseModalOpen={setIsEnterpriseModalOpen}
        />

        <BusinessModal
          isOpen={isBusinessModalOpen}
          onClose={() => setIsBusinessModalOpen(false)}
          locale={locale}
          productsData={productsData}
        />
        <EnterpriseModal
          isOpen={isEnterpriseModalOpen}
          onClose={() => setIsEnterpriseModalOpen(false)}
          locale={locale}
          productsData={productsData}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
