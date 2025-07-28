import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import {
  StyledHeroButtonWrapper,
  StyledHeroHeading,
  StyledHeroSection,
  StyledHeroSubHeading
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("diagram-viewer");

  return (
    <StyledHeroSection background="#292B6B">
      <Container>
        <StyledHeroHeading
          textAlign="center"
          color="#fff"
        >
          <Trans
            t={t}
            i18nKey="OnlineDiagramViewerForYourWebApp"
            components={[
              <Text key="0" as={"span"} color="main" />
            ]}
          />
        </StyledHeroHeading>
        <StyledHeroSubHeading
          label={t("ViewAndNavigateMicrosoftVisioDiagramsWithEase")}
          textAlign="center"
          color="#fff"
          level={3}
          size={4}
        />
        <StyledHeroButtonWrapper>
          <Button
            as="a"
            href="/download#docs-enterprise"
            label={t("GetItNow")}
          />
        </StyledHeroButtonWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };