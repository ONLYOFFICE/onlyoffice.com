import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledDocspaceCreateContent = styled.div`
  height: 100%;
  max-width: 472px;
  margin: 0 0 0 auto;
  padding-left: 40px;
  width: auto;
  
  @media ${device.tablet} {
    margin: 0 auto;
    padding-left: 0;
  }
`;

const StyledBackButton = styled.a`
  align-items: center;
  color: #333333;
  display: flex;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
  text-align: left;
  
  &:hover {
    text-decoration: none;
  }
`;

const StyledDocspaceLogo = styled.div`
  background-image: url("/images/docspace-registration/docspace-logo.svg");
  display: block;
  content: "";
  height: 32px;
  margin: 40px 0 0;
  width: 280px;
  background-repeat: no-repeat;
`;

const StyledDocspaceCC = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const StyledFeatures = styled.div`
  padding: 32px 0 0;
`;

const StyledFeaturesList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  
  @media ${device.mobile} {
    gap: 1vw;
  }
`;

const StyledFeatureIcon = styled.div<{ type: string }>`
  background-image: url("/images/docspace-registration/rooms-sprite.svg");
  background-repeat: no-repeat;
  display: block;
  content: "";
  height: 48px;
  padding: 0;
  width: 48px;
  
  ${({ type }) => {
    switch (type) {
      case "cl":
        return "background-position-x: 0px;";
      case "cst":
        return "background-position-x: -72px;";
      case "ff":
        return "background-position-x: -144px;";
      case "mt":
        return "background-position-x: -216px;";
      case "pub":
        return "background-position-x: -288px;";
      case "de":
        return "background-position-x: -360px;";
      default:
        return "";
    }
  }}
`;

const StyledTrusted = styled.div`
  align-items: center;
  border-top: 1px solid #BCDFEC;
  border-bottom: 1px solid #BCDFEC;
  display: flex;
  gap: 16px;
  padding: 32px 0;
`;

const StyledTrustedIcon = styled.div`
  background-image: url("/images/docspace-registration/trusted-icon.svg");
  display: block;
  content: "";
  height: 46px;
  width: 56px;
  background-repeat: no-repeat;
`;

const StyledTrustedText = styled.p`
  font-size: 18px;
  line-height: 1.3em;
  padding: 0;
  text-align: left;
  margin: 0;
`;

const StyledOrangeText = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #ff6f3d;
`;

const StyledAwards = styled.div`
  padding: 32px 0 0;
`;

const StyledAwardsList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledAwardIcon = styled.div<{ type: string }>`
  background-image: url("/images/docspace-registration/awards-sprite.svg");
  background-repeat: no-repeat;
  display: block;
  content: "";
  height: 72px;
  padding: 0;
  width: 72px;
  
  ${({ type }) => {
    switch (type) {
      case "cc":
        return `
          background-position-x: 0px;
          width: 200px;
        `;
      case "ct":
        return "background-position-x: -320px;";
      case "sd":
        return "background-position-x: -222px;";
      default:
        return "";
    }
  }}
`;

export {
  StyledDocspaceCreateContent,
  StyledBackButton,
  StyledDocspaceLogo,
  StyledDocspaceCC,
  StyledFeatures,
  StyledFeaturesList,
  StyledFeatureIcon,
  StyledTrusted,
  StyledTrustedIcon,
  StyledTrustedText,
  StyledOrangeText,
  StyledAwards,
  StyledAwardsList,
  StyledAwardIcon
};
