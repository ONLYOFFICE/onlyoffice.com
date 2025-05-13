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
  grid-template-columns: repeat(4, 1fr);
  margin: 60px 0;
  gap: 30px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    margin: 24px 0 60px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
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

const StyledChooseButton = styled(Button)`
  display: block;
  width: 170px;
  height: 58px;
  margin: 0 auto;
  background-image: url("/images/templates/office-for-ios/hero/app-store_btn.svg");
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
  StyledChooseButton,
  StyledChooseSubtitle,
};
