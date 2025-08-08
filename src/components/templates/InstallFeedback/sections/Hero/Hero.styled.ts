import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";

const StyledHeroHeading = styled(Heading)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5em;
  margin: 12px 0;
  padding: 10px 0;
`;

const StyledHeroForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export {
  StyledHeroHeading,
  StyledHeroForm,
}