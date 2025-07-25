import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledConversionApiWrapper = styled.div`
  text-align: center;
`;

const StyledConversionApiHeading = styled(Heading)`
  margin-bottom: 32px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledConversionApiImage = styled.div`
  margin: 0 auto 32px;
  width: 116px;
  height: 104px;
  background-image: url("/images/modules/converter/conversion-api/icon.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledConversionApiText = styled.div`
  display: grid;
  row-gap: 8px;
`;

export {
  StyledConversionApiWrapper,
  StyledConversionApiImage,
  StyledConversionApiHeading,
  StyledConversionApiText,
};
