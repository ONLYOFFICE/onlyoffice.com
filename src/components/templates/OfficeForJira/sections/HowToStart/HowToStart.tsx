import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart, StyledHowToStartInfo } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { WatchVideo } from "@src/components/widgets/WatchVideo";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";
const HowToStart = () => {
  const { t } = useTranslation("office-for-jira");

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          items={items.map((item) => ({
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
          }))}
        />

        <StyledHowToStartInfo>
          <WatchVideo
            heading={t("HowToConnect")}
            videoImgUrl={getAssetUrl("/images/templates/office-for-jira/how-to-start/video-preview.png")}
            videoUrl="https://www.youtube.com/embed/mQgpkMwwbLE"
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
