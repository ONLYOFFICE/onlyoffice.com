import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledAcceptWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 56px;

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledAcceptItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledAcceptItem = styled.div<{ $positionX: string }>`
  padding-top: 96px;
  display: grid;
  justify-items: center;
  align-content: start;
  text-align: center;
  gap: 8px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 64px;
    background-image: url(${getAssetUrl('/images/templates/influencer-program/accept/icons-accept.svg')});
    background-repeat: no-repeat;
    background-position-x: ${({ $positionX }) => $positionX};
  }
`;

const StyledAcceptItemText = styled(Text)`
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export {
  StyledAcceptWrapper,
  StyledAcceptItems,
  StyledAcceptItem,
  StyledAcceptItemText,
};
