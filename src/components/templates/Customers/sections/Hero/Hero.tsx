import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const Hero = () => {
  return (
    <Section>
      <Container>
        <Heading label="Hero Customers" size={1} level={1} />
      </Container>
    </Section>
  );
};

export { Hero };