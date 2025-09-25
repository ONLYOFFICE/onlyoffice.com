import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledFeaturesContent,
  StyledFeatureIconsButton,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureIconsItem } from "@src/components/widgets/FeatureIconsItem";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("for-developers");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledFeaturesContent>
          {items.flatMap((itemGroup, groupSetIndex) =>
            itemGroup.items.map((group, groupIndex) => {
              const buttons =
                group.links?.slice(0, 2).map((link, index) => ({
                  ...link,
                  label: t(String(link.label)),
                  isPrimary: index === 0,
                })) ?? [];

              return (
                <div key={`wrapper-${groupSetIndex}-${groupIndex}`}>
                  <FeatureIconsItem
                    className="item"
                    connectorsHeading={t(group.connectorsHeading ?? "")}
                    connectorsSubheading={t(group.connectorsSubheading ?? "")}
                    showButtonsOutside={true}
                    image={{
                      url: getAssetUrl(t(group.image.url)),
                      url2x: group.image.url2x
                        ? t(group.image.url2x)
                        : undefined,
                      height: 520,
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
                    connectorsItems={group.connectorsItems?.map((item) => ({
                      ...item,
                      label: t(item.label),
                    }))}
                  />
                  {Array.isArray(buttons) && buttons.length > 0 && (
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        marginTop: "32px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {buttons.map(
                        ({ label, href, isExternal, isPrimary }, index) => (
                          <StyledFeatureIconsButton
                            key={index}
                            href={href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            isPrimary={isPrimary}
                          >
                            {label}
                          </StyledFeatureIconsButton>
                        ),
                      )}
                    </div>
                  )}
                </div>
              );
            }),
          )}
        </StyledFeaturesContent>
      </Container>
    </Section>
  );
};

export { Features };
