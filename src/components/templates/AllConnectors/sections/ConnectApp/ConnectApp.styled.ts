import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";


const StyledConnectAppSection = styled(Section)`
  background-color: #F9F9F9;
  background-position: 50% 0%;
  background-image: url(/images/templates/all-connectors/connect-app/letter_bg.png);
  background-size: 844px;
  background-repeat: no-repeat;
  text-align: center;
`;

const StyledConnectAppWrapper = styled.div`
  margin: 0 auto;
  max-width: 828px;
  text-align: center;
`;

const StyledConnectAppTImg = styled.div`
width: 77px;
height: 72px;           
background-image: url(/images/templates/all-connectors/connect-app/letter.svg);
background-repeat: no-repeat;
margin: 0 auto;
`;

const StyledConnectAppHeading = styled(Heading)`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export { StyledConnectAppSection, StyledConnectAppWrapper, StyledConnectAppHeading, StyledConnectAppTImg };
