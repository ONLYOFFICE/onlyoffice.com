import { useTranslation, Trans } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { Container } from "@src/components/ui/Container";

import { getAssetUrl } from "@utils/getAssetUrl";
const DoEvenMore = () => {
  const { t } = useTranslation("desktop");

  return (
    <Section
      background="#F9F9F9"
      desktopSpacing={["0px", "0px"]}
      tabletSpacing={["0px", "0px"]}
      tabletSmallSpacing={["0px", "0px"]}
      mobileSpacing={["0px", "0px"]}
    >
      <Container>
        {items.map((item, index) => (
          <FeatureImageItem
            fontSize="18px"
            key={index}
            contentWidth={item.contentWidth}
            heading={t(String(item.heading))}
            rowGap={16}
            gap={item.gap}
            marginTop={item.marginTop}
            text={
              <Trans
                t={t}
                i18nKey="DoMoreDescription"
                components={[
                  <Link
                    key={0}
                    href="https://api.onlyoffice.com/docs/plugin-and-macros/get-started/overview/"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    target="_blank"
                  />,
                ]}
              />
            }
            position={{ desktop: index % 2 === 1 ? "right" : "left" }}
            image={{
              url: getAssetUrl(t(String(item.image.url))),
              height: item.image.height,
              width: item.image.width,
            }}
          />
        ))}
      </Container>
    </Section>
  );
};

export { DoEvenMore };
