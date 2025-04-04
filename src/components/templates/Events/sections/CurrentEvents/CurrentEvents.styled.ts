import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledCurrentEvents = styled(Section)`
  padding: 0;

  @media ${device.desktop} {
    width: 100%;
  }
`;

const EmtEvents = styled.div`
  padding: 80px 0;
  max-width: 1120px;
  margin: auto;

  @media ${device.desktop} {
    width: calc(100% - 10vw);
  }

  @media ${device.tablet} {
    
  }
`;

const EmtUpcomingHeading = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 133%;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const EmtUpcomingEvents = styled.div`
  max-width: 928px;
  padding-bottom: 50px;
`;

const EmtEventBlock = styled.div`
  padding: 0 0 20px;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 0 50px;
  }
`;

const EmtEventTitle = styled.div`
  padding: 30px 0 20px;
  line-height: 1.3em;

  @media ${device.tabletS} {
    font-size: 16px;
  }
`;

const EmtDate = styled.div`
  font-size: 13px;
  color: #808080;
  padding: 0 0 0 25px;
  margin: 10px 0;
  min-height: 16px;
  line-height: 16px;
  background: url(/images/templates/events/СurrentEvents/time-01.png) 0 50% no-repeat;
`;

const EmtPlace = styled.div`
  font-size: 13px;
  color: #333333;
  padding: 0;
  margin: 0 0 20px;
`;

const EmtImg = styled.div`
  margin: 24px 0 20px 0;
  position: relative;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const EmtDescription = styled.div`
  line-height: 1.6em;
  font-size: 14px;
  color: #333333;
  background-size: 928px 464px;
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding: 0 0 505px;

  @media ${device.tablet} {
    background-size: 100% auto !important;
    padding-bottom: 55vw !important;
  }
`;

const EmtLinks = styled.div`
  padding: 20px 0 0;
  display: flex;
  flex-direction: row;
`;

const EmtLink = styled.div`
  color: #FF6F3D;
  font-size: 14px;
  line-height: 133%;
  cursor: pointer;
  margin-right: 35px;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

const EmtPastLink = styled.div`
  color: #FF6F3D;
  font-size: 14px;
  line-height: 133%;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

export { 
  StyledCurrentEvents,
  EmtEvents,
  EmtUpcomingHeading,
  EmtUpcomingEvents,
  EmtEventBlock,
  EmtEventTitle,
  EmtDate,
  EmtPlace,
  EmtImg,
  EmtDescription,
  EmtLinks,
  EmtLink,
  EmtPastLink
};
