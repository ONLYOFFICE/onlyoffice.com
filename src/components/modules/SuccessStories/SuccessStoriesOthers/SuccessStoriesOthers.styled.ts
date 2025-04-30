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
  gap: 32px;
  width: 100%;
  height: fit-content;
`;

const StyledStoriesOthersCardItem = styled.li`
  width: 100%;
  height: fit-content;
`;

const StyledStoriesOthersCardContent = styled.div`
  width: 100%;
  height: fit-content;
  padding: 35px 65px;
  display: flex;
  align-items: center;
  gap: 85px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: 35px;
    gap: 35px;
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

const StyledStoriesOthersShowMoreButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  border: 1px solid #aaaaaa;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: #444444;
  background-color: #fff;
  padding: 21px 26px;
  cursor: pointer;

  @media ${device.mobile} {
    padding: 15px 26px;
    font-size: 12px;
    line-height: 16px;
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
  StyledStoriesOthersShowMoreButton,
};
