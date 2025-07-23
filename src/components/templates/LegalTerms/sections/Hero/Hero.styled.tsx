import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const StyledContainer = styled(Container)`
  width: 100%;
  max-width: 1050px;
  text-align: left;
`;

const StyledDescription = styled(Text)`
  font-size: 18px;
  line-height: 1.5em;
  padding-top: 40px;
`;

export { StyledContainer, StyledDescription };