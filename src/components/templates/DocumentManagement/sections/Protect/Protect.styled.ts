import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledProtectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 67px;
  }
`;

const StyledProtectImage = styled.div`
  padding-bottom: 63%;
  background-image: url("/images/templates/document-management/protect/protect.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const StyledProtectContent = styled.div`
  display: grid;
  gap: 24px;

  @media ${device.mobile} {
    order: -1;
    gap: 16px;
  }
`;

const StyledProtectText = styled(Text)`
  color: #cccccc;

  @media ${device.tabletS} {
    font-size: 16px;
    line-height: 26px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledProtectLink = styled(Link)`
  @media ${device.mobile} {
    font-size: 14px;
    line-height: 24px;
  }
`;

export {
  StyledProtectWrapper,
  StyledProtectImage,
  StyledProtectContent,
  StyledProtectText,
  StyledProtectLink,
};
