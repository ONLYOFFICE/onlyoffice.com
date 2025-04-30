import { useTranslation, Trans } from "next-i18next";
import {
  StyledHowToStart,
  StyledHowToStartInfo,
  StyledHowToStartText,
} from "./HowToStart.styled";
import { IHowToStart } from "./HowToStart.types";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";

const HowToStart = ({ activeTab }: IHowToStart) => {
  const { t } = useTranslation("office-for-wordpress");

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          defaultActiveTab={activeTab}
          tabs={items.map((tab) => ({
            label: t(tab.label),
            items: tab.items.map((item) => ({
              imgUrl: t(item.imgUrl),
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
            })),
          }))}
        />

        <StyledHowToStartInfo>
          <StyledHowToStartText display="inline-block" size={2}>
            {activeTab === 0 ? (
              <Trans
                t={t}
                i18nKey="ReadDetailedInstructionsDocs"
                components={[
                  <Link
                    key={0}
                    id="how-to-start-instructions-help"
                    href="https://github.com/ONLYOFFICE/onlyoffice-docspace-wordpress"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                ]}
              />
            ) : (
              <Trans
                t={t}
                i18nKey="ReadDetailedInstructionsDocSpace"
                components={[
                  <Link
                    key={0}
                    id="how-to-start-instructions-help-github"
                    href="https://github.com/ONLYOFFICE/onlyoffice-wordpress"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                  <Link
                    key={1}
                    id="how-to-start-instructions-help-helpcenter"
                    href="https://helpcenter.onlyoffice.com/integration/wordpress.aspx"
                    target="_blank"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                ]}
              />
            )}
          </StyledHowToStartText>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
