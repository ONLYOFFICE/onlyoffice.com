import { useState } from "react";
import { useTranslation } from "next-i18next";
import { StyledCards } from "./Cards.styled";
import { ILocale } from "@src/types/locale";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import {
  CertificateCard,
  ICertificateCard,
} from "./sub-components/CertificateCard";
import { CertificateModal } from "./sub-components/CertificateModal";
import { certificates } from "./data/certificates";

const Cards = ({ locale }: ILocale) => {
  const { t } = useTranslation("certificates");

  const [isOpen, setIsOpen] = useState(false);
  const [certificateImage, setCertificateImage] = useState({
    url: "",
    alt: "",
  });

  const handleClick = (
    url: ICertificateCard["imageUrl"],
    alt: ICertificateCard["heading"],
  ) => {
    setCertificateImage({
      url,
      alt,
    });
    setIsOpen(true);
  };

  return (
    <Section
      as="div"
      desktopSpacing={["56px", "112px"]}
      tabletSpacing={["56px", "112px"]}
    >
      <Container>
        <StyledCards>
          {certificates.map((item, index) => (
            <CertificateCard
              key={index}
              date={item.date}
              heading={t(item.heading)}
              blogUrl={t(item.blogUrl)}
              product={{ label: t(item.product.label), url: item.product.url }}
              imageUrl={item.imageUrl}
              locale={locale}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </StyledCards>

        <CertificateModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          image={certificateImage}
        />
      </Container>
    </Section>
  );
};

export { Cards };
