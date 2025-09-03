import { Trans, useTranslation } from "next-i18next";
import {
  StyledPlatformWrapper,
  StyledWrapperDark,
  StyledWrapper,
  StyledButtons,
  StyledContent,
} from "./Platform.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const Platform = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["0", "0"]}
      tabletSpacing={["48px", "48px"]}
    >
      <StyledWrapperDark>
        <img
          src="/images/templates/for-government/platform/hopewell.svg"
          alt="Image"
          className="desktop"
        />
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
            href="https://www.onlyoffice.com/blog/2020/06/onlyoffice-in-the-city-of-hopewell/"
            label={t("ReadTheStory")}
            color="main"
            textUnderline
            hover="underline-none"
            fontSize="14px"
          />
        </StyledContent>
      </StyledWrapperDark>

      <StyledPlatformWrapper>
        <Heading
          level={2}
          size={3}
          textAlign="center"
          label={t("PlatformTitle")}
        />
        <Text textAlign="center">
          <Trans
            t={t}
            i18nKey="PlatformSubtitle"
            components={[
              <Link
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
        <img
          src={t("ImagePlatform")}
          srcSet={t("ImagePlatform2x")}
          alt="Screenshot"
        />
      </StyledPlatformWrapper>

      <StyledWrapper>
        <img
          src="/images/templates/for-government/platform/spd.svg"
          alt="Image"
          className="desktop"
        />
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
            href="/success-stories/spd-kreisverband"
            label={t("ReadTheStory")}
            color="main"
            textUnderline
            hover="underline-none"
            fontSize="14px"
          />
        </StyledContent>
      </StyledWrapper>
    </Section>
  );
};

export { Platform };
