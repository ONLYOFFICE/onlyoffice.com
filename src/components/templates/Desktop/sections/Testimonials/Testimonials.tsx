import {
  Grid,
  Card,
  Name,
  Username,
  Comment,
  PlatformIcon,
  Avatar,
  UserDetails,
  UserInfo,
  Header,
  StyledContainer,
} from "./Testimonials.styled";
import { testimonials } from "./data/items";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { useEffect, useState } from "react";

const shuffleArray = (array: typeof testimonials) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Testimonials = () => {
  const { t } = useTranslation("desktop");
  const [shuffledTestimonials, setShuffledTestimonials] =
    useState(testimonials);

  useEffect(() => {
    setShuffledTestimonials(shuffleArray(testimonials));
  }, []);

  return (
    <Section>
      <StyledContainer>
        <Heading level={3}>{t("TestimonialsTitle")}</Heading>
        <Grid>
          {shuffledTestimonials.map((item, index) => (
            <Card key={index}>
              <Header>
                <UserDetails>
                  <Avatar
                    src={`images/templates/desktop/testimonials/cards/${item.platform}_${item.picture}`}
                  />
                  <UserInfo>
                    <Name href={item.link}>{item.name}</Name>
                    <Username>{item.username}</Username>
                  </UserInfo>
                </UserDetails>
                <PlatformIcon
                  src={`images/templates/desktop/testimonials/${item.platform}.svg`}
                  alt={item.platform}
                />
              </Header>
              <Comment>
                <Trans
                  t={t}
                  i18nKey={item.text}
                  components={[
                    <Text as="p" key={0} />,
                    <Text as="span" key={1} />,
                  ]}
                />
              </Comment>
            </Card>
          ))}
        </Grid>
      </StyledContainer>
    </Section>
  );
};

export { Testimonials };
