import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const Hero = () => {
  return (
    <Section>
      <Container>
        <Heading level={1} size={1} label="Heading" />
      </Container>
    </Section>
  );
};

export { Hero };