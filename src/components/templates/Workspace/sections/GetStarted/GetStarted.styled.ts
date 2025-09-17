import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledGetStartedWrapper = styled.div`
  display: grid;
  text-align: center;
`;

const StyledGetStartedText = styled(Text)`
  max-width: 607px;
  margin: 24px auto 56px;

  @media ${device.tabletS} {
    max-width: 100%;
  }

  @media ${device.mobile} {
    margin: 16px auto 32px;
  }
`;

const StyledGetStartedItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 56px;

  @media ${device.tablet} {
    gap: 24px;
    margin-bottom: 32px;
  }

  @media (max-width: 710px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 16px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledGetStartedItem = styled.div`
  max-width: 352px;
  display: grid;
  justify-items: center;
  gap: 32px;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  width: 100%;
  padding: 37px 32px 35px;
  align-content: space-between;
  transition: box-shadow 0.3s ease;

  @media ${device.tabletS} {
    padding: 37px 26px 17px;
  }

  @media ${device.mobile} {
    padding: 24px 16px;
  }

  &:hover {
    box-shadow: 0px 20px 40px rgba(0,0,0,0.1);
  }
`;

const StyledGetStartedItemIcon = styled.div<{ $src: string; $width?: string }>`
  width: ${({ $width }) => $width || "80px"};
  height: 80px;
  background-image: url(${({ $src }) => $src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledGetStartedItemContent = styled.div`
  display: grid;
  gap: 16px;
`;

export {
  StyledGetStartedWrapper,
  StyledGetStartedText,
  StyledGetStartedItems,
  StyledGetStartedItem,
  StyledGetStartedItemIcon,
  StyledGetStartedItemContent,
};
