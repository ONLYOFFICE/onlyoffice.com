import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledMobileApps,
  StyledMobileAppsButtonsWrapper,
  StyledMobileAppsHeading,
  StyledMobileAppsSection,
  StyledMobileAppsText,
  StyledMobileAppsContent,
} from "./MobileApps.styled";
import { Link } from "@src/components/ui/Link";
import { DownloadButton } from "@src/components/ui/DownloadButton";

const MobileApps = () => {
  const { t } = useTranslation("projects");

  return (
    <StyledMobileAppsSection background="#f6f6f6" $bgImage={t("MobileImage")}>
      <Container>
        <StyledMobileAppsContent>
          <StyledMobileApps>{t("MobileApps")}</StyledMobileApps>
          <StyledMobileAppsHeading level={4} label={t("StayMobile")} />
          <StyledMobileAppsText>
            <Trans
              t={t}
              i18nKey="WorkWithProjects"
              components={[
                <Link
                  href="/mobile-projects"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
                <Link
                  href="/projects-for-android"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="1"
                />,
              ]}
            />
          </StyledMobileAppsText>
          <StyledMobileAppsButtonsWrapper>
            <DownloadButton
              id="projects-app-store-button"
              platform="app-store"
              variant="secondary"
              href="https://apps.apple.com/us/app/onlyoffice-projects/id1353395928"
              target="_blank"
            />
            <DownloadButton
              id="projects-google-play-button"
              platform="google-play"
              variant="secondary"
              href="https://play.google.com/store/apps/details?id=com.onlyoffice.projects"
              target="_blank"
            />
          </StyledMobileAppsButtonsWrapper>
        </StyledMobileAppsContent>
      </Container>
    </StyledMobileAppsSection>
  );
};

export { MobileApps };
