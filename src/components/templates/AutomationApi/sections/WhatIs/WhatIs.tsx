import { Trans, useTranslation } from "next-i18next";
import {
  StyledWhatContent,
  StyledWhatSubheading,
  StyledWhatHeading,
} from "./WhatIs.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { WatchVideo } from "@src/components/widgets/WatchVideo";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const WhatIs = () => {
  const { t } = useTranslation("automation-api");

  const scrollToBlock = () => {
    const element = document.getElementById("examples_block");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["112px", "112px"]}
      tabletSmallSpacing={["88px", "88px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledWhatContent>
          <img src='/images/templates/automation-api/what-is/automation_api.svg' alt="Image" />
          <StyledWhatHeading level={2} size={2}>
            <Trans
              t={t}
              i18nKey="WhatIsTitle"
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </StyledWhatHeading>
          <StyledWhatSubheading level={2} size={5}>
            <Trans
              t={t}
              i18nKey="WhatIsSubtitle"
              components={[
                <Link
                  href="https://api.onlyoffice.com/docs/docs-api/usage-api/automation-api/"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  target="_blank"
                  key="0"
                />,
              ]}
            />
          </StyledWhatSubheading>
          <Link
            onClick={scrollToBlock}
            color="main"
            textUnderline
            hover="underline-none"
            label={t("CheckExamples")}
          />
          <WatchVideo
            heading={t("Webinar")}
            customLabel={t("WatchOurWebinar")}
            videoImgUrl="/images/templates/automation-api/what-is/automation_api_webinar.jpg"
            videoUrl="https://www.youtube.com/embed/d45OkcDZtNE"
          />
          </StyledWhatContent>
      </Container>
    </Section>
  );
};

export { WhatIs };
