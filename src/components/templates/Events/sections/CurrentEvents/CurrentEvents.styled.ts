import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledCurrentEvents = styled(Section)`
  padding: 0;

  @media ${device.desktop} {
    width: 100%;
  }
`;

const StyledEventsWrapper = styled.div`
  padding: 80px 0;
  max-width: 1120px;
  margin: auto;

  @media ${device.desktop} {
    width: calc(100% - 10vw);
  }

  @media ${device.tablet} {
    padding: 80px 48px;
  }
  @media ${device.tabletS} {
    padding: 80px 16px;
    width: calc(100% - 32px);
  }
`;

const StyledUpcomingHeading = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 133%;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const StyledUpcomingEvents = styled.div`
  max-width: 928px;
  padding-bottom: 50px;
`;

const StyledEventBlock = styled.div`
  padding: 0 0 20px;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 0 50px;
  }
`;

const StyledEventTitle = styled(Heading)`
  padding: 30px 0 20px;
  line-height: 1.3em;

  @media ${device.tabletS} {
    font-size: 16px;
  }
`;

const StyledEventDate = styled.div`
  font-size: 13px;
  color: #808080;
  padding: 0 0 0 25px;
  margin: 10px 0;
  min-height: 16px;
  line-height: 16px;
  background: url("/images/templates/events/СurrentEvents/time-01.png") 0 50% no-repeat;
`;

const StyledEventPlace = styled.div`
  font-size: 13px;
  color: #333333;
  padding: 0;
  margin: 0 0 20px;
`;



const StyledEventDescription = styled.div`
  line-height: 1.6em;
  font-size: 14px;
  color: #333333;
  background-size: 928px 464px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding: 0 0 505px;

  @media ${device.tablet} {
    background-size: 100% auto ;
    padding-bottom: 55vw ;
  }
`;

const StyledEventLinks = styled.div`
  padding: 20px 0 0;
  display: flex;
  flex-direction: row;
`;

const StyledEventLink = styled(Link)`
  color: #FF6F3D;
  font-size: 14px;
  line-height: 133%;
  cursor: pointer;
  margin-right: 35px;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledPastLink = styled(Link)`
  color: #FF6F3D;
  font-size: 14px;
  line-height: 133%;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledCurrentEvents,
  StyledEventsWrapper,
  StyledUpcomingHeading,
  StyledUpcomingEvents,
  StyledEventBlock,
  StyledEventTitle,
  StyledEventDate,
  StyledEventPlace,
  StyledEventDescription,
  StyledEventLinks,
  StyledEventLink,
  StyledPastLink
};
