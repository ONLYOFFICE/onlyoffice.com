import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledFeaturesContent,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureIconsItem } from "@src/components/widgets/FeatureIconsItem";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("for-research");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledFeaturesContent>
          {items.flatMap((groupSet, groupSetIndex) =>
            groupSet.items.map((group, groupIndex) => {
              const buttons =
                group.links?.map((link) => ({
                  ...link,
                  label: t(String(link.label)),
                })) ?? [];

              return (
                <FeatureIconsItem
                  className="item"
                  key={`${groupSetIndex}-${groupIndex}`}
                  connectorsHeading={t(group.connectorsHeading ?? "")}
                  buttons={buttons}
                  image={{
                    url: getAssetUrl(t(group.image.url)),
                    width: 544,
                  }}
                  text={group.items.map((key) => {
                    return {
                      label: t(key),
                    };
                  })}
                  position={{
                    desktop: groupIndex % 2 === 1 ? "right" : "left",
                  }}
                />
              );
            })
          )}
        </StyledFeaturesContent>
      </Container>
    </Section>
  );
};

export { Features };
