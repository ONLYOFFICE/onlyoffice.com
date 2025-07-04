import { Trans, useTranslation } from "next-i18next";
import {
  StyledLearnMoreItems,
  StyledLearnMoreHeading,
} from "./LearnMore.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const LearnMore = () => {
  const { t } = useTranslation("for-small-business");

  return (
    <Section tabletSmallSpacing={["72px", "72px"]} background="#F5F5F5">
      <Container>
        <StyledLearnMoreHeading level={1} size={3}>
          <Trans
            t={t}
            i18nKey="LearnMoreTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledLearnMoreHeading>
        <StyledLearnMoreItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={t(item.imgUrl)}
              heading={{ label: t(item.heading.label) }}
              text={t(item.text ?? "")}
              links={item.links?.map((item) => ({
                href: t(item.href),
                label: t(item.label),
                isExternal: item.isExternal,
              }))}
            />
          ))}
        </StyledLearnMoreItems>
      </Container>
    </Section>
  );
};

export { LearnMore };
