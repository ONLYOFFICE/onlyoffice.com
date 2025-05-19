import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { CardLink } from "@src/components/widgets/CardLink";
import { items } from "./data/items";

import {
  StyledGettingHeading,
  StyledGettingList,
  StyledGettingText,
  StyledGettingFooter,
} from "./Getting.styled";

const Getting = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <Section>
      <Container mobileSpacing="0">
        <StyledGettingHeading
          size={2}
          level={2}
          label={t("GettingStarted")}
          textAlign="center"
        />
        <StyledGettingText
          size={1}
          label={t("GettingDeploy")}
          textAlign="center"
        />
        <StyledGettingList>
          {items.map((item) => (
            <CardLink
              key={item.title}
              href={item.href}
              icon={{ iconUrl: item.bgUrl }}
              title={t(item.title)}
              text={t(item.text)}
              subtitle={t(item.subtitle)}
            />
          ))}
        </StyledGettingList>
        <StyledGettingFooter>
          <Text size={2} textAlign="center" color="#333333">
            <Trans
              t={t}
              i18nKey="GettingFooterText"
              components={[
                <Link
                  key={0}
                  href="/download-community#docspace-community"
                  color="main"
                  textUnderline={true}
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledGettingFooter>
      </Container>
    </Section>
  );
};

export { Getting };
