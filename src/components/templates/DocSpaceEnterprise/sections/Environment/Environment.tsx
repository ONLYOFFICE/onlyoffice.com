import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { items } from "./data/items";

import {
  StyledEnvironmentHeading,
  StyledEnvironmentList,
} from "./Environment.styled";

const Environment = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <Section background="#f8f9f9">
      <Container>
        <StyledEnvironmentHeading
          label={t("EnvironmentEnterpriseReady")}
          level={2}
          size={2}
          textAlign="center"
        />
        <StyledEnvironmentList>
          {items.map((item, index) => (
            <FeatureImageItem
              key={item.heading}
              className="item"
              heading={t(item.heading)}
              text={t(item.text)}
              image={{ url: t(item.image.url) }}
              links={item.links?.map((link) => ({
                href: link.href,
                label: t(link.label),
              }))}
              position={{
                desktop: index % 2 === 0 ? "right" : "left",
                mobile: "top",
              }}
            />
          ))}
        </StyledEnvironmentList>
      </Container>
    </Section>
  );
};

export { Environment };
