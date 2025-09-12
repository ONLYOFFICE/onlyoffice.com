import React from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  ContactSection,
  StyledContainer,
  ContactIcon,
  ContactTextBlock,
} from "./Contact.styled";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

export const Contact = () => {
  const { t } = useTranslation("academy");

  const scrollToBlock = () => {
    const element = document.getElementById("discover");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ContactSection
      background="#333333"
      tabletSpacing={["112px", "112px"]}
      tabletSmallSpacing={["80px", "264px"]}
      mobileSpacing={["48px", "268px"]}
    >
      <StyledContainer>
        <ContactIcon />
        <ContactTextBlock>
          <Heading color="white" level={3}>
            {t("ContactTitle")}
          </Heading>
          <Text>
            <Trans
              t={t}
              i18nKey="ContactDescription"
              components={[<Text as="span" key="0" />]}
            />
          </Text>
          <Button onClick={scrollToBlock}>
            {t("ContactButtonText")}
          </Button>
          <Text as="span" fontSize="14px">
            <Trans
              t={t}
              i18nKey="ContactInfoText"
              components={[
                <Link
                  color="main"
                  key="0"
                  href="mailto:training@onlyoffice.com"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </ContactTextBlock>
      </StyledContainer>
    </ContactSection>
  );
};
