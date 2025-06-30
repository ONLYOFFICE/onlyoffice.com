import { useTranslation } from "next-i18next";
import {
  StyledCompareFeatures,
  StyledCompareFeaturesHeading,
  StyledCompareFeaturesWrapper,
  StyledCompareFeaturesTable,
} from "./CompareFeatures.styled";
import { pricingPlans } from "../../data/pricing-plans";

const CompareFeatures = ({}) => {
  const { t } = useTranslation("workspace-prices");

  return (
    <StyledCompareFeatures>
      <StyledCompareFeaturesHeading
        level={4}
        textAlign="center"
        label={t("CompareFeatures")}
      />

      <StyledCompareFeaturesWrapper>
        <StyledCompareFeaturesTable>
          <tbody>
            <tr>
              <th className="compare-features-plan">{t("Enterprise")}</th>
              <th className="compare-features-plan">{t("Plus")}</th>
              <th className="compare-features-plan">{t("Premium")}</th>
            </tr>
            <tr>
              {pricingPlans.map((plan) => (
                <td key={plan.key}>
                  {plan.availableKeys.map((item, index) => (
                    <div className="compare-features-item" key={index}>
                      {t(item)}
                    </div>
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <td className="compare-features-heading" colSpan={3}>
                {t("FirstResponseTimeDuringWorkingHours")}
              </td>
            </tr>
            <tr>
              <th className="compare-features-plan">{t("Enterprise")}</th>
              <th className="compare-features-plan">{t("Plus")}</th>
              <th className="compare-features-plan">{t("Premium")}</th>
            </tr>
            <tr>
              {pricingPlans.map((plan) => (
                <td className="compare-features-number" key={plan.key}>
                  {plan.firstResponseTime}
                </td>
              ))}
            </tr>
            <tr>
              <td className="compare-features-heading" colSpan={3}>
                {t("SupportedModulesAndTools")}
              </td>
            </tr>
            <tr>
              <th className="compare-features-plan">{t("Enterprise")}</th>
              <th className="compare-features-plan">{t("Plus")}</th>
              <th className="compare-features-plan">{t("Premium")}</th>
            </tr>
            <tr>
              {pricingPlans.map((plan) => (
                <td key={plan.key}>
                  {plan.supportKeys.map((module, index) => (
                    <div className="compare-features-item" key={index}>
                      {t(module)}
                    </div>
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <td className="compare-features-heading" colSpan={3}>
                {t("Cases")}
              </td>
            </tr>
            <tr>
              <th className="compare-features-plan">{t("Enterprise")}</th>
              <th className="compare-features-plan">{t("Plus")}</th>
              <th className="compare-features-plan">{t("Premium")}</th>
            </tr>
            <tr>
              {pricingPlans.map((plan) => (
                <td key={plan.key}>
                  {plan.casesKeys.map((caseItem, index) => (
                    <div className="compare-features-item" key={index}>
                      {t(caseItem)}
                    </div>
                  ))}
                </td>
              ))}
            </tr>
          </tbody>
        </StyledCompareFeaturesTable>
      </StyledCompareFeaturesWrapper>
    </StyledCompareFeatures>
  );
};

export { CompareFeatures };
