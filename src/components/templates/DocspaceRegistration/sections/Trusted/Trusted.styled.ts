import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledTrusted = styled.section`
  padding: 60px 0;
  background-color: #fff;
  
  @media ${device.tablet} {
    padding: 40px 0;
  }
  
  @media ${device.mobile} {
    padding: 30px 0;
  }
`;

const StyledTrustedWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTrustedContent = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const StyledTrustedBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  @media ${device.tablet} {
    flex-direction: column;
    text-align: center;
    margin-bottom: 32px;
  }
  
  @media ${device.mobile} {
    padding: 16px;
    margin-bottom: 24px;
  }
`;

const StyledTrustedIcon = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 24px;
  background-image: url("/images/templates/docspace-registration/trusted-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  
  @media ${device.tablet} {
    margin-right: 0;
    margin-bottom: 16px;
  }
  
  @media ${device.mobile} {
    width: 48px;
    height: 48px;
  }
`;

const StyledTrustedText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledAwardsList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 40px;
  
  @media ${device.mobile} {
    gap: 24px;
    flex-wrap: wrap;
  }
`;

const StyledAwardsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAwardsItemIcon = styled.div`
  width: 80px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  
  &.cc {
    background-image: url("/images/templates/docspace-registration/awards/capterra.svg");
  }
  
  &.sd {
    background-image: url("/images/templates/docspace-registration/awards/software-advice.svg");
  }
  
  &.ct {
    background-image: url("/images/templates/docspace-registration/awards/getapp.svg");
  }
  
  @media ${device.mobile} {
    width: 64px;
    height: 32px;
  }
`;

export {
  StyledTrusted,
  StyledTrustedWrapper,
  StyledTrustedContent,
  StyledTrustedBox,
  StyledTrustedIcon,
  StyledTrustedText,
  StyledAwardsList,
  StyledAwardsItem,
  StyledAwardsItemIcon
};
