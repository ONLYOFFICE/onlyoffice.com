import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledCollaborationsFeatures,
  StyledCollaborationsFeaturesContent,
  StyledCollaborationsFeaturesImage,
  StyledCollaborationsFeaturesImageOverlay,
  StyledCollaborationsFeaturesWrapper,
} from "./CollaborationFeatures.styled";
import { useState } from "react";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { CollaborationFeatureModal } from "./sub-components/CollaborationFeatureModal/CollaborationFeatureModal";
import { ICollaborationsFeatures } from "./CollaborationFeatures.types";
import { useTranslation } from "next-i18next";

const CollaborationFeatures = ({ features }: ICollaborationsFeatures) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { t } = useTranslation("CollaborationsFeatures");

  return (
    <Section
      desktopSpacing={["160px", "112px"]}
      tabletSpacing={["160px", "112px"]}
      tabletSmallSpacing={["131px", "88px"]}
      mobileSpacing={["72px", "48px"]}
    >
      <Container>
        <StyledCollaborationsFeaturesWrapper>
          {features.map(({ image, heading, text }, index) => {
            const isEven = index % 2 === 1;
            return (
              <StyledCollaborationsFeatures key={index}>
                <StyledCollaborationsFeaturesImage
                  $isEven={isEven}
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentImageIndex(index);
                  }}
                >
                  <img
                    width="100%"
                    height="100%"
                    src={image.src}
                    alt={image.alt}
                  />
                  <StyledCollaborationsFeaturesImageOverlay>
                    {t("TakeAScreenshot")}
                  </StyledCollaborationsFeaturesImageOverlay>
                </StyledCollaborationsFeaturesImage>
                <StyledCollaborationsFeaturesContent $isEven={isEven}>
                  <Heading level={3} size={4} label={heading} />
                  <Text size={2}>{text}</Text>
                </StyledCollaborationsFeaturesContent>
              </StyledCollaborationsFeatures>
            );
          })}
          <CollaborationFeatureModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            images={features.map(({ image }) => ({
              src: image.src,
              alt: image.alt,
            }))}
            currentImageIndex={currentImageIndex}
          />
        </StyledCollaborationsFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { CollaborationFeatures };
