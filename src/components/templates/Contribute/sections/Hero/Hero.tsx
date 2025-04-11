import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroImages,
  StyledScroll,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { images } from "./data/images";
import { getPreparedImages } from "./helper/random";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { useEffect, useState } from "react";
import { IHeroImage } from "./Hero.types";

const Hero = () => {
  const { t } = useTranslation("contribute");
  const [heroImages, setHeroImages] = useState<IHeroImage[]>([]);

  useEffect(() => {
    const prepared = getPreparedImages(images);
    setHeroImages(prepared);
  }, []);

  return (
    <StyledHeroSection>
      <Container>
        <StyledHeroContent>
          <Heading>
            <Trans
              t={t}
              i18nKey="HeroTitle"
              components={{
                br: <br />,
                span: <Text as="span" color="#FF6F3D" />,
              }}
            />
          </Heading>
          <Text size={1}>{t("HeroText")}</Text>
          <StyledScroll>
            <StyledHeroImages>
              {heroImages.map(({ image, ...item }, index) => {
                const {
                  isVisible = true,
                  url,
                  positionX,
                  type = "image",
                } = image;

                const imageProps = {
                  $image: url,
                  $positionX: positionX,
                  $type: type,
                  $isVisible: isVisible,
                  $top: item.top,
                  $left: item.left,
                  $right: item.right,
                  $animationDelay: item.animationDelay,
                };

                return item.link ? (
                  <Link key={`${item.link}-${index}`} href={item.link}>
                    <StyledHeroImage {...imageProps} />
                  </Link>
                ) : (
                  <StyledHeroImage key={`img-${index}`} {...imageProps} />
                );
              })}
            </StyledHeroImages>
          </StyledScroll>
        </StyledHeroContent>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
