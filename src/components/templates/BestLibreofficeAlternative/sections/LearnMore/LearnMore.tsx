import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledBlogCardImg,
  StyledBlogCardLink,
  StyledBlogCardText,
  StyledBlogCardWrapper,
} from "./LearnMore.styled";
import { items } from "./data/items";

const LearnMore = () => {
  const { t } = useTranslation("best-libreoffice-alternative");

  return (
    <Section as="div" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledBlogCardWrapper>
          {items.map((item, index) => (
            <div key={index}>
              <StyledBlogCardImg src={item.imgUrl} />
              <StyledBlogCardLink
                href={t(item.heading.href ?? "")}
                label={t(String(item.heading.label))}
                target={item.heading.isExternal ? "_blank" : undefined}
                color="main"
                textUnderline
                hover="underline-none"
              />
              <StyledBlogCardText label={t(String(item.text))} />
            </div>
          ))}
        </StyledBlogCardWrapper>
      </Container>
    </Section>
  );
};

export { LearnMore };
