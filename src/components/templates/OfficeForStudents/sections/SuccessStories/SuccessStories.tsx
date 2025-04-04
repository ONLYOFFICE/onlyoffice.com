import { useTranslation } from "next-i18next";
import {
  StyledSuccessStoriesDesc,
  StyledSuccessStoriesHeading,
  StyledSuccessStoriesItems,
} from "./SuccessStories.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

const SuccessStories = () => {
  const { t } = useTranslation("office-for-students");

  return (
    <Section tabletSmallSpacing={["72px", "72px"]} background="#F9F9F9">
      <Container>
        <StyledSuccessStoriesHeading
          level={2}
          textAlign="center"
          label={t("SuccessStoriesHeading")}
        />
        <StyledSuccessStoriesDesc label={t("SuccessStoriesDesc")} />
        <StyledSuccessStoriesItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={t(item.imgUrl)}
              headingLink={
                item.headingLink && {
                  href: t(item.headingLink.href),
                  label: t(item.headingLink.label),
                }
              }
            />
          ))}
        </StyledSuccessStoriesItems>
      </Container>
    </Section>
  );
};

export { SuccessStories };
