import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import {
  StyledBottomInfoCardsWrapper,
  StyledTopInfoCardsWrapper,
} from "./UsefulInfo.styled";
import { items } from "./data/items";
import { InfoCard } from "./sub-components/InfoCard";
import { Link } from "@src/components/ui/Link";

const UsefulInfo = () => {
  const { t } = useTranslation("affiliates");
  return (
    <Section>
      <Container>
        <Heading
          label={t("UsefulInformation")}
          level={2}
          size={3}
          textAlign="center"
        />
        <StyledTopInfoCardsWrapper>
          {items.topCards.map((item) => (
            <InfoCard
              key={item.id}
              id={item.id}
              heading={{ label: t(item.heading.label) }}
              text={{
                label: t(String(item.text.label)),
              }}
              links={item.links?.map((link, index) => ({
                key: index,
                href: link.href,
                label: t(link.label),
                isExternal: link.isExternal,
                isDownload: link.isDownload,
              }))}
            />
          ))}
        </StyledTopInfoCardsWrapper>
        <StyledBottomInfoCardsWrapper>
          {items.bottomCards.map((item) => (
            <InfoCard
              key={item.id}
              id={item.id}
              heading={{ label: t(item.heading.label) }}
              text={{
                label: (
                  <Trans
                    t={t}
                    i18nKey={String(item.text.label)}
                    components={{
                      a: (
                        <Link
                          href={item.text.textLink}
                          color="main"
                          textUnderline
                          hover="underline-none"
                          key="0"
                        />
                      ),
                      br: <br key="1" />,
                    }}
                  />
                ),
              }}
              links={item.links?.map((link, index) => ({
                href: link.href,
                label: t(link.label),
                key: index,
              }))}
            />
          ))}
        </StyledBottomInfoCardsWrapper>
      </Container>
    </Section>
  );
};

export { UsefulInfo };
