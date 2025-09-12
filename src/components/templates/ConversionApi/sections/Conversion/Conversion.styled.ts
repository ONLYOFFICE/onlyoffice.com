import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";


import { getAssetUrl } from "@utils/getAssetUrl";
const StyledConversionWrapper = styled.div`
  display: grid;
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledConversionHeading = styled(Heading)`
  margin-bottom: 16px;
  color: #fff;
`;

const StyledConversionText = styled(Text)`
  margin-bottom: 32px;
  color: #fff;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledConversionImage = styled.div`
  background-image: url(${getAssetUrl('/images/templates/conversion-api/conversion/conversion.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: 70.6%;

  @media ${device.tabletS} {
    max-width: 544px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 55.815%;
  }

  @media ${device.mobile} {
    padding-bottom: 70.6%;
  }
`;

export {
  StyledConversionWrapper,
  StyledConversionHeading,
  StyledConversionText,
  StyledConversionImage,
};
