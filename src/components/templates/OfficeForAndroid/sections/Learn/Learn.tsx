import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { CardLink } from "@src/components/widgets/CardLink";
import { items } from "./data/items";
import { hideConfig } from "./utils/hideConfig";

import { StyledLearnHeading, StyledLearnList, StyledLearnSection } from "./Learn.styled";

const Learn = () => {
  const { t } = useTranslation("office-for-android");
  const { locale } = useRouter();

  return (
    <StyledLearnSection
      $isDisplay={hideConfig.includes(locale ?? "en") ? false : true}
      background="#F9F9F9"
      desktopSpacing={["112px", "56px"]}
      tabletSpacing={["112px", "56px"]}
    >
      <StyledLearnHeading
        label={t("LearnMoreHeading")}
        level={2}
        size={3}
        textAlign="center"
      />
      <StyledLearnList>
        {items.map((item) => (
          <CardLink
            key={item.title}
            href={item.href}
            icon={{
              iconUrl: item.image,
              iconWidthDesktop: "100%",
              iconHeightDesktop: "100%",
              iconWidthTabletSmall: "100%",
              iconHeightTabletSmall: "100%",
              iconBlockHeightDesktop: "180px",
              iconBlockHeightTabletSmall: "180px",
              iconBlockHeightMobile: "137px",
            }}
            title={t(item.title)}
            text={t(item.text)}
            subtitle={t(item.subtitle)}
            textAlign="left"
            widthDesktopSmall="352px"
            widthTabletSmall="352px"
            widthMobile="272px"
          />
        ))}
      </StyledLearnList>
    </StyledLearnSection>
  );
};

export { Learn };
