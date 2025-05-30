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
  const { t } = useTranslation("office-for-box");

  return (
    <StyledHowToStart>
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
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
          }))}
        />

        <StyledHowToStartInfo>
          <StyledHowToStartText size={2}>
            <Trans
              t={t}
              i18nKey="CheckDetailedInstructions"
              components={[
                <Link
                  key={0}
                  href="https://helpcenter.onlyoffice.com/integration/box.aspx"
                  target={"_blank"}
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
              i18nKey="TheAppUsesThePreConfiguredTenant"
              components={[
                <Link
                  key={0}
                  href="/docs-registration"
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
