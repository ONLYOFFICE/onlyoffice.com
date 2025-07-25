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

const Apps = () => {
  const { t } = useTranslation("for-research");
  const icon = "/images/templates/for-research/apps/icon.svg";

  return (
    <Section
      desktopSpacing={["0", "0"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["48px", "48px"]}
      background="linear-gradient(162.82deg,#FFC671 0%,#FF7541 64.06%,#FF6F3D 100%)"
    >
      <StyledAppsWrapper>
        <StyledAppsText>
          <img src={icon} alt="Icon" style={{ width: "152px" }} />
          <Heading
            level={2}
            size={4}
            textAlign="center"
            label={t("AppsTitle")}
            color="#FFFFFF"
          />
          <Text label={t("AppsSubtitle")} color="#FFFFFF" textAlign="center" />
          <StyledAppsList>
            {appsItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(/images/templates/for-research/apps/download.svg)`,
                    backgroundPosition: `${item.backgroundPositionX ?? "0px"} 50%`,
                    backgroundRepeat: "no-repeat",
                    width: item.width ?? "64px",
                    height: "64px",
                  }}
                />
                <span style={{ textAlign: "center" }}>
                  {item.label ? t(item.label) : ""}
                </span>
              </a>
            ))}
          </StyledAppsList>
        </StyledAppsText>
      </StyledAppsWrapper>
    </Section>
  );
};

export { Apps };
