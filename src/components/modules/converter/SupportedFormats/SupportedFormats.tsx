import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import {
  StyledSupportedFormatsColumn,
  StyledSupportedFormatsItem,
  StyledSupportedFormatsItems,
  StyledSupportedFormatsWrapper,
} from "./SupportedFormats.styled";
import { formats } from "./data/formats";

const SupportedFormats = () => {
  const { t } = useTranslation("converter-common");

  return (
    <Section id="formats-supported">
      <Container>
        <Heading level={2} size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey="SupportedFormats"
            components={[<Text as="span" color="#FF6F3D" key={0} />]}
          />
        </Heading>
        <StyledSupportedFormatsWrapper>
          {formats.map((item, index) => (
            <StyledSupportedFormatsColumn className={item.name} key={index}>
              <Heading
                // className={item.name}
                label={t(item.name)}
                level={5}
                size={5}
              />
              <StyledSupportedFormatsItems>
                {item.formats.map((format, index) => (
                  <StyledSupportedFormatsItem key={index}>
                    {format}
                  </StyledSupportedFormatsItem>
                ))}
              </StyledSupportedFormatsItems>
            </StyledSupportedFormatsColumn>
          ))}
        </StyledSupportedFormatsWrapper>
      </Container>
    </Section>
  );
};

export { SupportedFormats };
