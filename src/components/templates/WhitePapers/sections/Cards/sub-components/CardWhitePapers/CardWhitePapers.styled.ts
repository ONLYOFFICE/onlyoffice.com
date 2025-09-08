import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import styled from "styled-components";

const StyledCardWhitePapers = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 7px 15px rgba(85,85,85,0.1);
  transition-duration: 300ms;

  &:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;

const StyledCardWhitePapersHeader = styled.div`
  min-height: 178px;
  background-color: #0F4071;
  border-radius: 5px;
  padding: 61px 32px 24px;
`;

const StyledCardWhitePapersHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledCardWhitePapersMain = styled.div`
  min-height: 300px;
  background-color: #fff;
  padding: 32px;
  flex: 1 0 auto;
`;

const StyledCardWhitePapersTitle = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledCardWhitePapersDate = styled(Text)`
  margin-bottom: 16px;
`;

const StyledCardWhitePapersDescription = styled(Text)`

`;

const StyledCardWhitePapersFooter = styled.div`
  background-color: #fff;
  padding: 0 32px 32px;
`;

const StyledCardWhitePapersButton = styled(Button)`
  width: 100%;
  color: #000;
`;

export {
  StyledCardWhitePapers,
  StyledCardWhitePapersHeader,
  StyledCardWhitePapersHeading,
  StyledCardWhitePapersMain,
  StyledCardWhitePapersTitle,
  StyledCardWhitePapersDate,
  StyledCardWhitePapersDescription,
  StyledCardWhitePapersFooter,
  StyledCardWhitePapersButton
}