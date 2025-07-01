import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import styled from "styled-components";

const StyledCardWhitepapers = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 7px 15px rgba(85,85,85,0.1);
  transition-duration: 300ms;

  &:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;

const StyledCardWhitepapersHeader = styled.header`
  min-height: 178px;
  background-color: #0F4071;
  border-radius: 5px;
  padding: 61px 32px 24px;
`;

const StyledCardWhitepapersHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledCardWhitepapersMain = styled.main`
  min-height: 300px;
  background-color: #fff;
  padding: 32px;
  flex: 1 0 auto;
`;

const StyledCardWhitepapersTitle = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledCardWhitepapersDate = styled(Text)`
  margin-bottom: 16px;
`;

const StyledCardWhitepapersDescription = styled(Text)`

`;

const StyledCardWhitepapersFooter = styled.footer`
  background-color: #fff;
  padding: 0 32px 32px;
`;

const StyledCardWhitepapersButton = styled(Button)`
  width: 100%;
  color: #000;
`;

export {
  StyledCardWhitepapers,
  StyledCardWhitepapersHeader,
  StyledCardWhitepapersHeading,
  StyledCardWhitepapersMain,
  StyledCardWhitepapersTitle,
  StyledCardWhitepapersDate,
  StyledCardWhitepapersDescription,
  StyledCardWhitepapersFooter,
  StyledCardWhitepapersButton
}