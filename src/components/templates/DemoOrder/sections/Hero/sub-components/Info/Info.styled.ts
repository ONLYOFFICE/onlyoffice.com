import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  max-width: 472px;
  height: 100%;

  @media ${device.tablet} {
    max-width: 432px;
  }

  @media ${device.tabletS} {
    margin-left: initial;
    max-width: 100%;
  }
`;

const StyledInfoBox = styled.div`
  display: grid;
  row-gap: 32px;
  margin-bottom: 48px;

  @media ${device.tabletS} {
    margin-bottom: 56px;
  }
  @media ${device.mobile} {
    row-gap: 16px;
  }
`;

const StyledInfoHeading = styled(Heading)`
  @media ${device.tabletS} {
    font-size: 32px;
    line-height: 43px;
  }
  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledInfoIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const IconItem = styled.div<{ $icon: string; $position: string }>`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 10px;
  font-size: 18px;
  line-height: 27px;
  &:before {
    background-image: ${(props) => `url(${props.$icon})`};
    background-repeat: no-repeat;
    background-position-x: ${(props) => props.$position};
    display: block;
    content: "";
    width: 24px;
    height: 24px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledInfoTrusted = styled.div`
  position: relative;
  border-top: 1px solid #bcdfec;
  border-bottom: 1px solid #bcdfec;
  padding: 32px 0 32px 72px;
  margin: auto 0 32px;
  font-size: 18px;
  line-height: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 56px;
    height: 46px;
    background-image: url("/images/templates/docspace-registration/hero/trusted.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-50%);
  }

  span {
    font-size: 28px;
    font-weight: 700;

    @media ${device.mobile} {
      font-size: 22px;
    }
  }
  @media ${device.tabletS} {
    margin: auto 0 16px;
  }

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

const StyledInfoAwards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
  }

  @media ${device.tabletS} {
    grid-template-columns: repeat(6, 1fr);
    justify-content: initial;
    margin: 0 -40px;
    overflow-x: auto;
  }
`;

const StyledInfoAward = styled.div<{
  $position: string;
}>`
  width: 150px;
  height: 80px;
  background-image: url("/images/templates/demo-order/hero/companies.svg");
  background-repeat: no-repeat;
  background-position-x: ${(props) => props.$position};

  @media ${device.tabletS} {
    &:first-child {
      margin-left: 40px;
    }
  }
`;

export {
  StyledInfoWrapper,
  StyledInfoBox,
  StyledInfoHeading,
  StyledInfoIcons,
  StyledInfoTrusted,
  StyledInfoAwards,
  StyledInfoAward,
  IconItem,
};
