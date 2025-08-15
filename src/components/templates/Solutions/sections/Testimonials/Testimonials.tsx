import { useTranslation, Trans } from "next-i18next";
import {
  StyledContainer,
  StyledSuccessStoriesItems,
} from "./Testimonials.styled";
import { StoryCard } from "@src/components/widgets/StoryCard";
import { Section } from "@src/components/ui/Section";
import { successStoriesItems } from "./data/successStoriesItems";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const Testimonials = () => {
  const { t } = useTranslation("solutions");

  return (
    <Section background="#f9f9f9">
      <StyledContainer>
        <Heading level={2}>
          <Trans
            t={t}
            i18nKey={"Trusted"}
            components={[<Text as="span" color="main" key={0} />]}
          />
        </Heading>
        <StyledSuccessStoriesItems>
          {successStoriesItems.map((item, index) => (
            <StoryCard
              imgUrl={t(item.imgUrl)}
              linkUrl={t(item.linkUrl)}
              heading={t(item.heading)}
              key={index}
            />
          ))}
        </StyledSuccessStoriesItems>
      </StyledContainer>
    </Section>
  );
};

export { Testimonials };
