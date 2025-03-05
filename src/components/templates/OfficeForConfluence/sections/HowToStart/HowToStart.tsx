import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart, StyledHowToStartInfo } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { WatchVideo } from "@src/components/widgets/WatchVideo";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-confluence");

  return (
    <StyledHowToStart id="how-to-start" bgColor="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
            heading: item.headingLinks ? (
              <Trans
                t={t}
                i18nKey={item.heading}
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
              t(item.heading)
            ),
          }))}
        />

        <StyledHowToStartInfo>
          <WatchVideo
            heading={t("HowToConnect")}
            videoImgUrl="/images/templates/office-for-confluence/how-to-start/watch-video.jpg"
            videoUrl="https://youtube.com/embed/bPorM--L11o"
          />

          <Text size={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  href="https://helpcenter.onlyoffice.com/integration/gettingstarted-confluence.aspx"
                  target={"_blank"}
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
