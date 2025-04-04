import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledMoreLink = styled(Link)<{ $imageUrl?: string }>`
  position: relative;
  display: block;
  padding: 210px 0 0;
  font-size: 14px;
  color: ${props => props.color === "main" ? "#FF6F3D" : "#333333"};
  text-decoration: underline;

  &::before {    
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    display: block;
    width: 380px;
    height: 190px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 380px 190px;
    background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'url(/images/templates/events/play-icon.svg)'};    
  }

  &:hover {
    text-decoration: none;
  }
  
  @media ${device.tablet} {
    padding-top: 50vw;
    &::before {
      background-size: 100% auto;
      width: 100%;
      height: 50vw;
    }
  }
`;

const StyledPastEvents = styled(Section)`  
  padding: 80px 0;
  width: 100%;
  margin: auto;
  background-color: #F9F9F9;
`;

const StyledPastEventsWrapper = styled.div`
  width: 1120px;
  margin: auto;
  
  @media ${device.desktop} {
    width: calc(100% - 10vw);
  }
`;

const StyledPastEventsTitle = styled.div`
  font-size: 12px;
  font-weight: 600;   
  line-height: 133%;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const StyledPastEventsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 380px);
  padding: 40px 0 0;
  gap: 50px 100px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const StyledEventBlock = styled.div`
  width: 380px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const StyledEventTitle = styled(Heading)`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3em;
  margin: 0;
  padding: 0 0 5px;
  height: 52px;
  display: table-cell;
  vertical-align: bottom;
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

const StyledPastLink = styled.div`
  .emt_more_link {
    color: #FF6F3D;
    font-size: 14px;
    line-height: 133%;
    cursor: pointer;
    margin-right: 35px;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const StyledEventImage = styled.div`
  margin: 24px 0 20px 0;
  position: relative;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export { 
  StyledPastEvents, 
  StyledMoreLink,
  StyledPastEventsWrapper,
  StyledPastEventsTitle,
  StyledPastEventsList,
  StyledEventBlock,
  StyledEventTitle,
  StyledEventDate,
  StyledEventPlace,
  StyledPastLink,
  StyledEventImage
};
