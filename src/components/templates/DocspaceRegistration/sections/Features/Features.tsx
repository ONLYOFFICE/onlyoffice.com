import { useTranslation } from "next-i18next";
import {
  StyledFeatures,
  StyledFeaturesWrapper,
  StyledFeaturesContent,
  StyledFeaturesHeading,
  StyledFeaturesList,
  StyledFeaturesItem,
  StyledFeaturesItemIcon,
  StyledFeaturesItemTitle
} from "./Features.styled";
import { Container } from "@src/components/ui/Container";

const Features = () => {
  const { t } = useTranslation("docspace-registration");

  const features = [
    {
      id: "collaboration-rooms",
      icon: "cl",
      title: t("CollaborationRooms"),
      link: "/collaboration-rooms"
    },
    {
      id: "custom-rooms",
      icon: "cst",
      title: t("CustomRooms"),
      link: "/custom-rooms"
    },
    {
      id: "form-filling-rooms",
      icon: "ff",
      title: t("FormFillingRooms"),
      link: "/form-filling-rooms"
    },
    {
      id: "zoom-rooms",
      icon: "mt",
      title: t("ZoomRooms"),
      link: "/office-for-zoom"
    },
    {
      id: "public-rooms",
      icon: "pub",
      title: t("PublicRooms"),
      link: "/public-rooms"
    },
    {
      id: "document-editors",
      icon: "de",
      title: t("DocumentEditors"),
      link: "/office-suite"
    }
  ];

  return (
    <StyledFeatures>
      <Container maxWidth="1277px">
        <StyledFeaturesWrapper>
          <StyledFeaturesContent>
            <StyledFeaturesHeading size={3}>{t("FeaturesTitle")}</StyledFeaturesHeading>
            <StyledFeaturesList>
              {features.map((feature) => (
                <StyledFeaturesItem key={feature.id}>
                  <a href={feature.link}>
                    <StyledFeaturesItemIcon className={feature.icon} />
                    <StyledFeaturesItemTitle>{feature.title}</StyledFeaturesItemTitle>
                  </a>
                </StyledFeaturesItem>
              ))}
            </StyledFeaturesList>
          </StyledFeaturesContent>
        </StyledFeaturesWrapper>
      </Container>
    </StyledFeatures>
  );
};

export { Features };
