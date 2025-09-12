import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledLearnMoreHeading,
  StyledLearnMoreItems,
} from "./LearnMore.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const LearnMore = () => {
  const { t } = useTranslation("developer-edition");

  return (
    <Section tabletSmallSpacing={["72px", "72px"]} background="#F9F9F9">
      <Container>
        <StyledLearnMoreHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey={"LearnMoreTitle"}
            components={[<Text as="span" color="main" key={0} />]}
          />
        </StyledLearnMoreHeading>
        <StyledLearnMoreItems>
          {items.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={getAssetUrl(t(item.imgUrl))}
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
