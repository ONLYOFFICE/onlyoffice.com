import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import {
  StyledESContainer,
  StyledBgImage,
  StyledESTop,
  StyledESHeading,
  StyledESSection,
  StyledHeroList,
  StyledHeroListItem,
} from "./EnterpriseSolution.styled";

const EnterpriseSolution = () => {
  const { t } = useTranslation("healthcare");

  return (
    <StyledESSection
      background="linear-gradient(162.82deg,#FFC671 0%,#FF7541 64.06%,#FF6F3D 100%)"
      tabletSpacing={["112px", "112px"]}
      tabletSmallSpacing={["116px", "104px"]}
    >
      <StyledBgImage />
      <StyledESContainer>
        <StyledESTop>
          <img
            src="/images/templates/healthcare/enterprise-solution/solution.svg"
            alt="solution.svg"
          />
          <StyledESHeading level={3} size={3} label={t("EnterpriseReadySolution")} />
          <StyledESHeading level={5} size={5} label={t("OOProvidesEnterpriseVersion")} className="features-subheader" />
        </StyledESTop>
        <StyledHeroList>
          {items.map((item, index) => (
            <StyledHeroListItem key={index}>
              <Trans
                t={t}
                i18nKey={String(item.label)}
                components={[<Text key="0" />,]}
              />
            </StyledHeroListItem>
          ))}
        </StyledHeroList>
      </StyledESContainer>
    </StyledESSection>
  );
};

export { EnterpriseSolution };
