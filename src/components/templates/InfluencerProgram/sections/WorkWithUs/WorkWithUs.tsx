import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import {
  StyledCard,
  StyledCardImage,
  StyledCardWrapper,
} from "./WorkWithUs.styled";
import { Link } from "@src/components/ui/Link";
import { cards } from "./data/items";

const WorkWithUs = () => {
  const { t } = useTranslation("influencer-program");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]} background="#f5f5f5">
      <Container>
        <Heading level={2} size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey="ItIsEasy"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </Heading>
        <StyledCardWrapper>
          {cards.map((item, index) => (
            <StyledCard key={index}>
              <Heading level={4} size={5} label={t(item.title)} />
              <StyledCardImage src={item.image} />
              <Text>
                <Trans
                  t={t}
                  i18nKey={String(item.text)}
                  components={[
                    <Link
                      href="#form"
                      color="main"
                      textUnderline
                      hover="underline-none"
                      key="0"
                    />,
                  ]}
                />
              </Text>
            </StyledCard>
          ))}
        </StyledCardWrapper>
      </Container>
    </Section>
  );
};

export { WorkWithUs };
