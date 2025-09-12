import { useTranslation, Trans } from "next-i18next";
import { StyledFeatures, StyledFeaturesItems } from "./Features.styled";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";
import { FeatureItem } from "./sub-components/FeatureItem";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { getAssetUrl } from "@utils/getAssetUrl";

const Features = () => {
  const { t } = useTranslation("contribute");

  return (
    <StyledFeatures
      desktopSpacing={["128px", "136px"]}
      tabletSpacing={["128px", "798px"]}
      tabletSmallSpacing={["88px", "798px"]}
      mobileSpacing={["48px", "108vw"]}
      $image={t("ContactsImgUrl")}
      $image2x={t("ContactsImgUrl2x")}
    >
      <Container>
        <StyledFeaturesItems>
          {items.map((item, index) => (
            <FeatureItem
              key={index}
              icon={{
                url: getAssetUrl(item.icon.url),
                positionX: item.icon.positionX,
                mobilePositionX: item.icon.mobilePositionX,
              }}
              heading={
                <Trans
                  t={t}
                  i18nKey={String(item.heading)}
                  components={[<Text as="span" color="main" key={0} />]}
                />
              }
              text={
                <Trans
                  t={t}
                  i18nKey={String(item.text.label)}
                  components={{
                    p: <Text as="p" />,
                    ...Object.fromEntries(
                      item.text.links
                        ? item.text.links.map((item, i) => [
                            i,
                            <Link
                              key={i}
                              href={item.href}
                              target={item.isExternal ? "_blank" : undefined}
                              color="main"
                              textUnderline
                              hover="underline-none"
                            />,
                          ])
                        : [],
                    ),
                  }}
                />
              }
              link={{
                label: t(item.link.label),
                href: item.link.href,
              }}
            />
          ))}
        </StyledFeaturesItems>
      </Container>
    </StyledFeatures>
  );
};

export { Features };
