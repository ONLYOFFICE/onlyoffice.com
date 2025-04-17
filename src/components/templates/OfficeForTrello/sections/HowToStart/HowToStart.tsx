import { useTranslation } from "next-i18next";
import { StyledHowToStart } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-trello");

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          id="how-to-start-carousel"
          className="how-to-start-carousel"
          namespace="office-for-trello"
          items={items}
        />
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
