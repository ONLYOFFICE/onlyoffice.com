import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledFeaturesAside,
  StyledFeaturesContentList,
  StyledFeaturesWrapper,
} from "./Features.styled";

const Features = () => {
  return (
    <Section>
      <Container>
        <StyledFeaturesWrapper>
          <StyledFeaturesAside></StyledFeaturesAside>
          <StyledFeaturesContentList></StyledFeaturesContentList>
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
