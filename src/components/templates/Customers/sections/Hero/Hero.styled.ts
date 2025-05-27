import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroHeading = styled(Heading)`
  max-width: 994px;
  margin: 172px auto 40px;
`;

const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export { StyledHeroHeading, StyledHeroButtonsWrapper }