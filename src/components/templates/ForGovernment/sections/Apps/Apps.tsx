import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledAppsWrapper,
  StyledAppsList,
  StyledAppsText,
} from "./Apps.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { appsItems, IAppsItems } from "./data/appsItems";

const Apps = () => {
  const { t } = useTranslation("for-government");
  const { locale } = useRouter();

  const imageUrl = t("AppsImage");
  const imageUrlIOS = t("AppsImageIOS");
  const imageUrlAndroid = t("AppsImageAndroid");

  const filteredApps = appsItems.map((item) => {
    const isTargetMobileApp =
      item.href === "https://play.google.com/store/apps/details?id=com.onlyoffice.documents";

    if (locale === "zh" && isTargetMobileApp) {
      return {
        ...item,
        href: "/zh/download-desktop#mobile",
      };
    }

    return item;
  });
    
  const getImageUrl = (item: IAppsItems): string => {
    if (imageUrl && imageUrl !== "AppsImage") return imageUrl;
    if (item.platform === "ios") return imageUrlIOS;
    if (item.platform === "android") return imageUrlAndroid;
    return "/images/templates/for-government/apps/download.svg";
  };

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
            {filteredApps.map((item, index) => (
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
                    backgroundImage: `url(${getImageUrl(item)})`,
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
          <img src={t("Image")} srcSet={t("Image2x")} alt="Screenshot" />
        </StyledAppsText>
      </StyledAppsWrapper>
    </Section>
  );
};

export { Apps };
