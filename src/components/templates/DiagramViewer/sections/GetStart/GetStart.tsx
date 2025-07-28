import { GetStarted } from '@src/components/modules/GetStarted';
import { Container } from '@src/components/ui/Container';
import { Section } from '@src/components/ui/Section';

const GetStart = () => {
  return (
    <Section
      background='#F5F5F5'
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "0"]}
      tabletSmallSpacing={["0", "0"]}
      mobileSpacing={["0", "0"]}
    >
      <Container>
        <GetStarted />
      </Container>
    </Section>
  );
};

export { GetStart };