import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFeaturesHeading = styled(Heading)`
  max-width: 696px;
  margin: 0 auto;
  text-align: center;
`;

const StyledFeaturesItems = styled.div`
  margin: 56px 0 112px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px 32px;

  @media ${device.tabletS} {
    margin: 40px 0 88px;
  }

  @media ${device.mobile} {
    margin: 32px 0;
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StyledConverterWrapper = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  padding: 32px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  align-items: center;

  &:hover {
    box-shadow: 0px 20px 50px rgba(85, 85, 85, 0.15);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    padding: 22px 16px;
    gap: 16px;
  }
`;

const StyledConverterImage = styled.div`
  width: 392px;
  height: 192px;
  background-image: url(${getAssetUrl('/images/templates/conversion-api/features/document-converter.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    width: 230px;
    height: 112px;
  }

  @media ${device.mobile} {
    width: 256px;
    height: 130px;
    justify-self: center;
  }
`;

const StyledConverterTitle = styled(Heading)`
  margin-bottom: 8px;

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;

const StyledConverterText = styled(Text)`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;

  @media ${device.tabletS} {
    font-size: 14px;
    line-height: 21px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledConverterLink = styled(Link)`
  font-size: 16px;
  line-height: 21px;

  @media ${device.tabletS} {
    font-size: 14px;
    line-height: 21px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export {
  StyledFeaturesHeading,
  StyledFeaturesItems,
  StyledConverterWrapper,
  StyledConverterImage,
  StyledConverterTitle,
  StyledConverterText,
  StyledConverterLink,
};
