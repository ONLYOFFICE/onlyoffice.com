import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const StyledUPHeadingBox = styled.div`
  text-align: center;
`;

const StyledFeaturesHeading = styled(Heading)`
  margin: 0 auto;
  max-width: 1024px;

  @media ${device.mobile} {
  }
`;

const StyledFeaturesContent = styled.div`
  display: grid;
  row-gap: 64px;

  @media ${device.mobile} {
    row-gap: 32px;
  }
`;

const StyledIUPContentImage = styled(FeatureImageItem)<{
  $imgHeight: number;
  $imgWidth: number;
}>`
  & > div:last-child > div {
    background-size: ${(props) => props.$imgWidth}px auto;
  }

  ul {
    margin: 24px 0;
  }

  @media ${device.desktop} {
    & > div:last-child > div {
      background-size: 45vw;
    }
  }

  @media ${device.tabletS} {
    & > div:last-child > div {
      background-position: bottom;
      background-size: ${(props) => props.$imgWidth}px auto;
      padding: 0 0 ${(props) => props.$imgHeight + 32}px;
    }
  }

  @media ${device.mobile} {
    & > div:last-child > div {
      background-size: contain;
      padding: 0 0 ${(props) => props.$imgHeight * 0.5 + 24}px;
    }
  }
`;

const StyledFeaturesDescription = styled(Text)`
  font-size: 18px;
  line-height: 1.5em;
  margin: 40px auto 64px;
  max-width: 900px;
`;

const StyledFeaturesListItem = styled.li`
  font-size: 14px;
  line-height: 1.6em;
  margin-bottom: 8px;
  padding-left: 24px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 1px;
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    background: #ff6f3d;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledFeaturesListDescription = styled(Text)`
  color: #333333;
  font-size: 14px;
  line-height: 1.6em;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 8px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledUPHeadingBox,
  StyledFeaturesHeading,
  StyledFeaturesContent,
  StyledIUPContentImage,
  StyledFeaturesDescription,
  StyledFeaturesListItem,
  StyledFeaturesListDescription,
};
