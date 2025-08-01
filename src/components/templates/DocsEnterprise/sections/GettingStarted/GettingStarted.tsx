import { useTranslation, Trans } from "next-i18next";
import {
  StyledContainer,
  OptionsContainer,
  OptionCard,
  IconContainer,
  OptionDescription,
  OptionContainer,
} from "./GettingStarted.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const GettingStarted = () => {
  const { t } = useTranslation("docs-enterprise");

  return (
    <Section background="#f5f5f5">
      <StyledContainer>
        <Heading level={2}>{t("ChoicesHeader")}</Heading>

        <OptionsContainer>
          {items.map((item) => (
            <OptionCard key={item.title}>
              <IconContainer $color={t(item.color)} $icon={t(item.icon)} />
              <OptionContainer>
                <div>
                  <Heading level={4}>{t(item.title)}</Heading>
                  <OptionDescription>{t(item.text)}</OptionDescription>
                </div>
                <Button
                  as="a"
                  variant="tertiary"
                  href={t(item.link)}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  {t("GetStarted")}
                </Button>
              </OptionContainer>
            </OptionCard>
          ))}
        </OptionsContainer>

        <Text>
          <Trans
            t={t}
            i18nKey={String(t("CommunityVersion"))}
            components={[
              <Link
                key={0}
                href="/download-community#docs-community"
                color="main"
                textUnderline
                hover="underline-none"
              />
            ]}
          />
        </Text>
      </StyledContainer>
    </Section>
  );
};

export { GettingStarted };
