import { useEffect, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroIcons,
  StyledHeroIconsWrapper,
  StyledHeroIcon,
  StyledHeroIconLink,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { images } from "./data/images";
import { getPreparedImages } from "./helper/random";
import { IHeroImage } from "./Hero.types";


const Hero = () => {
  const { t } = useTranslation("contribute");
  const [heroImages, setHeroImages] = useState<IHeroImage[]>([]);

  useEffect(() => {
    const prepared = getPreparedImages(images);
    setHeroImages(prepared);
  }, []);

  return (
    <StyledHeroSection background="#f5f5f5">
      <Container>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading>
              <Trans
                t={t}
                i18nKey="HeroTitle"
                components={{
                  br: <br />,
                  span: <Text as="span" color="#FF6F3D" />,
                }}
              />
            </StyledHeroHeading>

            <StyledHeroText size={1}>{t("HeroText")}</StyledHeroText>
          </StyledHeroContent>

          <StyledHeroIcons>
            <StyledHeroIconsWrapper>
              {heroImages.map(({ image, ...item }, index) => {
                const {
                  isVisible = true,
                  url,
                  positionX,
                  type = "image",
                } = image;

                return (
                  <StyledHeroIcon
                    key={index}
                    $image={url}
                    $positionX={positionX}
                    $type={type}
                    $isVisible={isVisible}
                    $top={item.top}
                    $left={item.left}
                    $right={item.right}
                    $animationDelay={item.animationDelay}
                  >
                    {item.link ? <StyledHeroIconLink href={item.link} /> : null}
                  </StyledHeroIcon>
                );
              })}
            </StyledHeroIconsWrapper>
          </StyledHeroIcons>
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
