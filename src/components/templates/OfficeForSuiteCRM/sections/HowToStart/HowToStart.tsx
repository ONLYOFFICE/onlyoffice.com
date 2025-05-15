import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { ConnectorHowToStart } from "@src/components/modules/connectors/HowToStart";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-suitecrm");

  return (
    <StyledHowToStart id="how-to-start">
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
                  href="https://helpcenter.onlyoffice.com/integration/suitecrm.aspx"
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
            height: 412,
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
