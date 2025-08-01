import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledFileFormatImage,
  StyledFileFormatItemContent,
  StyledFileFormatLink,
  StyledFileFormatsHeading,
  StyledFileFormatsItem,
  StyledFileFormatsText,
  StyledFileFormatsWrapper,
  StyledFileFormatText,
} from "./FileFormats.styled";
import { fileFormats } from "./data/items";
import { Heading } from "@src/components/ui/Heading";

const FileFormats = () => {
  const { t } = useTranslation("document-management");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["92px", "118px"]}
      tabletSpacing={["92px", "118px"]}
      tabletSmallSpacing={["92px", "88px"]}
      mobileSpacing={["48px", "36px"]}
    >
      <Container>
        <StyledFileFormatsHeading
          level={2}
          size={3}
          label={t("WorkWithDifferent")}
        />
        <StyledFileFormatsText label={t("WorkWithDifferentText")} />
        <StyledFileFormatsWrapper>
          {fileFormats.map(({ icon, title, text, link }, index) => (
            <StyledFileFormatsItem key={index}>
              <StyledFileFormatImage
                $positionX={icon.positionX}
                $mobilePositionX={icon.mobilePositionX}
              />
              <StyledFileFormatItemContent>
                <Heading level={5} size={5} label={t(title)} />
                <StyledFileFormatText size={3} label={t(text)} />
                {link && (
                  <StyledFileFormatLink
                    href={link}
                    label={t("LearnMore")}
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />
                )}
              </StyledFileFormatItemContent>
            </StyledFileFormatsItem>
          ))}
        </StyledFileFormatsWrapper>
      </Container>
    </Section>
  );
};

export { FileFormats };
