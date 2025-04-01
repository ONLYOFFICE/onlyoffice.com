import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { SimpleHowToStart } from "@src/components/widgets/SimpleHowToStart";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-redmine");

  return (
    <StyledHowToStart id="how-to-start">
      <Container>
        <SimpleHowToStart
          text={
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  href="https://helpcenter.onlyoffice.com/integration/redmine.aspx"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          }
          header={t("HowToStart")}
          imageHeight={378}
          imageUrl={t("HowToStartImgUrl")}
          items={items.map((item) => ({
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
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
