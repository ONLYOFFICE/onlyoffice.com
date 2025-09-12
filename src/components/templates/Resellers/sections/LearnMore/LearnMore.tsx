import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledLearnMoreItems,
  StyledLearnMoreLogos,
  StyledLearnMoreLogo,
} from "./LearnMore.styled";
import { BlogCard } from "@src/components/widgets/BlogCard";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Tooltip } from "@src/components/ui/Tooltip";
import { blogs } from "./data/blogs";
import { logos } from "./data/logos";

const LearnMore = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section
      background="#f5f5f5"
      tabletSmallSpacing={["80px", "112px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledLearnMoreItems>
          {blogs.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={getAssetUrl(t(item.imgUrl))}
              heading={{
                href: t(item.heading.href ?? ""),
                label: t(item.heading.label),
              }}
            />
          ))}
        </StyledLearnMoreItems>

        <StyledLearnMoreLogos>
          {logos.map((item, index) => (
            <Tooltip
              key={index}
              id={item.id}
              content={t(item.title)}
              place="bottom-end"
            >
              <StyledLearnMoreLogo className={item.id} href={t(item.href)} />
            </Tooltip>
          ))}
        </StyledLearnMoreLogos>
      </Container>
    </Section>
  );
};

export { LearnMore };
