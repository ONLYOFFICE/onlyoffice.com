import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

import {
  StyledExperienceLeft,
  StyledExperienceRight,
  StyledExperienceSubtitleWrapper,
  StyledExperienceWrapper,
} from "./Experience.styled";

const Experience = () => {
  const { t } = useTranslation("docspace-enterprise");
  return (
    <Section
      background="#333333"
      tabletSpacing={["112px", "112px"]}
      mobileSpacing={["64px", "64px"]}
    >
      <Container maxWidth="1180px" tabletSpacing="0" mobileSpacing="0">
        <StyledExperienceWrapper>
          <StyledExperienceLeft>
            <Heading
              level={2}
              className="title"
              color="#ffffff"
              label={t("ExperienceFlawless")}
            />
            <Text
              className="text"
              color="#ffffff"
              label={t("ExperienceWithONLYOFFICE")}
            />
            <StyledExperienceSubtitleWrapper>
              <Text className="subtitle" color="#ffffff">
                <Trans
                  t={t}
                  i18nKey={t("ExperienceFreeDesktopApps")}
                  components={[
                    <Link
                      href="/download-desktop#desktop"
                      color="main"
                      textUnderline={true}
                      key={0}
                    />,
                    <Link
                      href="/download-desktop#mobile"
                      color="main"
                      textUnderline={true}
                      key={1}
                    />,
                  ]}
                />
              </Text>
            </StyledExperienceSubtitleWrapper>
          </StyledExperienceLeft>
          <StyledExperienceRight>
            <img
              src="/images/templates/docspace-enterprise/experience/experience-image.svg"
              alt="experience image"
            />
          </StyledExperienceRight>
        </StyledExperienceWrapper>
      </Container>
    </Section>
  );
};

export { Experience };
