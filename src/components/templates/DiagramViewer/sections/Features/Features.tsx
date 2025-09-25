import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

import { getAssetUrl } from "@utils/getAssetUrl";
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
                url: getAssetUrl(t(item.image.url)),
                url2x: getAssetUrl(t(item.image.url2x))
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