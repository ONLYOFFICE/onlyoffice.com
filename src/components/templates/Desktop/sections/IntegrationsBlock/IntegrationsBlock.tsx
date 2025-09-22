import { useTranslation } from "next-i18next";
import {
  StyledText,
  LogoRow,
  Logo,
  StyledImage,
  StyledContainer,
  StyledLink,
  StyledButton
} from "./IntegrationsBlock.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { connectors } from "./data/items";
import { Button } from "@src/components/ui/Button";

interface IntegrationsBlockProps {
  logos?: boolean;
  image: string;
  image2x: string;
  title: string;
  description: string;
  linkHref?: string;
  linkText?: string;
  btnText?: string;
}

const IntegrationsBlock = ({
  title,
  description,
  logos,
  image,
  image2x,
  linkHref,
  linkText,
  btnText
}: IntegrationsBlockProps) => {
  const { t } = useTranslation("desktop");

  return (
    <Section background="#f9f9f9">
      <StyledContainer>
        <Heading level={2}>
          <Trans
            t={t}
            i18nKey={title}
            components={[<Text as="span" color="main" key={0} />]}
          />
        </Heading>
        <StyledText>
          <Trans
            t={t}
            i18nKey={description}
            components={{br: <br />}}
          />
        </StyledText>
        {logos && (
          <LogoRow>
            {connectors.map((logo, index) => (
              <Logo key={index} $positionX={logo.positionX} $width={logo.width} />
            ))}
          </LogoRow>
        )}
        {linkHref && linkText &&<StyledLink textUnderline hover="underline-none" href={linkHref} target="_blank" color="main">{t(linkText)}</StyledLink>}
        {linkHref && btnText && <StyledButton forwardedAs="a" variant="secondary" href={linkHref} target="_blank">{t(btnText)}</StyledButton>}
        <StyledImage $image={t(image)} $image2x={t(image2x)} />
      </StyledContainer>
    </Section>
  );
};

export { IntegrationsBlock };
