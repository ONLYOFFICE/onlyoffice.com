import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";

const StyledChooseHeading = styled(Heading)`
  @media ${device.mobile} {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

const StyledChooseList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px 0;
  gap: 30px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media ${device.mobile} {
    margin: 24px 0 60px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  & > div {
    text-align: left;
    justify-items: flex-start;

    @media ${device.mobile} {
      align-self: center;
    }

    & > div:first-child {
      @media ${device.mobile} {
        transform: scale(0.75);
      }
    }

    & h5,
    & p {
      color: #fff;
    }
  }
`;

const StyledChooseButtonsWrapper = styled.div<{
  $isZhLocale: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  @media ${device.mobile} {
    flex-direction: ${(props) => (props.$isZhLocale ? "column" : "row")};
  }
`;

const StyledChooseButtonGoogle = styled(Button)<{
  $backgroundUrl: string;
  $isZhLocale: boolean;
}>`
  display: block;
  width: ${(props) => (props.$isZhLocale ? "170px" : "188px")};
  height: ${(props) => (props.$isZhLocale ? "58px" : "80px")};
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 2;
`;

const StyledChooseButtonAppGallery = styled(Button)<{
  $backgroundUrl: string;
}>`
  display: block;
  width: 170px;
  height: 58px;
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  z-index: 2;
`;

const StyledChooseSubtitle = styled(Text)`
  margin-top: 30px;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export {
  StyledChooseHeading,
  StyledChooseList,
  StyledChooseButtonsWrapper,
  StyledChooseButtonGoogle,
  StyledChooseButtonAppGallery,
  StyledChooseSubtitle,
};
