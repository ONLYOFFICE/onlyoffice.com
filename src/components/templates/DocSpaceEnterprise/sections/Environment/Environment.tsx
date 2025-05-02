import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { items } from "./data/items";

import {
  StyledEnvironment,
  StyledEnvironmentHeading,
  StyledEnvironmentList,
} from "./Environment.styled";

const Environment = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledEnvironment>
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
              image={{ url: item.image.url }}
              links={item.links?.map((link) => ({
                href: link.href,
                label: t(link.label),
              }))}
              position={{ desktop: index % 2 === 0 ? "right" : "left" }}
            />
          ))}
        </StyledEnvironmentList>
      </Container>
    </StyledEnvironment>
  );
};

export { Environment };
