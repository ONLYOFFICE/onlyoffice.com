import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledDocumentsHeading = styled(Heading)`
  margin: 0 auto 32px;
  max-width: 928px;
`;

const StyledDocumentsBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
  text-align: center;
`;

export { StyledDocumentsHeading, StyledDocumentsBtnWrapper };
