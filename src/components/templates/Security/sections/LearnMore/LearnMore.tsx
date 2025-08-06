import { useTranslation } from "next-i18next";
import {
  StyledLearnMoreHeading,
  StyledLearnMoreItems,
  StyledSection,
} from "./LearnMore.styled";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";

const LearnMore = () => {
  const { t } = useTranslation("security");

  return (
    <StyledSection>
      <Container>
        <StyledLearnMoreHeading
          level={3}
          textAlign="center"
          label={t("LearnMoreAboutONLYOFFICE")}
        />
        <StyledLearnMoreItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={item.imgUrl}
              heading={{ label: t(item.heading.label) }}
              text={t(item.text ?? "")}
              links={item.links?.map((item) => ({
                href: item.href,
                label: t(item.label),
                isExternal: item.isExternal,
              }))}
            />
          ))}
        </StyledLearnMoreItems>
      </Container>
    </StyledSection>
  );
};

export { LearnMore };
