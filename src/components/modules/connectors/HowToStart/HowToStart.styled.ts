import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledHowToStart = styled.div`
  position: relative;
  text-align: left;
  display: grid;
  grid-template-columns: 475px auto;
  gap: 4px;

  @media ${device.tablet} {
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0;
  }
`;

const StyledHowToStartWrapper = styled.div`
  padding: 32px 0;

  @media ${device.mobile} {
    padding: 16px 0;
  }
`;

const StyledHowToStartBody = styled.div`
  display: flex;
  gap: 4px;
  &:not(:last-child) {
    padding-bottom: 16px;
  }

  @media ${device.tablet} {
    text-align: center;
    order: 1;
  }
`;

const StyledHowToStartNumber = styled.span`
  font-size: 16px;
  line-height: 1.6em;
  font-weight: 700;

  @media ${device.tabletS} {
    font-size: 14px;
  }
`;

const StyledHowToStartHeading = styled.div`
  font-size: 16px;
  line-height: 1.6em;
  text-align: left;

  @media ${device.tabletS} {
    font-size: 14px;
  }
`;

const StyledHowToStartInfo = styled.p`
  font-size: 16px;
  line-height: 1.6em;
  text-align: left;
  position: relative;
  padding-left: 32px;

  &:before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    left: 0;
    background: url("/images/templates/office-for-mattermost/how-to-start/github-icon.svg")
      no-repeat center;
    background-size: contain;
  }

  @media ${device.tabletS} {
    font-size: 14px;
  }
`;

const StyledHowToStartContainer = styled.div`
  padding: 0;
`;

const StyledHowToStartImg = styled.div<{
  $imgUrl: string;
  $imageHeight: number;
}>`
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: ${(props) => props.$imageHeight}px;

  @media ${device.tabletS} {
    height: ${(props) => props.$imageHeight / 2}px;
  }
`;

export {
  StyledHowToStart,
  StyledHowToStartBody,
  StyledHowToStartNumber,
  StyledHowToStartHeading,
  StyledHowToStartWrapper,
  StyledHowToStartInfo,
  StyledHowToStartImg,
  StyledHowToStartContainer,
};
