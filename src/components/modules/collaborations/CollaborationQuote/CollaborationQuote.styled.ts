import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";

const StyledCollaborationQuoteWrapper = styled.div`
  display: grid;
  gap: 32px;
  justify-items: center;
`;

const StyledCollaborationQuoteContent = styled.div`
  max-width: 656px;
  display: grid;
  gap: 12px;
  text-align: center;
`;

const StyledCollaborationQuoteHeading = styled(Heading)`
  font-style: italic;
  font-weight: 400;
`;

const StyledCollaborationQuoteText = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 21px;
  color: #666666;
`;

export {
  StyledCollaborationQuoteWrapper,
  StyledCollaborationQuoteContent,
  StyledCollaborationQuoteHeading,
  StyledCollaborationQuoteText,
};
