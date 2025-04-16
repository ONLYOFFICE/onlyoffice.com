import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import {
  ImproveItems,
  StyledSocialMeadiaText,
  StyledSocialMediaIcon,
  StyledSocialMediaIconButton,
  StyledSocialMediaIconLink,
  StyledSocialMediaIcons,
} from "./Improve.styled";
import { items } from "./data/items";
import { ImproveItem } from "./sub-components/ImproveItem";
import { Link } from "@src/components/ui/Link";
import { socialIcons } from "./data/social-icons";
import { useState } from "react";
import { MailModal } from "./sub-components/MailModal";

const Improve = () => {
  const { t } = useTranslation("contribute");
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);

  return (
    <Section
      desktopSpacing={["131px", "160px"]}
      tabletSmallSpacing={["88px", "91px"]}
      mobileSpacing={["48px", "50px"]}
    >
      <Container>
        <Heading level={2} size={3} label={t("ImproveOO")} textAlign="center" />
        <ImproveItems>
          {items.map((item, index) => (
            <ImproveItem key={index} {...item} />
          ))}
        </ImproveItems>
        <StyledSocialMeadiaText size={2}>
          <Trans
            t={t}
            i18nKey="SocialMediaText"
            components={[
              <Link
                href="https://www.onlyoffice.com/blog"
                color="main"
                textUnderline
                hover="underline-none"
                key="0"
              />,
            ]}
          />
        </StyledSocialMeadiaText>
        <StyledSocialMediaIcons>
          {socialIcons.map((item, index) => (
            <StyledSocialMediaIcon
              key={index}
              title={t(item.title)}
              $iconPosition={item.iconPosition}
              onClick={!item.link ? () => setIsMailModalOpen(true) : undefined}
            >
              {item.link ? (
                <StyledSocialMediaIconLink
                  href={t(item.link)}
                  target="_blank"
                />
              ) : (
                <StyledSocialMediaIconButton />
              )}
            </StyledSocialMediaIcon>
          ))}
        </StyledSocialMediaIcons>

        <MailModal
          isOpen={isMailModalOpen}
          onClose={() => setIsMailModalOpen(false)}
        />
      </Container>
    </Section>
  );
};

export { Improve };
