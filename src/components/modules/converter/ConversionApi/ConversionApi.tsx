import { useTranslation, Trans } from "next-i18next";
import {
  StyledConversionApiWrapper,
  StyledConversionApiImage,
  StyledConversionApiHeading,
  StyledConversionApiText,
} from "./ConversionApi.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const ConversionApi = () => {
  const { t } = useTranslation("converter");

  return (
    <Section background="#f9f9f9">
      <Container>
        <StyledConversionApiWrapper>
          <StyledConversionApiImage />

          <StyledConversionApiHeading
            level={2}
          >
            <Trans
              t={t}
              i18nKey="PowerfulConversionAPI"
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </StyledConversionApiHeading>

          <StyledConversionApiText>
            <Text size={2} label={t("OOProvidesOneAPIToConvert")} />
            <Text size={2}>
              <Trans
                t={t}
                i18nKey="CheckOurAPIDocumentation"
                components={[
                  <Link
                    href="https://api.onlyoffice.com/"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                  />,
                ]}
              />
            </Text>
          </StyledConversionApiText>
        </StyledConversionApiWrapper>
      </Container>
    </Section>
  );
};

export { ConversionApi };
