import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledStoriesOthersWrapper = styled.div`
  width: 100%;
  padding: 30px 0 60px;
  background-color: #fff;
  text-align: center;
`;

const StyledStoriesOthersTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: #333333;
  line-height: 1.2em;
  text-align: left;
  font-family: "Open Sans", sans-serif, Arial;
  text-align: center;
  padding: 20px 0 40px;
`;

const StyledStoriesOthersCardList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;

  .show-more-button {
    width: fit-content;
    margin: 0 auto;
  }
`;

const StyledStoriesOthersCardContent = styled.div<{
  $visibleButton: boolean;
  $index: number;
}>`
  width: 100%;
  height: fit-content;
  padding: 35px 65px;
  display: flex;
  align-items: center;
  gap: 85px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, max-height 1s ease, padding 1s ease, opacity 0.5s ease;
  max-height: ${({ $visibleButton, $index }) => ($visibleButton && $index > 1 ? "0" : "500px")};
  padding: ${({ $visibleButton, $index }) => ($visibleButton && $index > 1 ? "0 65px" : "35px 65px")};
  margin-bottom: ${({ $visibleButton, $index }) => ($visibleButton && $index > 1 ? "0" : "32px")};
  opacity: ${({ $visibleButton, $index }) => ($visibleButton && $index > 1 ? "0" : "1")};
  overflow: hidden;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: ${({ $visibleButton, $index }) => ($visibleButton && $index > 1 ? "0" : "35px")};
    gap: 35px;
  }

  @media ${device.tabletS} {
    max-height: ${({ $visibleButton, $index }) => ($visibleButton && $index > 1 ? "0" : "700px")};
  }

  @media ${device.mobile} {
    max-height: ${({ $visibleButton, $index }) => ($visibleButton && $index > 1 ? "0" : "1000px")};
  }
`;

const StyledStoriesOthersCardItem = styled.li`
  width: 100%;
  height: fit-content;

  &:last-child {
    ${StyledStoriesOthersCardContent} {
      margin-bottom: 0;
    }
  }
`;

const StyledStoriesOthersCardItemLeft = styled.div`
  width: 140px;
  height: 140px;
  background-color: #ff6f3d;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  transform: translate(13px, -20px);

  @media ${device.tablet} {
    transform: translate(0, 0);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledStoriesOthersCardItemRight = styled.div`
  height: 100%;
  text-align: start;
  padding-left: 35px;
  border-left: 1px solid #e5e5e5;

  h3 {
    font-size: 18px;
    font-weight: 600;
    display: block;
    color: #333333;
    position: relative;
    line-height: 1.1em;
    letter-spacing: normal;

    @media ${device.mobile} {
      line-height: 1.3em;
    }

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 1px;
      background-color: #ff6f3d;
      position: absolute;
      left: 0;
      bottom: -23px;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.4em;
    max-width: 440px;
    padding: 40px 0 30px;
    position: relative;
    color: #666666;

    @media ${device.tablet} {
      font-size: 15px;
    }
  }

  h4 {
    color: #666666;
    font-size: 14px;
    line-height: 1.4em;
    font-weight: 400;
  }

  h5 {
    color: #666666;
    font-size: 12px;
    line-height: 1.4em;
    font-weight: 400;
  }

  @media ${device.tablet} {
    width: 100%;
    border-left: none;
    padding-left: 0;
  }
`;

export {
  StyledStoriesOthersWrapper,
  StyledStoriesOthersTitle,
  StyledStoriesOthersCardList,
  StyledStoriesOthersCardItem,
  StyledStoriesOthersCardContent,
  StyledStoriesOthersCardItemLeft,
  StyledStoriesOthersCardItemRight,
};
