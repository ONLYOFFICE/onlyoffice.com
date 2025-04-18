import { Trans, useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledCertificateCardsWrapper,
  StyledHeroContainer,
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroWrapper,
  StyledUsersWorldwideContent,
  StyledUsersWorldwideImage,
  StyledUsersWorldwideText,
  StyledUsersWorldwideWrapper,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";
import { Certificates } from "./data/certificates";
import { CertificateCard } from "./sub-components/CertificateCard";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("certificates");

  return (
    <StyledHeroSection
      desktopSpacing={["32px", "110px"]}
      tabletSpacing={["56px", "110px"]}
      tabletSmallSpacing={["40px", "100px"]}
      mobileSpacing={["16px", "70px"]}
    >
      <StyledHeroContainer>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <Heading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="OOCertificates"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </Heading>
            <StyledHeroText label={t("ExploreOfficialCertifications")} />
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </StyledHeroContainer>
      <Container>
        <StyledCertificateCardsWrapper>
          {Certificates.map((item, index) => (
            <CertificateCard
              key={index}
              image={item.image}
              date={t(item.date)}
              product={{ ...item.product, label: t(item.product.label) }}
              heading={{
                label: t(item.heading.label),
                link: t(item.heading.link),
              }}
            />
          ))}
        </StyledCertificateCardsWrapper>
        <StyledUsersWorldwideWrapper>
          <StyledUsersWorldwideContent>
            <StyledUsersWorldwideImage />
            <StyledUsersWorldwideText level={3}>
              <Trans
                t={t}
                i18nKey="OOUsers"
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledUsersWorldwideText>
          </StyledUsersWorldwideContent>
          <Button
            id="certificates-users-button"
            label={t("StartInTheCloud")}
            as="a"
            href="/docspace-registration"
          />
        </StyledUsersWorldwideWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
