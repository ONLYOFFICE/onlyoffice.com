import { useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledIntegrationContainer,
  StyledIntegrationHeading,
  StyledIntegrationIcon,
  StyledIntegrationLeft,
  StyledIntegrationRight,
  StyledIntegrationSection
} from "./Integration.styled";

const Integration = () => {
  const { t } = useTranslation("customers");

  return (
    <StyledIntegrationSection desktopSpacing={["99px", "99px"]} mobileSpacing={["20px", "16px"]}>
      <StyledIntegrationContainer maxWidth="1000px" mobileSpacing="20px">
        <StyledIntegrationLeft>
          <StyledIntegrationHeading
            color="#fff"
            label={t("IntegrationHowOnlyofficeAndOwnCloud")}
            level={2}
            size={4}
          />
          <Link
            label={t("IntegrationReadBlog")}
            color="#fff"
            textUnderline={true}
            hover="underline-none"
            target="_blank"
            href={t("IntegrationReadBlogLink")} />
        </StyledIntegrationLeft>
        <StyledIntegrationRight>
          <StyledIntegrationIcon $iconUrl={getAssetUrl("/images/templates/customers/integration/sciebo-icon.svg")} />
          <StyledIntegrationIcon $iconUrl={getAssetUrl("/images/templates/customers/integration/onlyoffice-icon.svg")} />
          <StyledIntegrationIcon $iconUrl={getAssetUrl("/images/templates/customers/integration/owncloud-icon.svg")} />
        </StyledIntegrationRight>
      </StyledIntegrationContainer>
    </StyledIntegrationSection>
  );
};

export { Integration };