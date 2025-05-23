import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";

import { StyledLearnHeading, StyledLearnList } from "./Learn.styled";
import { BlogCard } from "@src/components/widgets/BlogCard";

const Learn = () => {
  const { t } = useTranslation("office-for-ios");

  return (
    <Section
      background="#F9F9F9"
      desktopSpacing={["112px", "56px"]}
      tabletSpacing={["112px", "56px"]}
    >
      <StyledLearnHeading
        label={t("LearnMoreHeading")}
        level={2}
        size={3}
        textAlign="center"
      />
      <StyledLearnList>
        {items.map((item) => (
          <BlogCard
            key={item.title}
            className="blog-card"
            imgUrl={item.image}
            heading={{ label: t(item.title) }}
            text={t(item.text ?? "")}
            links={item.links?.map((item) => ({
              href: t(item.href),
              label: t(item.label),
              isExternal: item.isExternal,
            }))}
          />
        ))}
      </StyledLearnList>
    </Section>
  );
};

export { Learn };
