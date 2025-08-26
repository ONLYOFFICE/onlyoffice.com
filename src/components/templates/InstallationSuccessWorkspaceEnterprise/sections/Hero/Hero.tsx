import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import {
  StyledInstallationSuccessWorkspaceEnterpriseHero,
  StyledInstallationSuccessWorkspaceEnterpriseHeroImage,
  StyledHeading,
  StyledEditorsArea,
  StyledEditorsAreaImage,
  StyledEditorsAreaRight,
  StyledEditorsAreaLeft,
  StyledList,
  StyledEditorsList,
  StyledEditorsListItem,
  StyledEditorsText,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { desktopItems, mobileItems } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("installation-success-workspace-enterprise");

  return (
    <StyledInstallationSuccessWorkspaceEnterpriseHero
      desktopSpacing={["158px", "111px"]}
      tabletSpacing={["158px", "111px"]}
      tabletSmallSpacing={["120px", "40px"]}
      mobileSpacing={["96px", "20px"]}
    >
      <Container>
        <StyledInstallationSuccessWorkspaceEnterpriseHeroImage />
        <StyledHeading level={1}>{t("Header")}</StyledHeading>
        <StyledEditorsArea>
          <StyledEditorsAreaLeft>
            <Heading level={3}>
              <Trans
                t={t}
                i18nKey="EnhanceHeader"
                components={[<Text as="span" color="#FF6F3D" key={0} />]}
              />
            </Heading>
            <StyledEditorsAreaImage />
          </StyledEditorsAreaLeft>
          <StyledEditorsAreaRight>
            <StyledList>
              <Heading level={4}>
                <Trans
                  t={t}
                  i18nKey="DesktopHeader"
                  components={[<Text as="span" color="#FF6F3D" key={0} />]}
                />
              </Heading>
              <StyledEditorsList>
                {desktopItems.map((item, index) => (
                  <StyledEditorsListItem key={index}>
                    <Trans
                      t={t}
                      i18nKey={item}
                      components={[<strong key={0} />]}
                    />
                  </StyledEditorsListItem>
                ))}
              </StyledEditorsList>
              <StyledEditorsText>{t("DesktopAvailableFor")}</StyledEditorsText>
              <Button
                as="a"
                href="/download-desktop#desktop"
                label={t("DownloadButton")}
              />
            </StyledList>
            <StyledList>
              <Heading level={4}>
                <Trans
                  t={t}
                  i18nKey="MobileHeader"
                  components={[<Text as="span" color="#FF6F3D" key={0} />]}
                />
              </Heading>
              <StyledEditorsList>
                {mobileItems.map((item, index) => (
                  <StyledEditorsListItem key={index}>
                    <Trans
                      t={t}
                      i18nKey={item}
                      components={[<strong key={0} />]}
                    />
                  </StyledEditorsListItem>
                ))}
              </StyledEditorsList>
              <StyledEditorsText>{t("MobileAvailableFor")}</StyledEditorsText>
              <Button
                as="a"
                href="/download-desktop#mobile"
                label={t("DownloadButton")}
              />
            </StyledList>
          </StyledEditorsAreaRight>
        </StyledEditorsArea>
      </Container>
    </StyledInstallationSuccessWorkspaceEnterpriseHero>
  );
};

export { Hero };
