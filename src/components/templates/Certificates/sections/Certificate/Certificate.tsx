import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CertificateCardsWrapper } from "./Certificate.styled";
import { items } from "./data/item";
import { CertificateCard } from "./sub-component/CertificateCard";
import { useTranslation } from "next-i18next";

const Certificate = () => {
  const { t } = useTranslation("certificates");

  return (
    <Section
      desktopSpacing={["56px", "112px"]}
      tabletSpacing={["56px", "112px"]}
    >
      <Container>
        <CertificateCardsWrapper>
          {items.map((item, index) => (
            <CertificateCard
              key={index}
              image={item.image}
              date={t(item.date)}
              product={{ ...item.product, label: t(item.product.label) }}
              heading={{
                label: t(item.heading.label),
                link: t(item.heading.link),
              }}
            />
          ))}
        </CertificateCardsWrapper>
      </Container>
    </Section>
  );
};

export { Certificate };
