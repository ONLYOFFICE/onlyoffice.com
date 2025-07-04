import { useTranslation } from "next-i18next";
import { StyledFeaturesContent } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureIconsItem } from "@src/components/widgets/FeatureIconsItem";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["0", "48px"]}
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
                  heading={t(group.heading ?? "")}
                  key={`${groupSetIndex}-${groupIndex}`}
                  connectorsHeading={t(group.connectorsHeading ?? "")}
                  buttons={buttons}
                  image={{
                    url: t(group.image.url),
                    width: 544,
                  }}
                  text={group.items.map((key) => {
                    const entry = group.textWithLinks?.find(
                      (item) => item.label === key,
                    );
                    return {
                      label: t(key),
                      links: entry?.links ?? [],
                    };
                  })}
                  position={{
                    desktop: groupIndex % 2 === 1 ? "left" : "right",
                  }}
                />
              );
            }),
          )}
        </StyledFeaturesContent>
      </Container>
    </Section>
  );
};

export { Features };
