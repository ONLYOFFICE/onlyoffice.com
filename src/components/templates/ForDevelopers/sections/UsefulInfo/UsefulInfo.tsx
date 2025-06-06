import { Trans, useTranslation } from "next-i18next";
import {
  StyledUsefullInfoHeading,
  StyledUsefullInfoTopItems,
  StyledUsefullInfoBottomItems,
} from "./UsefulInfo.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { InfoCard } from "./sub-components/InfoCard";
import { items } from "./data/items";

const UsefulInfo = () => {
  const { t } = useTranslation("for-developers");

  const renderItems = (itemsSubset: typeof items) =>
    itemsSubset.map((item) => (
      <InfoCard
        key={item.id}
        id={item.id}
        heading={t(item.heading)}
        text={{
          label: (
            <Trans
              t={t}
              i18nKey={String(item.text.label)}
              components={{
                a: (
                  <Link
                    href={item.text.link}
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
        link={
          item.link
            ? {
                ...item.link,
                label: t(String(item.link.label)),
              }
            : undefined
        }
      />
    ));

  return (
    <Section tabletSpacing={["80px", "80px"]}>
      <Container>
        <StyledUsefullInfoHeading
          label={t("UsefulInformation")}
          level={2}
          textAlign="center"
        />

        <StyledUsefullInfoTopItems>
          {renderItems(items.slice(0, 3))}
        </StyledUsefullInfoTopItems>

        <StyledUsefullInfoBottomItems>
          {renderItems(items.slice(-2))}
        </StyledUsefullInfoBottomItems>
      </Container>
    </Section>
  );
};

export { UsefulInfo };
