import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledFeaturesHeading,
  StyledFeaturesText,
  StyledFeatureLink,
  StyledFeaturesList,
  StyledFeaturesItem,
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("docspace-enterprise");
  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledFeaturesHeading
          level={2}
          size={2}
          label={t("FeaturesEfficient")}
          textAlign="center"
        />
        <StyledFeaturesText
          label={t("FeaturesOnlyOffice")}
          size={1}
          textAlign="center"
        />
        <StyledFeaturesList>
          {items.map((item) => (
            <StyledFeaturesItem
              key={item.text}
              icon={{
                url: item.icon.url,
                width: "96px",
                height: "96px",
              }}
              text={<Trans t={t} i18nKey={item.text} />}
            />
          ))}
        </StyledFeaturesList>
        <StyledFeatureLink>
          <Link
            href="/docspace"
            rel="noreferrer noopener"
            target="_blank"
            label={t("FeaturesLearn")}
            color="main"
            textUnderline={true}
          />
        </StyledFeatureLink>
      </Container>
    </Section>
  );
};

export { Features };
