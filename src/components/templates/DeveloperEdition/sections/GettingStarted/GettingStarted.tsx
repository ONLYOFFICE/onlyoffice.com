import { useTranslation } from "next-i18next";
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
import { items } from "./data/items";

const GettingStarted = () => {
  const { t } = useTranslation("developer-edition");

  return (
    <Section background="#f5f5f5">
      <StyledContainer>
        <Heading level={2}>{t("GetStartedTitle")}</Heading>

        <OptionsContainer>
          {items.map((item) => (
            <OptionCard key={item.title}>
              <IconContainer $color={item.color} $icon={item.icon} />
              <OptionContainer>
                <div>
                  <Heading level={4}>{t(item.title)}</Heading>
                  <OptionDescription>{t(item.text)}</OptionDescription>
                </div>
                <Button
                  as="a"
                  variant="tertiary"
                  href={item.link}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  {t("GetStarted")}
                </Button>
              </OptionContainer>
            </OptionCard>
          ))}
        </OptionsContainer>
      </StyledContainer>
    </Section>
  );
};

export { GettingStarted };
