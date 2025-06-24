import { useTranslation } from "next-i18next";
import {
  StyledSuccessStoriesItems,
} from "./Blog.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

const Blog = () => {
  const { t } = useTranslation("for-developers");

  return (
    <Section tabletSmallSpacing={["72px", "72px"]} background="#F5F5F5" borderTop>
      <Container>
        <StyledSuccessStoriesItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={t(item.imgUrl)}
              heading={{
                label: t(item.heading.label),
              }}
              quotesBefore={t(item.quotesBefore ?? "")}
              italicText={t(item.italicText ?? "")}
              quotesAfter={t(item.quotesAfter ?? "")}
              author={t(item.author ?? "")}
              links={item.links?.map(link => ({
                href: t(link.href ?? ""),
                label: t(link.label ?? ""),
                isExternal: link.isExternal,
              }))}
            />
          ))}
        </StyledSuccessStoriesItems>
      </Container>
    </Section>
  );
};

export { Blog };
