import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledAssignmentsHeading = styled(Heading)`
  margin: 0 auto 32px;
  max-width: 928px;
`;

const StyledAssignmentsBtnWrapper = styled.div`
  
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
  text-align: center;

`;

export { StyledAssignmentsHeading, StyledAssignmentsBtnWrapper };
