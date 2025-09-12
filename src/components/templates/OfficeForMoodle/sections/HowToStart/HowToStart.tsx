import { useTranslation, Trans } from "next-i18next";
import { useState } from "react";
import { StyledHowToStart, StyledHowToStartInfo, StyledStepCarousel } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { WatchVideo } from "@src/components/widgets/WatchVideo";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { itemsTab1 } from "./data/itemsTab1";
import { itemsTab2 } from "./data/itemsTab2";
import { Tabs } from "@src/components/widgets/Tabs";

import { getAssetUrl } from "@utils/getAssetUrl";
const HowToStart = () => {
  const { t } = useTranslation("office-for-moodle");
  const [selectedTab, setSelectedTab] = useState("tab-1");

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />
        <Tabs
          items={[
            {
              label: t("Tab1Label"),
              id: 'tab-1',
              content: (
                <StyledStepCarousel
                  items={itemsTab1.map((itemTab) => ({
                    imgUrl: itemTab.imgUrl,
                    heading: itemTab.headingLinks ? (
                      <Trans
                        t={t}
                        i18nKey={String(itemTab.heading)}
                        components={itemTab.headingLinks.map((link, index) => (
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
                      t(String(itemTab.heading))
                    ),
                  }))}
                />
              ),
            },
            {
              label: t("Tab2Label"),
              id: 'tab-2',
              content: (
                <StyledStepCarousel
                  items={itemsTab2.map((itemTab2) => ({
                    imgUrl: itemTab2.imgUrl,
                    heading: itemTab2.headingLinks ? (
                      <Trans
                        t={t}
                        i18nKey={String(itemTab2.heading)}
                        components={itemTab2.headingLinks.map((link, index) => (
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
                      t(String(itemTab2.heading))
                    ),
                  }))}
                />
              ),
            },
          ]}
          onChange={(id) => setSelectedTab(id)}
          selected={selectedTab}
        />

        <StyledHowToStartInfo>
          <WatchVideo
            heading={t("HowToConnect")}
            videoImgUrl={getAssetUrl("/images/templates/office-for-moodle/how-to-start/watch-video.jpg")}
            videoUrl="https://youtube.com/embed/JudgGPQo1nQ"
          />

          <Text size={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  id="how-to-start-instructions"
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
