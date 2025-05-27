import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";


const Trusted = () => {
  const { t } = useTranslation("customers");

  return (
    <Section>
      <Container>
        <Heading size={4} level={2} textAlign="center">
          <Trans t={t} i18nKey={"TrustedHeadingTrustedAndLove"} components={[
              <Text as={"span"} color="main" key={0} />
            ]}
          />
        </Heading>
      </Container>
    </Section>
  );
};

export { Trusted };