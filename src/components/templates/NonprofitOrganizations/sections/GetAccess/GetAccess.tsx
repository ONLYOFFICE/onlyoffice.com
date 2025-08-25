import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";

import {
  StyledGetAccessHeading,
  StyledGetAccessIcon,
  StyledGetAccessSection,
  StyledGetAccessText
} from "./GetAccess.styled";

const GetAccess = () => {
  const { t } = useTranslation("nonprofit-organizations");

  return (
    <StyledGetAccessSection
      background="linear-gradient(162.82deg, #FFC671 0%, #FF7541 64.06%, #FF6F3D 100%)"
    >
      <Container>
        <StyledGetAccessIcon />
        <StyledGetAccessHeading
          level={2}
          size={4}
          color="#FFFFFF"
          textAlign="center"
          label={t("GetDesktopAndMobileAccess")}
        />
        <StyledGetAccessText
          color="#FFFFFF"
          textAlign="center"
          label={t("ONLYOFFICEOffersFreeDesktopApps")}
        />
      </Container>
    </StyledGetAccessSection>
  );
};

export { GetAccess };