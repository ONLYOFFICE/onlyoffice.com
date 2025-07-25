import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import {
  StyledAcceptItem,
  StyledAcceptItems,
  StyledAcceptItemText,
  StyledAcceptSocialButton,
  StyledAcceptSocialIcon,
  StyledAcceptSocialIconLink,
  StyledAcceptSocialIcons,
  StyledAcceptWrapper,
} from "./Accept.styled";
import { socialIcons } from "./data/social-icons";
import { useState } from "react";
import { MailModal } from "./sub-components/MailModal";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

const Accept = () => {
  const { t } = useTranslation("influencer-program");
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);

  return (
    <Section>
      <Container>
        <StyledAcceptWrapper>
          <Heading level={2} size={3} textAlign="center">
            <Trans
              t={t}
              i18nKey="WhatWeAccept"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>

          <StyledAcceptItems>
            {items.map((item, index) => (
              <StyledAcceptItem $positionX={item.positionX} key={index}>
                <StyledAcceptItemText label={t(item.title)} />
                <StyledAcceptItemText
                  color="#808080"
                  fontStyle="italic"
                  label={t(item.text)}
                />
              </StyledAcceptItem>
            ))}
          </StyledAcceptItems>

          <StyledAcceptSocialIcons>
            {socialIcons.map((item, index) => (
              <StyledAcceptSocialIcon
                key={index}
                title={t(item.title)}
                onClick={
                  !item.link ? () => setIsMailModalOpen(true) : undefined
                }
              >
                {item.link ? (
                  <StyledAcceptSocialIconLink
                    $iconPosition={item.iconPosition}
                    href={t(item.link)}
                    target="_blank"
                  />
                ) : (
                  <StyledAcceptSocialButton $iconPosition={item.iconPosition} />
                )}
              </StyledAcceptSocialIcon>
            ))}
          </StyledAcceptSocialIcons>

          <Button as="a" href="#form" label={t("ApplyNow")} />
        </StyledAcceptWrapper>

        <MailModal
          isOpen={isMailModalOpen}
          onClose={() => setIsMailModalOpen(false)}
        />
      </Container>
    </Section>
  );
};

export { Accept };
