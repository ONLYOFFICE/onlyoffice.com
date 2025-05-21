import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFeatures = styled.section`
  padding: 60px 0;
  background-color: #f5f5f5;
  
  @media ${device.tablet} {
    padding: 40px 0;
  }
  
  @media ${device.mobile} {
    padding: 30px 0;
  }
`;

const StyledFeaturesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFeaturesContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const StyledFeaturesHeading = styled(Heading)`
  margin-bottom: 32px;
  
  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledFeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  list-style: none;
  padding: 0;
  
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StyledFeaturesItem = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    padding: 16px;
    border-radius: 8px;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: rgba(255, 111, 61, 0.05);
    }
  }
`;

const StyledFeaturesItemIcon = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  
  &.cl {
    background-image: url("/images/templates/docspace-registration/features/collaboration-rooms.svg");
  }
  
  &.cst {
    background-image: url("/images/templates/docspace-registration/features/custom-rooms.svg");
  }
  
  &.ff {
    background-image: url("/images/templates/docspace-registration/features/form-filling-rooms.svg");
  }
  
  &.mt {
    background-image: url("/images/templates/docspace-registration/features/zoom-rooms.svg");
  }
  
  &.pub {
    background-image: url("/images/templates/docspace-registration/features/public-rooms.svg");
  }
  
  &.de {
    background-image: url("/images/templates/docspace-registration/features/document-editors.svg");
  }
  
  @media ${device.mobile} {
    width: 48px;
    height: 48px;
    margin-bottom: 12px;
  }
`;

const StyledFeaturesItemTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

export {
  StyledFeatures,
  StyledFeaturesWrapper,
  StyledFeaturesContent,
  StyledFeaturesHeading,
  StyledFeaturesList,
  StyledFeaturesItem,
  StyledFeaturesItemIcon,
  StyledFeaturesItemTitle
};
