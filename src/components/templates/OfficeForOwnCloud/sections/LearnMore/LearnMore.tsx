import { useTranslation } from "next-i18next";
import { StyledLearnMore, StyledLearnMoreItems } from "./LearnMore.styled";

import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

const LearnMore = () => {
  const { t } = useTranslation("office-for-owncloud");

  return (
    <StyledLearnMore>
      <Container>
        <StyledLearnMoreItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              url={item.url}
              imgUrl={item.imgUrl}
              heading={t(item.heading)}
              links={item.links.map((item) => ({
                href: item.href,
                label: t(item.label),
              }))}
            />
          ))}
        </StyledLearnMoreItems>
      </Container>
    </StyledLearnMore>
  );
};

export { LearnMore };
