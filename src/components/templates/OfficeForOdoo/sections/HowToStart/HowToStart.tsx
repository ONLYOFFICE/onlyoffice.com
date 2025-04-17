import { useTranslation, Trans } from "next-i18next";
import {
  StyledHowToStart,
  StyledHowToStartInfo,
  StyledHowToStartText,
  StyledHowToStartSubText,
} from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const HowToStart = () => {
  const { t } = useTranslation("office-for-odoo");

  return (
    <StyledHowToStart
      id="how-to-start"
      background="#f9f9f9"
      tabletSmallSpacing={["80px", "80px"]}
    >
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          id="how-to-start-carousel"
          className="how-to-start-carousel"
          namespace="office-for-odoo"
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
                  href="https://helpcenter.onlyoffice.com/integration/odoo.aspx"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </StyledHowToStartText>

          <StyledHowToStartSubText>
            <Trans
              t={t}
              i18nKey="ToBeAbleToUseTheTemplatesApp"
              components={[
                <Link
                  key={0}
                  href="mailto:sales@onlyoffice.com"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </StyledHowToStartSubText>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
