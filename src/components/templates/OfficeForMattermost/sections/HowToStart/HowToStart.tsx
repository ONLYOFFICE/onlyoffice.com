import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { ConnectorHowToStart } from "@src/components/modules/connectors/HowToStart";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-mattermost");

  return (
    <StyledHowToStart
      id="how-to-start"
      background="#f9f9f9"
      tabletSmallSpacing={["88px", "88px"]}
    >
      <Container>
        <ConnectorHowToStart
          heading={t("HowToStart")}
          text={
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  href="https://helpcenter.onlyoffice.com/integration/mattermost.aspx"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          }
          image={{
            url: t("HowToStartImgUrl"),
            width: 640,
            height: 378,
          }}
          items={items.map((item) => ({
            text: item.textLinks ? (
              <Trans
                t={t}
                i18nKey={String(item.text)}
                components={item.textLinks.map((link, index) => (
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
              t(String(item.text))
            ),
          }))}
        />
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
