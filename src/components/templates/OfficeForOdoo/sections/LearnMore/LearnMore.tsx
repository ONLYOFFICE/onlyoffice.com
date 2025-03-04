import { useTranslation } from "next-i18next";
import {
  StyledLearnMoreHeading,
  StyledLearnMoreItems,
} from "./LearnMore.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

const LearnMore = () => {
  const { t } = useTranslation("office-for-odoo");

  return (
    <Section>
      <Container>
        <StyledLearnMoreHeading
          level={2}
          textAlign="center"
          label={t("LearnMoreHeading")}
        />
        <StyledLearnMoreItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              url={item.url}
              imgUrl={item.imgUrl}
              heading={t(item.heading)}
              text={t(item.text)}
              links={item.links.map((item) => ({
                href: item.href,
                label: t(item.label),
              }))}
            />
          ))}
        </StyledLearnMoreItems>
      </Container>
    </Section>
  );
};

export { LearnMore };
