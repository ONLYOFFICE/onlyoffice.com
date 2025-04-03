import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledCurrentEvents = styled(Section)`  
  padding: 0;

  @media ${device.desktop} {
    width: calc(100% - 10vw);
  }

  

 
`;

const StyledEmtEvents = styled.div`
  padding: 80px 0;
  max-width: 1120px;
  margin: auto;
`;

const StyledEmtUpcomingHeading = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 133%;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const StyledEmtUpcomingEvents = styled.div`
  max-width: 928px;
  padding-bottom: 50px;
`;

const StyledEmtEventBlock = styled.div`
  padding: 0 0 20px;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 0 50px;
  }
`;

const StyledEmtEventTitle = styled.div`
  padding: 30px 0 20px;
  line-height: 1.3em;
`;

const StyledEmtDate = styled.div`
  font-size: 13px;
  color: #808080;
  padding: 0 0 0 25px;
  margin: 10px 0;
  min-height: 16px;
  line-height: 16px;
  background: url(/images/templates/events/СurrentEvents/time-01.png) 0 50% no-repeat;
`;

const StyledEmtPlace = styled.div`
  font-size: 13px;
  color: #333333;
  padding: 0;
  margin: 0 0 20px;
`;

const StyledEmtImg = styled.div`
  margin: 24px 0 20px 0;
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const StyledEmtDescription = styled.div`
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

const StyledEmtLinks = styled.div`
  padding: 20px 0 0;
  display: flex;
  flex-direction: row;
`;

const StyledEmtLink = styled.div`
  color: #FF6F3D;
  font-size: 14px;
  line-height: 133%;
  cursor: pointer;
  margin-right: 35px;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledEmtPastLink = styled.div`
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
  StyledEmtEvents,
  StyledEmtUpcomingHeading,
  StyledEmtUpcomingEvents,
  StyledEmtEventBlock,
  StyledEmtEventTitle,
  StyledEmtDate,
  StyledEmtPlace,
  StyledEmtImg,
  StyledEmtDescription,
  StyledEmtLinks,
  StyledEmtLink,
  StyledEmtPastLink
};
