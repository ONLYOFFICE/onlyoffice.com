import {
  StyledSection,
  StyledContainer,
  StyledCardContainer,
  StyledLink,
} from "./Security.styled";
import { useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Card } from "./sub-component/Card";
import { Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";

const Security = () => {
  const { t } = useTranslation("docspace");
  return (
    <StyledSection
      desktopSpacing={["162px", "115px"]}
      tabletSpacing={["162px", "81px"]}
      tabletSmallSpacing={["120px", "86px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <StyledContainer>
        <Heading level={2} color="#ffffff">
          <Trans
            t={t}
            i18nKey={"SecurityHeading"}
            components={[<Text as="span" color="main" key={0} />]}
          />
        </Heading>
        <StyledCardContainer>
          {items.map((item, id) => (
            <Card key={id} {...item} />
          ))}
        </StyledCardContainer>

        <StyledLink
          href="/security"
          label={t("SecurityLinkLabel")}
          textUnderline={true}
          color="main"
        />
      </StyledContainer>
    </StyledSection>
  );
};

export { Security };
