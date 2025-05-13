import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledGettingHeading = styled(Heading)`
  @media ${device.tabletS} {
    font-size: 30px;
    line-height: 133%;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 133%;
  }
`;

const StyledGettingText = styled(Text)`
  margin-top: 24px;

  @media ${device.tabletS} {
    font-size: 16px;
    line-height: 150%;
  }

  @media ${device.mobile} {
    width: 90vw;
    margin: 16px auto 0;
    font-size: 14px;
  }
`;

const StyledGettingList = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 56px 0;

  @media ${device.mobile} {
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 32px 16px;
    gap: 24px;
  }
`;

const StyledGettingFooter = styled.div`
  padding: 24px 16px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;

  p {
    @media ${device.tabletS} {
      font-size: 14px;
      line-height: 160%;
    }
  }

  @media ${device.mobile} {
    width: calc(100vw - 33px);
    margin: 0 auto;
    font-size: 13px;
    padding: 16px;
  }
`;

export {
  StyledGettingHeading,
  StyledGettingText,
  StyledGettingList,
  StyledGettingFooter,
};
