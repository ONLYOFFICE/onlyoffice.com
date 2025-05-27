import { Link } from "@src/components/ui/Link";
import { StyledIntegrationContainer, StyledIntegrationHeading, StyledIntegrationIcon, StyledIntegrationLeft, StyledIntegrationRight, StyledIntegrationSection } from "./Integration.styled";

const Integration = () => {
  return (
    <StyledIntegrationSection desktopSpacing={["99px", "99px"]}>
      <StyledIntegrationContainer maxWidth="1000px">
        <StyledIntegrationLeft>
          <StyledIntegrationHeading color="#fff" label="How ONLYOFFICE and ownCloud Integration in Sciebo Helps Facilitate Research Workflow in Münster University" level={2} size={4} />
          <Link
            label="Read blog"
            color="#fff"
            textUnderline={true}
            hover="underline-none"
            target="_blank"
            href="https://www.onlyoffice.com/blog/2019/02/how-onlyoffice-and-owncloud-integration-in-sciebo-helps-facilitate-research-workflow-in-munster-university" />
        </StyledIntegrationLeft>
        <StyledIntegrationRight>
          <StyledIntegrationIcon $iconUrl="images/templates/customers/integration/sciebo-icon.svg" />
          <StyledIntegrationIcon $iconUrl="images/templates/customers/integration/onlyoffice-icon.svg" />
          <StyledIntegrationIcon $iconUrl="images/templates/customers/integration/owncloud-icon.svg" />
        </StyledIntegrationRight>
      </StyledIntegrationContainer>
    </StyledIntegrationSection>
  );
};

export { Integration };