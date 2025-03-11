import { useTranslation } from "next-i18next";
import {
  StyledLearnMoreHeading,
  StyledLearnMore,
  StyledLearnMoreItems,
} from "./LearnMore.styled";

import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

const LearnMore = () => {
  const { t } = useTranslation("office-for-alfresco");

  return (
    <StyledLearnMore>
      <Container>
        <StyledLearnMoreHeading
          level={3}
          textAlign="center"
          label={t("LearnMoreHeading")}
        />
        <StyledLearnMoreItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={item.imgUrl}
              heading={t(item.heading)}
              text={t(item.text)}
              links={item.links.map((item) => ({
                href: item.href,
                label: t(item.label),
              }))}
              isLarge
            />
          ))}
        </StyledLearnMoreItems>
      </Container>
    </StyledLearnMore>
  );
};

export { LearnMore };
