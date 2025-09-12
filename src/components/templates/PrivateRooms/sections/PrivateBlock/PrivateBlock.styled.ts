import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const PrivateRoomBlock = styled.div`
  background-color: #ffffff;
  background-position: center 0;
  background-repeat: no-repeat;
  border-radius: 3px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  box-sizing: border-box;
  color: #666666;
  display: block;
  font-size: 14px;
  line-height: 1.6em;
  margin: 0 auto;
  padding: 112px 32px 32px;
  position: relative;
  width: 100%;

  @media ${device.tabletS} {
    padding: 80px 43px;
  }

  @media ${device.mobile} {
    padding: 28px 12px;
  }
`;

const StyledPrivateBlockHeading = styled(Heading)`
  font-size: 32px;
  line-height: 1.33em;
  text-align: center;
  padding: 0 0 24px;

  @media ${device.tabletS} {
    font-size: 30px;
    margin: 0 auto;
    width: 68%;
  }

  @media ${device.mobile} {
    font-size: 20px;
    padding-bottom: 16px;
    width: 100%;
  }
`;

const StyledPrivateBlockText = styled(Text)`
    color: #333;
    font-size: 16px;
    line-height: 1.6em;
    text-align: center;
    padding: 0 0 56px;

    @media ${device.tabletS} {
        width: 75%;
        margin: 0 auto;
        padding-bottom: 48px;
    }

  @media ${device.mobile} {
    font-size: 13px;
    padding-bottom: 32px;
    width: 100%;
  }
`;

const StyledPrivateCardArea = styled.div`
  margin: 0 auto;
  max-width: 906px;
  width: 100%;
  
  @media ${device.tabletS} {
    display: none;
  }
`;

const StyledPrivateCardRow = styled.div`
  border-bottom: 1px solid #cccccc;
  display: inline-flex;

  &:last-child {
    border-bottom: none;
  }

  @media ${device.tabletS} {
    display: block;
    border-bottom: 1px solid #f5f5f5;
  }
`;

const StyledPrivateCardColLeft = styled(Text)`
  font-size: 16px;
  color: #333;
  line-height: 1.6em;
  padding: 10px 0 10px 60px;
  position: relative;
  width: 450px;

  &::before {
    background-image: url(${getAssetUrl('/images/templates/private-rooms/how-it-works/yes-no.svg')});
    background-repeat: no-repeat;
    background-position: -35px 50%;
    content: '';
    display: block;
    height: 24px;
    left: 24px;
    position: absolute;
    width: 16px;
  }

  @media ${device.tablet} {
    padding: 10px 0 14px 5vw;
    width: 40vw;

    &::before {
      left: 17px;
    }
  }

  @media ${device.tabletS} {
    padding: 10px 0 14px 64px;
    width: 100%;
  }

  @media ${device.mobile} {
    font-size: 13px;
    padding: 10px 0 14px 42px
  }
`;

const StyledPrivateCardColRight = styled(Text)`
  font-size: 16px;
  color: #333;
  line-height: 1.6em;
  padding: 10px 40px 10px 60px;
  position: relative;
  width: 450px;

  &::before {
    background-image: url(${getAssetUrl('/images/templates/private-rooms/how-it-works/yes-no.svg')});
    background-repeat: no-repeat;
    background-position: 0 50%;
    content: '';
    display: block;
    height: 24px;
    left: 24px;
    position: absolute;
    width: 16px;
  }

  @media ${device.tablet} {
    padding: 10px 0 14px 5vw;
    width: 40vw;

    &::before {
      left: 17px;
    }
  }

    @media ${device.tabletS} {
        padding: 10px 0 14px 64px;
        width: 100%;
  }

  @media ${device.mobile} {
    font-size: 13px;
    padding: 10px 0 14px 42px
  }
`;

// Second block - for 768px and less

const StyledPrivateCardAreaAdaptive = styled.div`
  display: none;

  @media ${device.tabletS} {
    display: block;
    margin: 0 auto 34px;
    max-width: 906px;
    width: 100%;

    &:last-child {
        margin-bottom: 0;
    }
  }

  @media ${device.mobile} {
    margin: 0 auto 18px;
  }
`;

const StyledPrivateCardColumns = styled.div``;

export {
    PrivateRoomBlock,
    StyledPrivateBlockHeading,
    StyledPrivateBlockText,
    StyledPrivateCardArea,
    StyledPrivateCardRow,
    StyledPrivateCardColLeft,
    StyledPrivateCardColRight,
    StyledPrivateCardColumns,
    StyledPrivateCardAreaAdaptive
}
