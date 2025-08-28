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

const StyledDiscoverScrollbarWrapper = styled.div`
  width: 200px; /* Ширина всей области скроллбара */
  padding: 20px 0; /* Даем немного воздуха сверху и снизу */
  margin: 0 auto; /* Центрируем по горизонтали */
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

const StyledDiscoverScrollbarTrack = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background-color: #cccccc;
  border-radius: 4px;
`;

const StyledDiscoverScrollbarProgress = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background-color: orange;
  border-radius: 4px;
  z-index: 1;
`;

const StyledDiscoverScrollbarThumb = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
  background-image: url("/images/templates/about/discover/runner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 100, 0, 0.7);
  cursor: pointer;
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
  StyledDiscoverScrollbarWrapper,
  StyledDiscoverProgressFirstYear,
  StyledDiscoverScrollbarTrack,
  StyledDiscoverScrollbarProgress,
  StyledDiscoverScrollbarThumb,
  StyledDiscoverProgressLastYear,
};