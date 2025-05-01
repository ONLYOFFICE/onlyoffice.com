import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledStoriesHeroWrapper = styled.div`
  background-color: #f6f6f6;

  .container {
    @media ${device.tablet} {
      padding-bottom: 80px;
    }
  }
`;

const StyledStoriesHeroContent = styled.div`
  display: flex;
  padding: 80px 0 60px;
  gap: 25px;

  @media ${device.tablet} {
    gap: 0;
  }

  & h1 {
    font-size: 36px;
    font-weight: 400;
    color: #333333;
    line-height: 1.2em;
    text-align: left;
    font-family: "Open Sans", sans-serif, Arial;
    padding-left: 15px;
    max-width: 415px;
    letter-spacing: normal;
  }

  @media ${device.tablet} {
    flex-direction: column-reverse;
    padding: 20px 0 10px;
  }
`;

const StyledStoriesHeroLeft = styled.div`
  flex-basis: 50%;
  max-width: 485px;

  h2 {
    max-width: 415px;
  }

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const StyledStoriesHeroRight = styled.div`
  flex-basis: 50%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 50px;
  transform: translate(0, -20px);
  max-width: 460px;

  @media ${device.tablet} {
    flex-direction: column;
    margin-bottom: 115px;
    transform: translate(0, 0);
    gap: 20px;
    max-width: 100%;
  }
`;

const StyledStoriesHeroList = styled.ul`
  width: 100%;
  height: fit-content;
`;

const StyledStoriesHeroItem = styled.li`
  padding-left: 15px;
  border-left: solid 1px #e0e0e0;
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  white-space: pre-line;

  @media ${device.tablet} {
    margin-top: 38px;
  }

  @media ${device.tabletS} {
    margin-top: 35px;
  }

  h3 {
    color: #ff6f3d;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 4px;
    padding: 0;
  }

  p {
    font-size: 13px;
    line-height: 1.7em;

    @media ${device.tablet} {
      font-size: 15px;
    }

    a {
      color: #ff6f3d;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

const StyledStoriesHeroUserImg = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #ff6f3d;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const StyledStoriesHeroDescription = styled.div`
  color: #666666;
  font-size: 12px;
  transform: translate(-9px, 2px);
  width: 200px;
  flex-shrink: 0;

  @media ${device.tablet} {
    transform: translate(0, 0);
    width: 100%;
  }

  h3 {
    font-size: 14px;
    line-height: 2em;
    margin-bottom: 20px;
    font-weight: 400;
    color: #666666;

    @media ${device.tablet} {
      margin-bottom: 30px;
    }
  }

  p {
    @media ${device.tablet} {
      margin-bottom: 5px;
    }

    &:last-child {
      margin-top: 7px;

      @media ${device.tablet} {
        margin-bottom: 5px;
      }
    }
  }
`;

export {
  StyledStoriesHeroWrapper,
  StyledStoriesHeroContent,
  StyledStoriesHeroLeft,
  StyledStoriesHeroRight,
  StyledStoriesHeroList,
  StyledStoriesHeroItem,
  StyledStoriesHeroUserImg,
  StyledStoriesHeroDescription,
};
