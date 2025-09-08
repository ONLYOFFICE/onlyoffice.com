import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledUsefulLinksWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 40px;
  overflow-x: scroll;
  scrollbar-width: none;

  @media ${device.mobile} {
    padding: 32px 16px;
  }
`;

const StyledUsefulLinks = styled.div`
  display: flex;
  gap: 32px;
  width: max-content;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledUsefulLinkItem = styled.div`
  width: 544px;
  box-shadow: 0 7px 15px 0 rgba(85, 85, 85, 0.1);
  background: #fff;

  @media ${device.desktop} {
    width: calc(50vw - 56px);
  }

  @media ${device.tabletS} {
    width: 328px;
  }

  @media ${device.mobile} {
    width: 288px;
  }

  @media ${device.mobileS} {
    width: 240px;
  }
`;

const StyledUsefulLinkImage = styled.div<{ $image: string }>`
  width: 100%;
  padding-bottom: 50.4%;
  background-image: url(${({ $image }) => $image});
  background-size: 100% auto;
  background-repeat: no-repeat;

  @media ${device.mobile} {
    padding-bottom: 0;
    height: 122px;
  }
`;

const StyledUsefulLinkContent = styled(Text)`
  padding: 32px;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const StyledUsefulLinkText = styled(Text)`
  padding: 0 16px;
`;

export {
  StyledUsefulLinksWrapper,
  StyledUsefulLinks,
  StyledUsefulLinkItem,
  StyledUsefulLinkImage,
  StyledUsefulLinkContent,
  StyledUsefulLinkText,
};
