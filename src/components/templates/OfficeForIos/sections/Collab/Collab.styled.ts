import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledCollabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 45px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 0;
    overflow: hidden;
  }
`;

const StyledCollabLeft = styled.div`
  flex-grow: 1;
  justify-items: flex-end;
  margin-top: 120px;
  padding-left: 16px;

  @media ${device.tablet} {
    justify-items: center;
    margin-top: 0;
    padding: 0 16px;
  }
`;

const StyledCollabHeading = styled(Heading)`
  max-width: 270px;
  margin-bottom: 30px;

  @media ${device.tablet} {
    text-align: center;
    max-width: 600px;
  }

  @media ${device.tabletS} {
    font-size: 32px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
const StyledCollabText = styled(Text)`
  max-width: 270px;

  @media ${device.tablet} {
    text-align: center;
    max-width: 600px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }

  @media ${device.mobileS} {
    font-size: 14px;
  }
`;

const StyledCollabRight = styled.div`
  width: 1150px;
  height: 650px;
  background-image: url("/images/templates/office-for-ios/collab/collab.webp");
  background-size: auto 830px;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    /* width: 100vw;
    height: 48.82vw; */
    width: 108vw;
    height: 54.82vw;
    background-size: cover;
    flex-grow: 1;
    background-position-x: calc(50% + 6vw);
    background-position-y: calc(100% + 17vw);
  }
`;

export {
  StyledCollabWrapper,
  StyledCollabLeft,
  StyledCollabHeading,
  StyledCollabText,
  StyledCollabRight,
};
