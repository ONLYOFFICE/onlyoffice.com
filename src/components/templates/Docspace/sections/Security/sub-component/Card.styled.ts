import styled from "styled-components";
import { device } from "@src/utils/device";
import { getAssetUrl } from "@utils/getAssetUrl";

const StyledCard = styled.div`
  display: flex;
  gap: 32px;
  width: 544px;

  @media ${device.desktop} {
    width: calc(50% - 16px);
  }

  @media ${device.mobile} {
    width: 100%;
    flex: 1;
  }
`;

const StyledCardIcon = styled.div<{ $image: string }>`
  width: 64px;
  background-image: url(${({ $image }) => getAssetUrl($image)});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;

const StyledCardTitle = styled.h3`
  font-size: 24px;

  @media ${device.tabletS} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledCardDescription = styled.p`
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export {
  StyledCard,
  StyledCardIcon,
  StyledCardTitle,
  StyledCardDescription,
  StyledWrapper,
};
