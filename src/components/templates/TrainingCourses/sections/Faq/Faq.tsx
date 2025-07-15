import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledFaqHeading,
  StyledFaqList
} from "./Faq.styled";

const Faq = () => {
  const { t } = useTranslation("training-courses");

  return (
    <Section>
      <Container>
        <StyledFaqHeading
          level={2}
          size={3}
          label={t("FAQ")}
        />
        <StyledFaqList>
          <FaqCollapse items={items.map(item => ({
            label: t(item.title),
            content: (
              <Trans t={t} i18nKey={item.description} components={[
                <Link key={0} href="mailto:sales@onlyoffice.com" />
              ]} />
            ),
          }))}/>
        </StyledFaqList>
      </Container>
    </Section>
  );
};

export { Faq };