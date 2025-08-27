import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const CARD_WIDTH = "325px";

const StyledDiscoverHeading = styled(Heading)`
  margin-bottom: 40px;
`;

const StyledDiscoverWrapper = styled.div`
  width: 100%;
  padding: 0 calc(50% - ${CARD_WIDTH} / 2) 50px;
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledDiscoverYearBlock = styled.div`
  flex-shrink: 0;
`;

const StyledDiscoverTop = styled.div`
  width: 100%;
  padding: 0 15px 20px 0;
  box-sizing: border-box;
  position: relative;
`;

const StyledDiscoverTopYearText = styled(Text)`
  width: fit-content;
  position: sticky;
  left: 0;
  top: 15px;
  padding-right: calc(${CARD_WIDTH} - 50px);
`;

const StyledDiscoverBotList = styled.div`
  display: flex;
`;

const StyledDiscoverBotItem = styled.div`
  width: ${CARD_WIDTH};
  border-top: 1px solid #ddd;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #afafaf;
    z-index: 1;
  }
`;

const StyledDiscoverSlideHeading = styled(Heading)`
  margin-top: 60px;
  padding-right: 25px;
`;

const StyledDiscoverSlideText = styled.div`
  margin-top: 32px;
  padding-right: 50px;
  color: #424242;
  font-size: 15px;
  line-height: 20px;

  & > p {
    padding: 10px 0;
  }
`;

const StyledDiscoverProgressWrapper = styled.div`
  margin: 25px auto;
  width: 200px;
  height: 1px;
  background: #ddd;
  border-radius: 4px;
  position: relative;
  pointer-events: none;
`;

const StyledDiscoverProgressFirstYear = styled(Text)`
  display: block;
  position: absolute;
  top: 50%;
  left: -45px;
  transform: translateY(-50%);
`;

const StyledDiscoverProgressLastYear = styled(Text)`
  display: block;
  position: absolute;
  top: 50%;
  right: -45px;
  transform: translateY(-50%);
`;

const StyledDiscoverProgressBar = styled.div`
  height: 100%;
  background: orange;
  transform-origin: left;
  transition: transform 0.05s linear;
  pointer-events: none;
  will-change: width;
`;

const StyledDiscoverProgressBarHandle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url("/images/templates/about/discover/runner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  position: absolute;
  top: -10px;
  left: -10px;
  pointer-events: visible;
`;

export {
  StyledDiscoverHeading,
  StyledDiscoverWrapper,
  StyledDiscoverYearBlock,
  StyledDiscoverTop,
  StyledDiscoverTopYearText,
  StyledDiscoverBotList,
  StyledDiscoverBotItem,
  StyledDiscoverSlideHeading,
  StyledDiscoverSlideText,
  StyledDiscoverProgressWrapper,
  StyledDiscoverProgressFirstYear,
  StyledDiscoverProgressBar,
  StyledDiscoverProgressBarHandle,
  StyledDiscoverProgressLastYear,
};