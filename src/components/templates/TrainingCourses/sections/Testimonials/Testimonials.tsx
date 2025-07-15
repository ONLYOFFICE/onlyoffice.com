import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const Testimonials = () => {
  return (
    <Section
      background="#F5F5F5"
      desktopSpacing={["0", "112px"]}
      tabletSpacing={["0", "88px"]}
      tabletSmallSpacing={["0", "80px"]}
      mobileSpacing={["0", "48px"]}
    >
      <Container>
        <Heading label="Testimonials" level={2} />
      </Container>
    </Section>
  );
};

export { Testimonials };