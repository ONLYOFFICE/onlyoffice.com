import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const Cards = () => {
  return (
    <Section background="#f5f5f5">
      <Container>
        <Heading level={2} size={2} label="Cards heading" />
      </Container>
    </Section>
  );
};

export { Cards };