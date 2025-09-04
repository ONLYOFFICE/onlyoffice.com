import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";

import {
  StyledGetAccessButtonsItem,
  StyledGetAccessButtonsLink,
  StyledGetAccessButtonsList,
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
      <Container maxWidth="1010px">
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
        <StyledGetAccessButtonsList>
          {items.map((item) => (
            <StyledGetAccessButtonsItem key={item.id}>
              <StyledGetAccessButtonsLink
                label={t(item.label)}
                href={t(item.href, {defaultValue: item.href})}
                $iconUrl={t(item.iconUrl, {defaultValue: item.iconUrl})}
              />
            </StyledGetAccessButtonsItem>
          ))}
        </StyledGetAccessButtonsList>
      </Container>
    </StyledGetAccessSection>
  );
};

export { GetAccess };