import { useTranslation, Trans } from "next-i18next";
import {
  StyledSupportedFormats,
  StyledSupportedFormatsHeading,
  StyledSupportedFormatsItems,
  StyledSupportedFormatsItem,
  StyledSupportedFormatsItemImage,
  StyledSupportedFormatsItemHeading,
  StyledSupportedFormatsList,
  StyledSupportedFormatsListItem,
} from "./SupportedFormats.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { formats } from "./data/formats";

const SupportedFormats = () => {
  const { t } = useTranslation("converter");

  return (
    <StyledSupportedFormats id="supported-formats">
      <Container>
        <StyledSupportedFormatsHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="SupportedFormatsHeading"
            components={[<Text as="span" color="#FF6F3D" key={0} />]}
          />
        </StyledSupportedFormatsHeading>

        <StyledSupportedFormatsItems>
          {formats.map((format, index) => (
            <StyledSupportedFormatsItem key={index}>
              <StyledSupportedFormatsItemImage
                $imageUrl={format.image.url}
                $imagePositionX={format.image.positionX}
                $imagePositionY={format.image.positionY}
              />
              <StyledSupportedFormatsItemHeading
                level={4}
                textAlign="center"
                label={t(format.heading)}
              />
              <StyledSupportedFormatsList>
                {format.formats.map((format, index) => (
                  <StyledSupportedFormatsListItem key={index}>
                    {format}
                  </StyledSupportedFormatsListItem>
                ))}
              </StyledSupportedFormatsList>
            </StyledSupportedFormatsItem>
          ))}
        </StyledSupportedFormatsItems>
      </Container>
    </StyledSupportedFormats>
  );
};

export { SupportedFormats };
