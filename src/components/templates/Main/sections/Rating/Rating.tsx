import { useTranslation } from "next-i18next";
import {
  StyledRatingWrapper,
  StyledRatingAwardsHeading,
  StyledRatingAwardsItems,
  StyledRatingStars,
} from "./Rating.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { MedalAward } from "./sub-components/MedalAward";
import { StarsRatingLogo } from "@src/components/widgets/StarsRatingLogo";
import { awardItems } from "./data/awardItems";
import { starsRatingItems } from "./data/starsRatingItems";

const Rating = () => {
  const { t } = useTranslation("main");

  return (
    <Section>
      <Container>
        <StyledRatingWrapper>
          <div>
            <StyledRatingAwardsHeading
              level={2}
              label={t("HighlyRatedByBothCriticsAndUsers")}
            />

            <StyledRatingAwardsItems>
              {awardItems.map((item, index) => (
                <li key={index}>
                  <MedalAward
                    linkUrl={item.linkUrl}
                    imgUrl={item.imgUrl}
                    heading={t(item.heading)}
                  />
                </li>
              ))}
            </StyledRatingAwardsItems>
          </div>

          <StyledRatingStars>
            {starsRatingItems.map((item, index) => (
              <li key={index}>
                <StarsRatingLogo
                  url={item.url}
                  imgUrl={item.imgUrl}
                  imgAlt={item.imgAlt}
                  imgWidth={item.imgWidth}
                  imgHeight={item.imgHeight}
                  value={item.value}
                />
              </li>
            ))}
          </StyledRatingStars>
        </StyledRatingWrapper>
      </Container>
    </Section>
  );
};

export { Rating };
