import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledMonetizeWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  gap: 48px;
  margin-top: 72px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: 56px;
    gap: 40px;
  }

  @media ${device.mobile} {
    margin-top: 32px;
    gap: 32px;
  }
`;

const StyledMonetizeContent = styled.div`
  display: grid;
  gap: 32px;
  justify-items: start;

  @media ${device.tabletS} {
    justify-items: center;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledMonetizeContentText = styled(Text)`
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledMonetizeImage = styled.div`
  max-width: 624px;
  width: 100%;
  padding-bottom: 55.157%;
  background-image: url(${getAssetUrl('/images/templates/influencer-program/monetize/monetize.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${device.tabletS} {
    order: -1;
  }

  @media ${device.mobile} {
    width: 268px;
    height: 148px;
    padding-bottom: 0;
  }
`;

export { StyledMonetizeWrapper, StyledMonetizeContent,StyledMonetizeContentText, StyledMonetizeImage };
