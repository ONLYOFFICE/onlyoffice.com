import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledCurrentEvents = styled(Section)`  
  
  padding: 0;

  .emt_events {
    padding: 80px 0;
    max-width: 1120px;
    margin: auto;

    .emt_upcoming_heading {
    font-size: 12px;
    font-weight: 600;
    line-height: 133%;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

    .emt_upcoming_events{
        max-width: 928px;
        padding-bottom: 50px;

        .emt_event_block {
          padding: 0 0 20px;
    
          .emt_event_title {
            padding: 30px 0 20px;
            line-height: 1.3em;
          }

          .emt_date {
            font-size: 13px;
            color: #808080;
            padding: 0 0 0 25px;
            margin: 10px 0;
            min-height: 16px;
            line-height: 16px;
            background: url(/images/templates/events/СurrentEvents/time-01.png) 0 50% no-repeat;
          }

          .emt_place {
            font-size: 13px;
            color: #333333;
            padding: 0;
            margin: 0 0 20px;
          }

          .emt_img {
            margin: 24px 0 20px 0;
            position: relative;
            width: 100%;
            
            img {
              width: 100%;
              height: auto;
              object-fit: cover;
            }
          }

          .emt_description {
            line-height: 1.6em;
            font-size: 14px;
            color: #333333;
            background-size: 928px 464px;
            background-repeat: no-repeat;
            background-position: 0 100%;
            padding: 0 0 505px;
          }

          .emt_links {
            padding: 20px 0 0;
            display: flex;
            flex-direction: row;
  
            .emt_link {
              color: #FF6F3D;
              font-size: 14px;
              line-height: 133%;
              cursor: pointer;
              margin-right: 35px;
              &:hover {
                text-decoration: underline;
              }
            }
            .emt_pastlink{
              color: #FF6F3D;
              font-size: 14px;
              line-height: 133%;
              cursor: pointer;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
  
  

  
  

  @media ${device.desktop} {
    width: calc(100% - 10vw);
  }

 @media ${device.tablet} {
     .emt_events{
      padding: 80px 48px;
}
      .emt_event_block{
         width: 100%;
        padding: 0 0 50px;
      }
      .emt_description{
          background-size: 100% auto !important;
          padding-bottom: 55vw !important; 
        }
  }

  @media ${device.tabletS} {
    .emt_event_title{
    font-size: 16px;
     
    }
  }

  

  
`;

export { StyledCurrentEvents };
