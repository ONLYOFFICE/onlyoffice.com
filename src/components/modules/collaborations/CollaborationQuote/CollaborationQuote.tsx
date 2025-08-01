import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledCollaborationQuoteContent,
  StyledCollaborationQuoteHeading,
  StyledCollaborationQuoteText,
  StyledCollaborationQuoteWrapper,
} from "./CollaborationQuote.styled";
import { Button } from "@src/components/ui/Button";
import { ICollaborationQuote } from "./CollaborationQuote.types";

const CollaborationQuote = ({ heading, text, button }: ICollaborationQuote) => {
  return (
    <Section background="#f5f5f5">
      <Container>
        <StyledCollaborationQuoteWrapper>
          <StyledCollaborationQuoteContent>
            <StyledCollaborationQuoteHeading
              level={4}
              size={4}
              label={heading}
            />
            <StyledCollaborationQuoteText>{text}</StyledCollaborationQuoteText>
          </StyledCollaborationQuoteContent>
          <Button
            as="a"
            id={button.id}
            href={button.href}
            label={button.label}
          />
        </StyledCollaborationQuoteWrapper>
      </Container>
    </Section>
  );
};

export { CollaborationQuote };
