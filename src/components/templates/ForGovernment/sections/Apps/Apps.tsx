import { useTranslation } from "next-i18next";
import {
  StyledAppsWrapper,
  StyledAppsList,
  StyledAppsText,
} from "./Apps.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { appsItems } from "./data/appsItems";
import { DownloadButton } from "@src/components/ui/DownloadButton";

const Apps = () => {
  const { t } = useTranslation("for-government");

  return (
    <Section
      desktopSpacing={["0", "0"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["48px", "48px"]}
      background="linear-gradient(162.82deg,#FFC671 0%,#FF7541 64.06%,#FF6F3D 100%)"
    >
      <StyledAppsWrapper>
        <StyledAppsText>
          <Heading
            level={2}
            size={3}
            textAlign="center"
            label={t("AppsTitle")}
            color="#FFFFFF"
          />
          <Text label={t("AppsSubtitle")} color="#FFFFFF" textAlign="center" />
          <StyledAppsList>
            {appsItems.map((item, index) => (
              <DownloadButton
                key={index}
                href={item.href}
                platform={item.platform}
                variant="quaternary"
              />
            ))}
          </StyledAppsList>
          <img src={t("Image")} srcSet={t("Image2x")} alt="Screenshot" />
        </StyledAppsText>
      </StyledAppsWrapper>
    </Section>
  );
};

export { Apps };
