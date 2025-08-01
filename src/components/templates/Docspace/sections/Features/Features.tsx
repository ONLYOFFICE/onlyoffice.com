import { items } from "./data/items";
import { StyledSection, StyledFeatureImageItem } from "./Features.styled";
import { useTranslation } from "next-i18next";

const Features = () => {
  const { t } = useTranslation("docspace");

  return (
    <StyledSection
      desktopSpacing={["0px", "0px"]}
      tabletSpacing={["0px", "0px"]}
      tabletSmallSpacing={["0px", "0px"]}
      mobileSpacing={["0px", "0px"]}
    >
      {items.map((item, index) => (
        <StyledFeatureImageItem
          key={index}
          heading={t(item.heading)}
          text={t(item.text)}
          position={{ desktop: "left" }}
          contentWidth={544}
          links={item.links?.map((link) => ({
            ...link,
            label: t(link.label),
          }))}
          image={{
            url: t(item.image.url),
            height: item.image.height,
            width: item.image.width,
          }}
        />
      ))}
    </StyledSection>
  );
};

export { Features };
