import { useTranslation, Trans } from "next-i18next";
import { useState } from "react";
import {
  StyledHowToStart,
  StyledHowToStartInfo,
  StyledHowToStartText,
} from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const HowToStart = () => {
  const { t } = useTranslation("office-for-pipedrive");
    const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <StyledHowToStart
      id="how-to-start"
      tabletSmallSpacing={["80px", "80px"]}
    >
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          id="how-to-start-carousel"
          className="how-to-start-carousel"
          namespace="office-for-pipedrive"
          items={items}
          defaultSelected={activeTab}
          onTabChange={setActiveTab}
          useTabs
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
                  href="https://helpcenter.onlyoffice.com/integration/pipedrive.aspx"
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
