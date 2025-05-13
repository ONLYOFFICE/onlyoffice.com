import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledCollabWrapper,
  StyledCollabLeft,
  StyledCollabHeading,
  StyledCollabRight,
  StyledCollabText,
} from "./Collab.styled";

const Collab = () => {
  return (
    <Section
      desktopSpacing={["88px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["88px", "0"]}
      mobileSpacing={["48px", "0"]}
      background="#f5f5f5"
    >
      <Container maxWidth="1920px">
        <StyledCollabWrapper>
          <StyledCollabLeft>
            <StyledCollabHeading
              level={2}
              size={3}
              label="Real-time collaboration"
            />
            <StyledCollabText
              size={1}
              label="Be more productive. Connect your app to the ONLYOFFICE cloud. Share docs to co-edit them with your teammates in real time. Comment and track changes. Add graphic annotations."
            />
          </StyledCollabLeft>
          <StyledCollabRight />
        </StyledCollabWrapper>
      </Container>
    </Section>
  );
};

export { Collab };
