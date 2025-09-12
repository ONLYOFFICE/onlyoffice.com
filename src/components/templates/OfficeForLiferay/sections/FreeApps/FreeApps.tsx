import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledFreeAppsHeading,
  StyledSection,
  StyledSolutionCard,
} from "./FreeApps.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const FreeApps = () => {
  const { t } = useTranslation("office-for-liferay");

  return (
    <StyledSection background="#f9f9f9">
      <Container>
        <StyledFreeAppsHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="FreeAppsHeading"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledFreeAppsHeading>

        <StyledSolutionCard
          large
          imgUrl={getAssetUrl("/images/templates/office-for-liferay/free-apps/desktop.svg")}
          text={
            <Trans
              t={t}
              i18nKey="FreeAppsDesktopText"
              components={[<b key={0} />]}
            />
          }
          customLinks={[
            <Button
              key={0}
              id="free-apps-free-desktop-apps"
              as="a"
              href="/download-desktop?from=officeforliferay"
            >
              {t("GetFreeDesktopApps")}
            </Button>,
          ]}
        />
      </Container>
    </StyledSection>
  );
};

export { FreeApps };
