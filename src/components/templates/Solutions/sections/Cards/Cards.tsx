import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ButtonRow, CardButton, StyledHeading } from "./Cards.styled";

export interface CardsProps {
  bg: string;
  title: string;
  items: {
    title: string;
    link: string;
    icon: string;
    width?: number;
    height?: number;
  }[];
}

const Cards = ({bg, title, items}: CardsProps) => {
  const { t } = useTranslation("solutions");

  return (
    <Section background={bg} tabletSmallSpacing={["80px", "56px"]} mobileSpacing={["48px", "32px"]}>
      <Container tabletSpacing="0" mobileSpacing="0">
        <StyledHeading textAlign="center" level={2}>
          {t(title)}
        </StyledHeading>
        <ButtonRow>
          {items.map((item, index) => (
            <CardButton
              key={index}
              href={item.link}
              $icon={item.icon}
              label={t(item.title)}
              $width={item.width}
              $height={item.height}
            />
          ))}
        </ButtonRow>
      </Container>
    </Section>
  );
};

export { Cards };
