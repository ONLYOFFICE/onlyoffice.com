import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import {
  StyledMarketplaceQuote,
  StyledMarketplaceStars,
  StyledMarketplaceWrapper,
} from "./Marketplace.styled";

const Marketplace = () => {
  const { t } = useTranslation("education");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["88px", "112px"]}
      tabletSmallSpacing={["64px", "88px"]}
    >
      <Container>
        <StyledMarketplaceWrapper>
          <img
            src="/images/templates/education/marketplace/eas-logo.png"
            alt={t("EducationalAppStore")}
          />
          <div>
            <Heading level={4} size={5} label={t("EducationalAppStore")} />
            <Text size={1} label={t("ADiscoveryMarketplace")} />
          </div>
          <StyledMarketplaceStars>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                width="16"
                height="16"
                src="/images/templates/education/marketplace/star.svg"
                alt="star"
              />
            ))}
          </StyledMarketplaceStars>
          <StyledMarketplaceQuote>
            <Trans
              t={t}
              i18nKey="OOIsByFarTheBest"
              components={[
                <Link
                  href="https://www.educationalappstore.com/app/onlyoffice-documents"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledMarketplaceQuote>
        </StyledMarketplaceWrapper>
      </Container>
    </Section>
  );
};

export { Marketplace };
