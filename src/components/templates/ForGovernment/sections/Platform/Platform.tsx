import { Trans, useTranslation } from "next-i18next";
import {
  StyledPlatformWrapper,
  StyledWrapperDark,
  StyledWrapper,
  StyledButtons,
  StyledContent,
} from "./Platform.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const Platform = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledWrapperDark>
          <img src='/images/templates/for-government/platform/hopewell.svg' alt="Image" />
          <StyledContent>
            <Heading level={3} size={5} label={t("HopewellHead")} />
            <Text label={t("HopewellText")} />
            <Text
            fontSize="13px"
            fontWeight={700}
            lineHeight="21px"
            textAlign="center"
            label={t("HopewellAuthor")}
          />
          <Link
            href="/success-stories/gwdg?from=for-research"
            label={t("ReadTheStory")}
            color="main"
            textUnderline
            hover="underline-none"
            fontSize="14px"
          />
          </StyledContent>
        </StyledWrapperDark>

        <StyledPlatformWrapper>
            <Heading level={2} size={3} textAlign="center" label={t("PlatformTitle")} />
            <Text textAlign="center">
              <Trans
                t={t}
                i18nKey="PlatformSubtitle"
                components={[
                  <a
                    href="/all-connectors?from=for-government"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ff6f3d", textDecoration: "underline" }}
                    key="0"
                  />,
                ]}
              />
            </Text>
            <StyledButtons>
              <Button
                as="a"
                href="/office-suite?from=for-government"
                label={t("LearnMore")}
                variant="tertiary"
              />
              <Button
                as="a"
                href="/download#docs-enterprise"
                label={t("GetItNowPlatform")}
                variant="secondary"
              />
            </StyledButtons>
            <img src={t("ImagePlatform")} srcSet={t("ImagePlatform2x")} alt="Screenshot" />
        </StyledPlatformWrapper>

        <StyledWrapper>
          <img src='/images/templates/for-government/platform/spd.svg' alt="Image" />
          <StyledContent>
            <Heading level={3} size={5} label={t("SpdHead")} />
            <Text label={t("SpdText")} />
            <Text
            fontSize="13px"
            fontWeight={700}
            lineHeight="21px"
            textAlign="center"
            label={t("SpdAuthor")}
            color="#666666"
          />
          <Text
            fontSize="12px"
            lineHeight="19px"
            textAlign="center"
            label={t("SpdAuthorInfo")}
          />
          <Link
            href="/success-stories/gwdg?from=for-research"
            label={t("ReadTheStory")}
            color="main"
            textUnderline
            hover="underline-none"
            fontSize="14px"
          />
          </StyledContent>
        </StyledWrapper>
      </Container>
    </Section>
  );
};

export { Platform };
