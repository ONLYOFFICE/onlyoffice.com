import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { helpers } from "./data/helpers";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledAiHelpersBtnsWrapper,
  StyledAiHelpersHeading,
  StyledAiHelpersWrapper,
} from "./AiHelpers.styled";
import { Button } from "@src/components/ui/Button";
import { useRouter } from "next/router";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const AiHelpers = () => {
  const { t } = useTranslation("ai-assistants");
  const locale = useRouter();

  return (
    <Section>
      <Container>
        <StyledAiHelpersWrapper>
          <StyledAiHelpersHeading
            level={2}
            size={2}
            textAlign="center"
            $locale={locale.locale}
          >
            <Trans
              t={t}
              i18nKey="MakeTheMost"
              components={[<Text as="span" color="#FF6F3D" key={0} />]}
            />
          </StyledAiHelpersHeading>
          {helpers.map((helper, index) => (
            <FeatureSwitcher
              key={index}
              imageWidth={776}
              imageHeight={430}
              heading={t(String(helper.heading))}
              position={index % 2 === 0 ? "left" : "right"}
              items={helper.items.map(({ label, image }) => ({
                label: (
                  <Trans
                    t={t}
                    i18nKey={String(label)}
                    components={[<br key="br" />]}
                  />
                ),
                image: {
                  url: getAssetUrl(t(image.url)),
                  url2x: image.url2x ? getAssetUrl(t(image.url2x)) : undefined,
                },
              }))}
            />
          ))}
          <FeatureImageItem
            fontSize="14px"
            contentWidth={352}
            heading={
              <>
                {t("AIInlineAgent")}
                <sup style={{ color: "#FF6F3D", fontWeight: "400" }}>
                  {" "}
                  {t("BETA")}
                </sup>
              </>
            }
            text={t("AIInlineAgentText")}
            position={{ desktop: "right" }}
            links={[
              {
                href: t("AIInlineAgentFeaturesLink"),
                label: t("AIInlineAgentFeatures"),
              },
            ]}
            image={{
              url: getAssetUrl(t("AIInlineAgentImg")),
              url2x: getAssetUrl(t("AIInlineAgentImg2x")),
              height: 420,
              width: 736,
            }}
          />
          <StyledAiHelpersBtnsWrapper>
            <Button
              as="a"
              href="/docspace-registration"
              label={t("TryInCloud")}
            />
            <Button
              as="a"
              href="/download-desktop"
              label={t("TryInDesktop")}
              variant="secondary"
            />
          </StyledAiHelpersBtnsWrapper>
        </StyledAiHelpersWrapper>
      </Container>
    </Section>
  );
};

export { AiHelpers };
