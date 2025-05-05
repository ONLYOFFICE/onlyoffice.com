import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";

import {
  StyledExperienceHeading,
  StyledExperienceLeft,
  StyledExperienceRight,
  StyledExperienceSubtitle,
  StyledExperienceSubtitleWrapper,
  StyledExperienceText,
  StyledExperienceWrapper,
} from "./Experience.styled";

const Experience = () => {
  const { t } = useTranslation("docspace-enterprise");
  return (
    <Section background="#333333">
      <Container maxWidth="1180px">
        <StyledExperienceWrapper>
          <StyledExperienceLeft>
            <StyledExperienceHeading
              level={2}
              size={3}
              color="#ffffff"
              label={t("ExperienceFlawless")}
            />
            <StyledExperienceText
              color="#ffffff"
              size={2}
              label={t("ExperienceWithONLYOFFICE")}
            />
            <StyledExperienceSubtitleWrapper>
              <StyledExperienceSubtitle color="#ffffff" size={3}>
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
              </StyledExperienceSubtitle>
            </StyledExperienceSubtitleWrapper>
          </StyledExperienceLeft>
          <StyledExperienceRight />
        </StyledExperienceWrapper>
      </Container>
    </Section>
  );
};

export { Experience };
