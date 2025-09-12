import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledContainer,
  StyledSuccessStoriesItems,
} from "./Testimonials.styled";
import { StoryCard } from "@src/components/widgets/StoryCard";
import { Section } from "@src/components/ui/Section";
import { successStoriesItems } from "./data/successStoriesItems";

import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const Testimonials = () => {
  const { t } = useTranslation("docs-enterprise");

  return (
    <Section>
      <StyledContainer>
        <Heading level={2}>{t("CasesHeader")}</Heading>

        <StyledSuccessStoriesItems>
          {successStoriesItems.map((item, index) => (
            <StoryCard
              imgUrl={getAssetUrl(t(item.imgUrl))}
              linkUrl={getAssetUrl(t(item.linkUrl))}
              heading={t(item.heading)}
              key={index}
            />
          ))}
        </StyledSuccessStoriesItems>

        <Link
          color="main"
          textUnderline
          hover="underline-none"
          href="/customers"
        >
          {t("CasesLink")}
        </Link>
      </StyledContainer>
    </Section>
  );
};

export { Testimonials };
