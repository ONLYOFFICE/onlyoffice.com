import { useTranslation } from "next-i18next";
import {
  StyledSuccessStoriesItems,
} from "./SuccessStories.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

const SuccessStories = () => {
  const { t } = useTranslation("for-research");

  return (
    <Section tabletSmallSpacing={["72px", "72px"]} background="#F9F9F9">
      <Container>
        <StyledSuccessStoriesItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={t(item.imgUrl)}
              heading={{
                href: t(item.heading.href ?? ""),
                label: t(item.heading.label),
              }}
            />
          ))}
        </StyledSuccessStoriesItems>
      </Container>
    </Section>
  );
};

export { SuccessStories };
