import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import {
  StyledProductiveContent,
  StyledProductiveIcon,
  StyledProductiveLink,
  StyledProductiveWrapper,
} from "./Productive.styled";
import { productiveItems } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { getLink } from "@src/utils/getLink";
import { ILocale } from "@src/types/locale";

const Productive = ({ locale }: ILocale) => {
  const { t } = useTranslation("document-management");

  return (
    <Section
      desktopSpacing={["134.5px", "134.5px"]}
      tabletSpacing={["134.5px", "134.5px"]}
      tabletSmallSpacing={["88px", "88px"]}
    >
      <Container>
        <Heading
          level={2}
          size={3}
          label={t("BeMoreProductive")}
          textAlign="center"
        />
        <StyledProductiveWrapper>
          {productiveItems.map(({ image, title, text, link }, index) => (
            <div key={index}>
              <StyledProductiveIcon
                $positionX={image.positionX}
                $mobilePositionX={image.mobilePositionX}
              />
              <StyledProductiveContent>
                <Heading level={4} size={5} label={t(title)} />
                <Text size={2} color="#666666" label={t(text)} />
                {link && (
                  <StyledProductiveLink
                    href={
                      link === "/app-directory"
                        ? getLink("marketplace", locale)
                        : link
                    }
                    label={t("SeeAllIntegrations")}
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />
                )}
              </StyledProductiveContent>
            </div>
          ))}
        </StyledProductiveWrapper>
      </Container>
    </Section>
  );
};

export { Productive };
