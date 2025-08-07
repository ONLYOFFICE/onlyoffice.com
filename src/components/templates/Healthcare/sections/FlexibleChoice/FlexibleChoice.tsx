import { Trans, useTranslation } from "next-i18next";
import {
  StyledFCHeading,
  StyledFCContent,
  StyledImgLinkBtnListItem,
  StyledFeaturesListDescription,
} from "./FlexibleChoice.styled";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureImgLinkBtnItem } from "./FeatureImgLinkBtnItem";

const FlexibleChoice = () => {
  const { t } = useTranslation("healthcare");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["88px", "88px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledFCHeading
          size={3}
          level={2}
          textAlign="center"
        >
          <Trans
            t={t}
            i18nKey="FlexibleChoiceSoftwareTools"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledFCHeading>

        <StyledFCContent>
          {items.map((group, groupIndex) => (
            <FeatureImgLinkBtnItem
              className="fc-block"
              key={groupIndex}
              contentWidth={530}
              heading={t(group.heading)}
              postheading={t(group.postheading)}
              image={{
                url: t(group.image.url),
                height: 544,
                width: group.image.width
              }}
              button={{
                ...group.button,
                label: t(String(group.button.label)),
              }}
              link={{
                ...group.link,
                label: t(String(group.link.label)),
              }}
              text={
                group.items.length === 1 ? (
                  <StyledFeaturesListDescription>
                    {t(group.items[0])}
                  </StyledFeaturesListDescription>
                ) : (
                  <ul>
                    {group.items.map((el, i) => (
                      <StyledImgLinkBtnListItem key={i}>
                        <Trans
                          t={t}
                          i18nKey={String(el)}
                          components={[
                            <b key="0" />,
                            <b key="1" />,
                          ]}
                        />
                      </StyledImgLinkBtnListItem>
                    ))}
                  </ul>
                )
              }
              position={{
                desktop:
                  groupIndex % 2 === 1
                    ? "right"
                    : "left"
              }}
            />
          ))}
        </StyledFCContent>
      </Container>
    </Section>
  );
};

export { FlexibleChoice };
