import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledUPHeadingBox,
  StyledFeaturesHeading,
  StyledFeaturesContent,
  StyledIUPContentImage,
  StyledFeaturesDescription,
  StyledFeaturesListItem,
  StyledFeaturesListDescription,
} from "./FeaturesParagraphsList.styled";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const FeaturesParagraphsList = () => {
  const { t } = useTranslation("healthcare");
  const locale = useRouter();

  return (
    <Section
      background="#F5F5F5"
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["88px", "88px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledUPHeadingBox>
        <StyledFeaturesHeading level={2} size={3} textAlign="center" className={locale.locale}>
          <Trans
            t={t}
            i18nKey="UltimateProtectionHealthcareData"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledFeaturesHeading>
        <StyledFeaturesDescription><Trans
            t={t}
            i18nKey="OOCompliantWithHipaaPrivacy"
            components={[<b key="0" />]}
          />
        </StyledFeaturesDescription>
        </StyledUPHeadingBox>

        <StyledFeaturesContent>
          {items
            .map((group, groupIndex) => (
              <StyledIUPContentImage
                contentWidth={544}
                links={group.links?.map((link) => ({
                  ...link,
                  label: t(String(link.label)),
                }))}
                key={groupIndex}
                image={{
                  url: t(group.image.url),
                  url2x: group.image.url2x ? t(group.image.url2x) : undefined,
                  height: group.image.height,
                  width: group.image.width,
                }}
                $imgHeight={group.image.height}
                $imgWidth={group.image.width}
                heading={t(group.heading)}
                // text={
                //   group.items.length === 1 ? (
                //     <StyledFeaturesListDescription>
                //       {t(group.items[0])}
                //     </StyledFeaturesListDescription>
                //   ) : (
                //     <ul>
                //       {group.items.map((el, i) => (
                //         <StyledFeaturesListItem key={i}>
                //           {t(el)}
                //         </StyledFeaturesListItem>
                //       ))}
                //     </ul>
                //   )
                // }
                text={
                  group.items?.length === 0 ? (
                    <div>
                      {group.paragraphs.map((el, i) => (
                        <StyledFeaturesListDescription key={i}>
                          {t(el)}
                        </StyledFeaturesListDescription>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div>
                        {group.paragraphs.map((el, i) => (
                          <StyledFeaturesListDescription key={i}>
                            {t(el)}
                          </StyledFeaturesListDescription>
                        ))}
                      </div>
                      <ul>
                        {group.items.map((el, i) => (
                          <StyledFeaturesListItem key={i}>
                            {t(el)}
                          </StyledFeaturesListItem>
                        ))}
                      </ul>
                      {group.postitems?.length !== 0 ? (
                        group.postitems?.map((el, i) => (
                          <StyledFeaturesListDescription key={i}>
                            {t(el)}
                          </StyledFeaturesListDescription>
                        ))
                      ) : null }
                    </>
                  )
                }
                position={{
                  desktop:
                    groupIndex % 2 === 1
                      ? "left"
                      : "right",
                }}
              />
            ))}
        </StyledFeaturesContent>
      </Container>
    </Section>
  );
};

export { FeaturesParagraphsList };
