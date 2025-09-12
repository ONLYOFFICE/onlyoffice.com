import { useState, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHowToStart,
  StyledHowToStartInfo,
  StyledHowToStartText,
} from "./HowToStart.styled";
import { IHowToStart } from "./HowToStart.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const HowToStart = ({ activeTab }: IHowToStart) => {
  const { t } = useTranslation("office-for-pipedrive");

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(activeTab);
  }, [activeTab]);

  return (
    <StyledHowToStart id="how-to-start" tabletSmallSpacing={["80px", "80px"]}>
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          activeTab={activeIndex}
          onChange={setActiveIndex}
          tabs={items.map((tab) => ({
            label: t(tab.label),
            items: tab.items.map((item) => ({
              imgUrl: getAssetUrl(t(item.imgUrl)),
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
          <StyledHowToStartText size={2}>
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  href="https://github.com/ONLYOFFICE/onlyoffice-pipedrive?tab=readme-ov-file#onlyoffice-app-for-pipedrive"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
                <Link
                  key={1}
                  href={t("ReadDetailedInstructionsLink")}
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </StyledHowToStartText>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
