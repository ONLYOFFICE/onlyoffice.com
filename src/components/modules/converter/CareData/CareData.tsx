import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { StyledCareData, StyledCareDataWrapper } from "./CareData.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const CareData = () => {
  const { t } = useTranslation("converter-common");

  return (
    <Section background="#F5F5F5">
      <Container>
        <Heading level={2} size={3} textAlign="center">
          <Trans
            t={t}
            i18nKey="WeCare"
            components={[<Text as="span" color="#FF6F3D" key={0} />]}
          />
        </Heading>
        <StyledCareDataWrapper>
          {items.map((item, index) => (
            <StyledCareData className={item} key={index}>
              <Text size={2}>
                <Trans
                  t={t}
                  i18nKey={String(item)}
                  components={[
                    <Link
                      href="https://github.com/ONLYOFFICE/DocumentServer"
                      target="_blank"
                      color="main"
                      hover="underline-none"
                      key="0"
                    />,
                  ]}
                />
              </Text>
            </StyledCareData>
          ))}
        </StyledCareDataWrapper>
      </Container>
    </Section>
  );
};

export { CareData };
