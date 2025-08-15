import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { ButtonRow, CardButton } from "./Cards.styled";

interface CardsProps {
  bg: string;
  title: string;
  items: {
    title: string;
    link: string;
  }[];
}

const Cards = ({bg, title, items}: CardsProps) => {
  const { t } = useTranslation("solutions");

  return (
    <Section background={bg}>
      <Container>
        <Heading level={2}>
          {t(title)}
        </Heading>
        <ButtonRow>
          {items.map((item, index) => (
            <CardButton
              key={index}
              href={item.link}
            />
          ))}
        </ButtonRow>
      </Container>
    </Section>
  );
};

export { Cards };
