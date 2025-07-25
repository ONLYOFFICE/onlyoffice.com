import { Heading } from "@src/components/ui/Heading";
import {
  StyledHeaderWrapper,
  StyledHeaderSubheader,
  StyledHeaderParagraph,
} from "./Hero.styled";
import { Trans } from "next-i18next";
import { useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const Hero = () => {
  const { t } = useTranslation("wopi-comparison");

  return (
    <StyledHeaderWrapper
      background="#f9f9f9"
      desktopSpacing={["168px", "56px"]}
      tabletSpacing={["168px", "56px"]}
      tabletSmallSpacing={["136px", "40px"]}
      mobileSpacing={["96px", "32px"]}
    >
      <Container>
        <Heading level={1}>
          <Trans
            t={t}
            i18nKey="HeroTitle"
            components={[
              <Text as="span" color="main" key="0" />,
              <Text as="p" key="1" />,
            ]}
          />
        </Heading>
        <StyledHeaderSubheader>
          <Trans
            t={t}
            i18nKey="HeroParagraph"
            components={[
              <Link
                href="/office-suite?from=wopi-comparison"
                color="main"
                textUnderline
                hover="underline-none"
                key="0"
              />,
            ]}
          />
        </StyledHeaderSubheader>
        <StyledHeaderParagraph>
          {t("HeroSmallerParagraph")}
        </StyledHeaderParagraph>
      </Container>
    </StyledHeaderWrapper>
  );
};

export { Hero };
