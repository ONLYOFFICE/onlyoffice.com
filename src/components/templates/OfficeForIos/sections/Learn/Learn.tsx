import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { items } from "./data/items";

import { StyledLearnHeading, StyledLearnList, StyledLearnSection } from "./Learn.styled";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { hideConfig } from "./utils/hideConfig";

const Learn = () => {
  const { t } = useTranslation("office-for-ios");
  const { locale } = useRouter();

  return (
    <StyledLearnSection
      $isDisplay={hideConfig.includes(locale ?? "en") ? false : true}
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
            }))}
          />
        ))}
      </StyledLearnList>
    </StyledLearnSection>
  );
};

export { Learn };
