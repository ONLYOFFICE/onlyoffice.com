import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

import {
  StyledFeaturesList
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("diagram-viewer");

  return (
    <Section>
      <Container>
        <StyledFeaturesList>
          {items.map((item, index) => (
            <FeatureImageItem
              key={item.id}
              heading={t(item.title)}
              text={t(item.description)}
              image={{
                url: t(item.image.url),
                url2x: t(item.image.url2x)
              }}
              position={{
                desktop: index % 2 === 0 ? "right" : "left",
                mobile: "bottom"
              }}
            />
          ))}
        </StyledFeaturesList>
      </Container>
    </Section>
  );
};

export { Features };