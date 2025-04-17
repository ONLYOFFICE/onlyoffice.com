import { useTranslation, Trans } from "next-i18next";
import { useState } from "react";
import { StyledHowToStart, StyledHowToStartInfo } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-wordpress");
  const [activeTab, setActiveTab] = useState(items[0].id);

  const instructionLinks = {
    docs: "https://helpcenter.onlyoffice.com/integration/wordpress.aspx",
    docspace: ["https://github.com/ONLYOFFICE/onlyoffice-docspace-wordpress", "https://helpcenter.onlyoffice.com/integration/wordpress-docspace.aspx"],
  };

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          id="how-to-start-carousel"
          className="how-to-start-carousel"
          namespace="office-for-wordpress"
          items={items}
          defaultSelected={activeTab}
          onTabChange={setActiveTab}
          useTabs
        />

        <StyledHowToStartInfo>
          <Text size={2} textAlign="center">
            <Trans
              t={t}
              i18nKey={`ReadDetailedInstructions${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
              components={
                activeTab === 'docspace'
                  ? [
                      <Link
                        key={0}
                        id="how-to-start-instructions-help-github"
                        href={instructionLinks.docspace[0]}
                        target="_blank"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={1}
                        id="how-to-start-instructions-help-helpcenter"
                        href={instructionLinks.docspace[1]}
                        target="_blank"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                    ]
                  : [
                      <Link
                        key={0}
                        id="how-to-start-instructions-help"
                        href={instructionLinks.docs}
                        target="_blank"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                    ]
              }
            />
          </Text>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
