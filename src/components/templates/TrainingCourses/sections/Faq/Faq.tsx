import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Faq = () => {
  const { t } = useTranslation("training-courses");

  return (
    <Section
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "0"]}
      tabletSmallSpacing={["0", "0"]}
      mobileSpacing={["0", "0"]}
    >
      <Container>
        <FaqCollapse
          items={items.map(item => ({
            label: t(item.title),
            content: (
              <Trans t={t} i18nKey={item.description} components={[
                <Link key={0} href="mailto:sales@onlyoffice.com" />
              ]} />
            ),
          }))}
        />
      </Container>
    </Section>
  );
};

export { Faq };