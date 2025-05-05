import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledFeatureButtonItem = styled.div`
  max-width: 544px;

  @media ${device.tablet} {
    max-width: 328px;
  }

  .item__btn {
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #fff;
    border-radius: 3px;
  }
`;

const StyledFeatureButtonItemIcon = styled.div<{ $iconUrl: string }>`
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
  background-image: ${(props) => `url(${props.$iconUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledFeatureButtonItemHeading = styled(Heading)`
  margin-bottom: 12px;
`;

const StyledFeatureButtonItemText = styled(Text)`
  margin-bottom: 28px;

  @media ${device.mobile} {
    margin: 0 0 20px;
  }
`;

export {
  StyledFeatureButtonItem,
  StyledFeatureButtonItemIcon,
  StyledFeatureButtonItemHeading,
  StyledFeatureButtonItemText,
};
