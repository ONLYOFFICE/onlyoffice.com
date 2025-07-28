import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledBlogCardImg,
  StyledBlogCardLink,
  StyledBlogCardText,
  StyledBlogCardWrapper,
  StyledLearnMoreHeading,
  StyledLearnMoreWrapper,
} from "./LearnMore.styled";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

const LearnMore = () => {
  const { t } = useTranslation("best-adobe-alternative");
  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledLearnMoreWrapper>
          <StyledLearnMoreHeading
            level={2}
            textAlign="center"
            label={t("ReadTheseArticles")}
          />
          <StyledBlogCardWrapper>
            {items.map((item, index) => (
              <div key={index}>
                <StyledBlogCardImg src={item.imgUrl} />
                <StyledBlogCardLink
                  href={t(String(item.heading.href))}
                  label={t(String(item.heading.label))}
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
                <StyledBlogCardText label={t(String(item.text))} />
              </div>
            ))}
          </StyledBlogCardWrapper>
          <Button
            as="a"
            href="https://templates.onlyoffice.com/"
            label={t("VisitFreeFormsLibrary")}
          />
        </StyledLearnMoreWrapper>
      </Container>
    </Section>
  );
};

export { LearnMore };
