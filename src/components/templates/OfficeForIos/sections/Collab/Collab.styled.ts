import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledCollabWrapper = styled.div`
  display: flex;
  justify-content: space-between;

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
  margin-top: 110px;
  padding-left: 16px;

  @media ${device.tablet} {
    justify-items: center;
    margin-top: 0;
    padding: 0 16px;
  }
`;

const StyledCollabHeading = styled(Heading)`
  width: 352px;
  margin-bottom: 20px;
  line-height: 43px;

  @media ${device.tablet} {
    width: auto;
    text-align: center;
    max-width: 600px;
  }

  @media ${device.tabletS} {
    font-size: 32px;
    margin-bottom: 16px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 1.5em;
  }
`;
const StyledCollabText = styled(Text)`
  width: 352px;

  @media ${device.tablet} {
    width: auto;
    text-align: center;
    max-width: 600px;
  }

  @media ${device.tabletS} {
    margin-bottom: 56px;
  }

  @media ${device.mobileS} {
    font-size: 14px;
  }
`;

const StyledCollabRight = styled.div<{
  $backgroundUrl: string;
  $backgroundUrl2x: string;
}>`
  width: 62.20vw;
  height: 41.66vw;
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-size: auto 51.78vw;
  background-repeat: no-repeat;

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$backgroundUrl2x})`};
  }

  @media ${device.tablet} {
    width: 108vw;
    height: 54.82vw;
    background-size: cover;
    flex-grow: 1;
    background-position-x: calc(50% + 2vw);
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
