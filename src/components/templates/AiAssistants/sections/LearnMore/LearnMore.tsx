import { useTranslation } from "next-i18next";
import {
  StyledLearnMoreHeading,
  StyledLearnMoreItems,
} from "./LearnMore.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";
import { useRouter } from "next/router";

const LearnMore = () => {
  const { t } = useTranslation("ai-assistants");
  const locale = useRouter();

  return (
    <Section tabletSmallSpacing={["72px", "72px"]} background="#F9F9F9">
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
              imgUrl={locale.locale === "zh" ? (item.zhImgUrl || item.imgUrl) : item.imgUrl}
              heading={{ label: t(item.heading.label) }}
              text={t(item.text ?? "")}
              links={item.links?.map((item) => ({
                href: t(item.href),
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
