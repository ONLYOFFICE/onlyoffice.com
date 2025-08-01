import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledFCHeading = styled(Heading)`
  margin-bottom: 80px;
  text-align: center;

  @media ${device.tablet} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledFCContent = styled.div`
  display: grid;
  row-gap: 64px;

  @media ${device.tabletS} {
    row-gap: 72px;
  }
  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledImgLinkBtnListItem = styled.li`
  font-size: 14px;
  line-height: 1.5em;
  margin-bottom: 16px;
  padding-left: 32px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 8px;
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    background: #ff6f3d;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.mobile} {
    font-size: 13px;
    margin-bottom: 8px;
  }
`;

const StyledFeaturesListDescription = styled(Text)`
  color: #333333;
  font-size: 16px;
  line-height: 1.5;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledFCHeading,
  StyledFCContent,
  StyledImgLinkBtnListItem,
  StyledFeaturesListDescription,
};
