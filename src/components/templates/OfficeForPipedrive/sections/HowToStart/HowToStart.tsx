import { useTranslation, Trans } from "next-i18next";
import {
  StyledHowToStart,
  StyledHowToStartInfo,
  StyledHowToStartText,
} from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { HowToStartSwitcher } from "@src/components/widgets/HowToStartSwitcher";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const HowToStart = () => {
  const { t } = useTranslation("office-for-pipedrive");

  return (
    <StyledHowToStart
      id="how-to-start"
      tabletSmallSpacing={["80px", "80px"]}
    >
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <HowToStartSwitcher
          id="how-to-start-switcher"
          className="how-to-start-switcher"
          namespace="office-for-pipedrive"
          items={items}
        />

        <StyledHowToStartInfo>
          <StyledHowToStartText size={2}>
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  href="https://github.com/ONLYOFFICE/onlyoffice-pipedrive?tab=readme-ov-file#onlyoffice-app-for-pipedrive"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
                <Link
                  key={1}
                  href="https://helpcenter.onlyoffice.com/integration/pipedrive.aspx"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </StyledHowToStartText>

        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
