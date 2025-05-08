import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 75px;
`;

const StyledFeaturesAside = styled.aside`
  width: 1090px;
  height: 80vh;
  box-sizing: content-box;
  background-color: gray;
  position: sticky;
  top: calc(10vh + 36px);
  left: 0;
`;

const StyledFeaturesAsideTablet = styled.div`
  background-image: url("/images/templates/office-for-ios/features/aside_tablet.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: blue;
  width: 100%;
  height: 80%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;
const StyledFeaturesAsideMobile = styled.div`
  background-image: url("/images/templates/office-for-ios/features/aside_tablet.webp");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: pink;
  width: 40%;
  height: 30%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
`;

const StyledFeaturesContentList = styled.div`
  & > div {
    height: 80vh;
    align-content: center;
    justify-items: flex-start;
    text-align: left;
  }
`;

export {
  StyledFeaturesWrapper,
  StyledFeaturesAside,
  StyledFeaturesAsideTablet,
  StyledFeaturesAsideMobile,
  StyledFeaturesContentList,
};
