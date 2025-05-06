import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledSupport = styled(Section)`
  background: linear-gradient(136deg, #ffc671 0%, #ff7541 59.38%, #ff6f3d 100%);
`;

const StyledSupportBg = styled.div`
  background-image: url("/images/templates/docspace-enterprise/support/bg.svg");
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-size: 1396px auto;

  @media ${device.mobile} {
    background-size: 640px auto;
  }
`;

const StyledSupportContainer = styled(Container)`
  padding: 112px 0 192px;

  @media ${device.tablet} {
    padding: 80px 0 88px;
  }

  @media ${device.mobile} {
    padding: 48px 0 64px;
  }
`;

const StyledSupportHeading = styled(Heading)`
  &::before {
    content: "";
    background-image: url("/images/templates/docspace-enterprise/support/logo.svg");
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto 24px;
    text-align: center;
    width: 68px;
    height: 64px;
  }
`;

const StyledSupportText = styled(Text)`
  font-size: 22px;
  line-height: 160%;
  margin: 24px 0 56px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
    margin: 12px 0 56px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    margin: 16px 0 28px;
  }
`;

const StyledSupportList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 32px;
  row-gap: 40px;

  .item {
    &__btn {
      background-color: transparent;
      border: 1px solid #ffffff;
      color: #fff;
      border-radius: 3px;
    }
  }

  @media ${device.mobile} {
    row-gap: 20px;
  }
`;

const StyledSupportItemIcon = styled.div<{ $iconUrl: string }>`
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
  background-image: ${(props) => `url(${props.$iconUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export {
  StyledSupport,
  StyledSupportBg,
  StyledSupportContainer,
  StyledSupportItemIcon,
  StyledSupportHeading,
  StyledSupportText,
  StyledSupportList,
};
