import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFileFormatsHeading = styled(Heading)`
  max-width: 768px;
  margin: 0 auto 32px;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledFileFormatsText = styled(Text)`
  max-width: 670px;
  margin: 0 auto 64px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 28px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledFileFormatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const StyledFileFormatsItem = styled.div`
  padding: 46px 32px 32px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 32px;
  justify-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 3px;

  @media ${device.mobile} {
    padding-top: 38px;
    gap: 24px;
  }
`;

const StyledFileFormatItemContent = styled.div`
  display: grid;
  gap: 16px;
  align-self: start;

  @media ${device.mobile} {
    gap: 8px;
  }
`;

const StyledFileFormatText = styled(Text)`
  @media ${device.mobile} {
    font-size: 13px;
    line-height: 21px;
  }
`;

const StyledFileFormatLink = styled(Link)`
  font-size: 14px;
  line-height: 22px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 21px;
  }
`;

const StyledFileFormatImage = styled.div<{
  $positionX: string;
  $mobilePositionX: string;
}>`
  width: 153px;
  height: 95px;
  background-image: url(${getAssetUrl('/images/templates/document-management/file-formats/file-icons.svg')});
  background-repeat: no-repeat;
  background-position: ${({ $positionX }) => $positionX} center;

  @media ${device.mobile} {
    width: 117px;
    height: 72px;
    background-position: ${({ $mobilePositionX }) => $mobilePositionX} center;
    background-size: cover;
  }
`;

export {
  StyledFileFormatsHeading,
  StyledFileFormatsText,
  StyledFileFormatsWrapper,
  StyledFileFormatsItem,
  StyledFileFormatImage,
  StyledFileFormatItemContent,
  StyledFileFormatText,
  StyledFileFormatLink,
};
