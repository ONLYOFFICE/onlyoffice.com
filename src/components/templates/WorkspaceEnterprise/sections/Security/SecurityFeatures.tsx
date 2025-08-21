import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledSecurityItems,
  StyledText,
  SecurityItem,
} from "./SecurityFeatures.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";

const SecurityFeatures = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <Section>
      <Container>
        <Heading level={2} label={t("SecurityFeatures")} textAlign="center" />
        <StyledText label={t("SecurityFeaturesText")} textAlign="center" />
        <StyledSecurityItems>
          {items.map((item) => (
            <SecurityItem key={item.heading} $icon={item.icon} $iconPosition={item.iconPosition}>
              <Heading level={4}>{t(String(item.heading))}</Heading>
              <Text>{t(String(item.text))}</Text>
              <Link href={item.link} color="main" textUnderline hover="underline-none">
                {item.label ? t(item.label) : t("LearnMore")}
              </Link>
            </SecurityItem>
          ))}
        </StyledSecurityItems>
      </Container>
    </Section>
  );
};

export { SecurityFeatures };
