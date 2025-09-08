import { useState, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart, StyledHowToStartInfo } from "./HowToStart.styled";
import { IHowToStart } from "./HowToStart.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";

const HowToStart = ({ activeTab }: IHowToStart) => {
  const { t } = useTranslation("office-for-drupal");

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(activeTab);
  }, [activeTab]);

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          activeTab={activeIndex}
          onChange={setActiveIndex}
          tabs={items.map((tab) => ({
            label: t(tab.label),
            items: tab.items.map((item) => ({
              imgUrl: t(item.imgUrl),
              heading: item.headingLinks ? (
                <Trans
                  t={t}
                  i18nKey={String(item.heading)}
                  components={item.headingLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      target={link.isExternal ? "_blank" : undefined}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />
                  ))}
                />
              ) : (
                t(String(item.heading))
              ),
            })),
          }))}
        />

        <StyledHowToStartInfo>
          <Text size={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  id="how-to-start-instructions-help"
                  href={t("ReadDetailedInstructionsLink")}
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
