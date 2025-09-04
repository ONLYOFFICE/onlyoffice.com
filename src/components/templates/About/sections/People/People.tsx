import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import {
  StyledPeopleHeading,
  StyledPeopleLeafBg,
  StyledPeopleLink,
  StyledPeopleSection,
  StyledPeopleWorldBg
} from "./People.styled";

const People = () => {
  const { t } = useTranslation("about");

  return (
    <StyledPeopleSection background="linear-gradient(134.97deg, #FFC671 0%, #FF7541 64.06%, #FF6F3D 100%);">
      <Container>
        <StyledPeopleWorldBg />
        <Text
          label={t("PeopleTextOnlyOffice")}
          textAlign="center"
          color="#fff"
        />
        <StyledPeopleHeading
          label={t("PeopleTextCount")}
          textAlign="center"
          color="#fff"
          level={2}
          size={2}
        />
        <Text
          label={t("PeopleTextAllOver")}
          textAlign="center"
          color="#fff"
        />
        <StyledPeopleLink
          label={t("PeopleTextCustomer")}
          textUnderline={true}
          hover="underline-none"
          color="#fff"
        />
      </Container>
      <StyledPeopleLeafBg />
    </StyledPeopleSection>
  );
};

export { People };