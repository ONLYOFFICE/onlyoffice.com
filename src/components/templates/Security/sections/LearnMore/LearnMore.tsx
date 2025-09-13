import { useTranslation } from "next-i18next";
import {
  StyledLearnMoreHeading,
  StyledLearnMoreItems,
  StyledSection,
} from "./LearnMore.styled";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";
import { getAssetUrl } from "@src/utils/getAssetUrl";

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
              imgUrl={getAssetUrl(item.imgUrl)}
              heading={{ label: t(item.heading.label) }}
              text={t(item.text ?? "")}
              links={item.links?.map((item) => ({
                href: t(item.href, { defaultValue: item.href }),
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
