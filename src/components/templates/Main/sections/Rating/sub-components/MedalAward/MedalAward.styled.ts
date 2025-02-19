import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledMedalAward = styled(Link)`
  width: 100%;
  max-width: 224px;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const StyledMedalAwardImage = styled.div<{ $imgUrl: string }>`
  margin-bottom: 16px;
  width: 100%;
  height: 96px;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.mobile} {
    height: 72px;
  }
`;

const StyledMedalAwardHeading = styled.div`
  font-size: 13px;
  line-height: 21px;
  text-align: center;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export { StyledMedalAward, StyledMedalAwardImage, StyledMedalAwardHeading };
