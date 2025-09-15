import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledBlogCardImg,
  StyledBlogCardLink,
  StyledBlogCardWrapper,
} from "./LearnMore.styled";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { getAssetUrl } from "@utils/getAssetUrl";

const LearnMore = () => {
  const { t } = useTranslation("best-libreoffice-alternative");

  return (
    <Section as="div" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledBlogCardWrapper>
          {items.map((item, index) => (
            <div key={index}>
              <StyledBlogCardImg src={getAssetUrl(item.imgUrl)} />
              <StyledBlogCardLink
                href={t(item.heading.href ?? "")}
                label={t(String(item.heading.label))}
                target={item.heading.isExternal ? "_blank" : undefined}
                color="main"
                textUnderline
                hover="underline-none"
              />
              <Text size={2} label={t(String(item.text))} />
            </div>
          ))}
        </StyledBlogCardWrapper>
      </Container>
    </Section>
  );
};

export { LearnMore };
