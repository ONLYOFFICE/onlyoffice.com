import { Trans, useTranslation } from "next-i18next";
import {
  StyledImproveHeading,
  StyledImproveItems,
  StyledImproveText,
  StyledImproveSocialIcons,
} from "./Improve.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { ImproveItem } from "./sub-components/ImproveItem";
import { items } from "./data/items";
import { SocialIcons } from "@src/components/modules/SocialIcons";

const Improve = () => {
  const { t } = useTranslation("contribute");

  return (
    <Section desktopSpacing={["136px", "136px"]}>
      <Container>
        <StyledImproveHeading
          level={2}
          label={t("ImproveOO")}
          textAlign="center"
        />

        <StyledImproveItems>
          {items.map((item, index) => (
            <ImproveItem
              key={index}
              icon={item.icon}
              text={
                item.text.links ? (
                  <Trans
                    t={t}
                    i18nKey={String(item.text.label)}
                    components={item.text.links?.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />
                    ))}
                  />
                ) : (
                  t(item.text.label)
                )
              }
              link={{
                label: t(item.link.label),
                href: item.link.href,
              }}
            />
          ))}
        </StyledImproveItems>

        <StyledImproveText size={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="SocialMediaText"
            components={[
              <Link
                href="https://www.onlyoffice.com/blog"
                color="main"
                textUnderline
                hover="underline-none"
                key="0"
              />,
            ]}
          />
        </StyledImproveText>

        <StyledImproveSocialIcons>
          <SocialIcons />
        </StyledImproveSocialIcons>
      </Container>
    </Section>
  );
};

export { Improve };
