import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { items } from "./data/items";

import { StyledEnvironment, StyledEnvironmentList } from "./Environment.styled";

const Environment = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledEnvironment>
      <Container>
        <Heading
          label={t("EnvironmentEnterpriseReady")}
          level={2}
          className="title"
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
