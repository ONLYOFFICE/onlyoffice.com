import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/item";

import {
  StyledFeature,
  StyledFeatureLink,
  StyledFeaturesList,
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("docspace-enterprise");
  return (
    <StyledFeature>
      <Container className="container">
        <Heading
          level={2}
          className="container__title"
          label={t("FeaturesEfficient")}
        />
        <Text className="container__subtitle" label={t("FeaturesOnlyOffice")} />
      </Container>
      <StyledFeaturesList>
        {items.map((item) => (
          <FeatureItem
            className="item"
            key={item.text}
            icon={{
              url: item.icon.url,
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
    </StyledFeature>
  );
};

export { Features };
