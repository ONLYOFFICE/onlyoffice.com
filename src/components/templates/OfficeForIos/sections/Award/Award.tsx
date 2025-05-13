import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledAwardContent,
  StyledAwardHeading,
  StyledAwardLogo,
  StyledAwardLink,
  StyledAwardText,
  StyledAwardQuotes,
} from "./Award.styled";

const Award = () => {
  return (
    <Section
      background="#FAFAFA"
      desktopSpacing={["196px", "147px"]}
      tabletSpacing={["196px", "147px"]}
      tabletSmallSpacing={["196px", "147px"]}
      mobileSpacing={["150px", "80px"]}
    >
      <Container maxWidth="912px">
        <StyledAwardContent>
          <StyledAwardLogo />
          <StyledAwardHeading
            level={4}
            size={4}
            label={`"ONLYOFFICE Documents is an outstanding product and was given the 'Very Good' award by its users."`}
            textAlign="center"
          />
          <StyledAwardText
            label="Michael Ganss,"
            textAlign="center"
            size={4}
            fontWeight={700}
            color="#666666"
          />
          <StyledAwardLink
            label="UpdateStar.com"
            href="http://onlyoffice-documents.updatestar.com/"
            target="_blank"
            color="main"
            textUnderline={true}
            hover="underline-none"
            fontSize="13px"
          />
          <StyledAwardQuotes />
        </StyledAwardContent>
      </Container>
    </Section>
  );
};

export { Award };
