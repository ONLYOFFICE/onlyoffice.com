import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import {
  StyledAmbassadorImage,
  StyledAmbassadorReview,
  StyledAmbassadorReviewLogos,
  StyledAmbassadorReviewText,
  StyledAmbassadorText,
  StyledAmbassadorWrapper,
} from "./Ambassador.styled";
import { Button } from "@src/components/ui/Button";
import { StarsRatingLogo } from "@src/components/widgets/StarsRatingLogo";
import { starsRatingItems } from "./data/items";

const Ambassador = () => {
  const { t } = useTranslation("influencer-program");

  return (
    <Section
      tabletSmallSpacing={["88px", "96px"]}
      mobileSpacing={["48px", "76px"]}
      background="#f5f5f5"
    >
      <Container>
        <StyledAmbassadorWrapper>
          <Heading level={2} size={3} textAlign="center">
            <Trans
              t={t}
              i18nKey="BecomeAmbassador"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>
          <StyledAmbassadorText
            size={1}
            label={t("OOAmbassadors")}
            textAlign="center"
          />
          <Button
            as="a"
            href={t("OOAmbassadorsLink")}
            variant="secondary"
            label={t("JoinNow")}
          />
          <StyledAmbassadorImage />

          <StyledAmbassadorReview>
            <Heading level={2} size={3} textAlign="center">
              <Trans
                t={t}
                i18nKey="Review"
                components={[<Text as="span" color="main" key="0" />]}
              />
            </Heading>
            <StyledAmbassadorReviewText
              size={1}
              label={t("ShareYourOpinion")}
              textAlign="center"
            />
            <StyledAmbassadorReviewLogos>
              {starsRatingItems.map((item, index) => (
                <li key={index}>
                  <StarsRatingLogo
                    url={item.url}
                    image={{
                      url: item.image.url,
                      alt: item.image.alt,
                      width: item.image.width,
                      height: item.image.height,
                    }}
                    value={item.value}
                  />
                </li>
              ))}
            </StyledAmbassadorReviewLogos>
          </StyledAmbassadorReview>
        </StyledAmbassadorWrapper>
      </Container>
    </Section>
  );
};

export { Ambassador };
