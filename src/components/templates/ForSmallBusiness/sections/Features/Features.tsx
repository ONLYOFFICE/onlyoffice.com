import { useTranslation } from "next-i18next";
import { StyledFeaturesContent } from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureIconsItem } from "@src/components/widgets/FeatureIconsItem";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("for-small-business");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["48px", "48px"]}
      tabletSmallSpacing={["48px", "48px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledFeaturesContent>
          {items.flatMap((groupSet, groupSetIndex) =>
            groupSet.items.map((group, groupIndex) => {
           const buttons = group.buttons
              ? group.buttons.map((btn) =>
                  btn.links
                    ? {
                        ...btn,
                        label: t(btn.label),
                        links: btn.links,
                      }
                    : {
                        ...btn,
                        label: t(btn.label),
                      },
                )
              : group.links?.map((link) => ({
                  ...link,
                  label: t(link.label),
                })) ?? [];

              return (
                <FeatureIconsItem
                  className="item"
                  key={`${groupSetIndex}-${groupIndex}`}
                  connectorsHeading={t(group.connectorsHeading ?? "")}
                  connectorsSubheading={t(group.connectorsSubheading ?? "")}
                  buttons={buttons}
                  image={{
                    url: t(group.image.url),
                    width: group.image.width,
                    height: group.image.height,
                  }}
                  contentWidth={544}
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
                    desktop: groupIndex % 2 === 1 ? "right" : "left",
                  }}
                  connectorsItems={group.connectorsItems?.map((item) => ({
                    ...item,
                    label: t(item.label),
                  }))}
                  quote={
                    group.quote
                      ? {
                          icon: t(group.quote.icon ?? ""),
                          text: t(group.quote.text ?? ""),
                          author: t(group.quote.author ?? ""),
                          info: t(group.quote.info ?? ""),
                          link: group.quote.link
                            ? {
                                ...group.quote.link,
                                label: t(group.quote.link.label),
                              }
                            : undefined,
                        }
                      : undefined
                  }
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
