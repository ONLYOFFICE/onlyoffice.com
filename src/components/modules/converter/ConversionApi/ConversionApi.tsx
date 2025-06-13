import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledConversionApiText,
  StyledConversionApiWrapper,
} from "./ConversionApi.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const ConversionApi = () => {
  const { t } = useTranslation("converter-common");

  return (
    <Section>
      <Container>
        <StyledConversionApiWrapper>
          <Heading level={2} size={3}>
            <Trans
              t={t}
              i18nKey="PowerfulAPI"
              components={[<Text as="span" color="#FF6F3D" key={0} />]}
            />
          </Heading>
          <StyledConversionApiText>
            <Text size={2} label={t("OOAPI")} />
            <Text size={2}>
              <Trans
                t={t}
                i18nKey="CheckAPI"
                components={[
                  <Link
                    href="https://api.onlyoffice.com"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key={0}
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
