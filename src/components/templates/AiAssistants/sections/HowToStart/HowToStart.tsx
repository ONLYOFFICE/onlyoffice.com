import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStartHeading } from "./HowToStart.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const HowToStart = () => {
  const { t } = useTranslation("ai-assistants");

  return (
    <Section tabletSpacing={["80px", "80px"]}>
      <Container>
        <StyledHowToStartHeading
          level={2}
          textAlign="center"
          label={t("GetStarted")}
        />

        <StepCarousel
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
            heading: (
              <Trans
                t={t}
                i18nKey={String(item.heading)}
                components={[
                  <Text as="span" color="#333" fontWeight={700} key="0" />,
                ]}
              />
            ),
          }))}
        />
      </Container>
    </Section>
  );
};

export { HowToStart };
