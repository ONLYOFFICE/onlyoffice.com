import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledInfoBackLink = styled.button`
  display: inline-flex;
  align-self: start;
  align-items: center;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 0;
  margin-bottom: 64px;
  background-color: transparent;
  transition: color 0.2s;
  cursor: pointer;

  svg {
    margin-right: 8px;

    path {
      transition: fill 0.2s;
    }
  }

  &:hover {
    color: #ff6f3d;

    svg {
      path {
        fill: #ff6f3d;
      }
    }
  }

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.tabletS} {
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    align-self: initial;
    margin-bottom: 48px;
  }
`;

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
    margin-bottom: 64px;
  }
`;

const StyledInfoLogo = styled.img`
  display: block;
  width: 294px;
  height: 32px;
  object-fit: contain;

  @media ${device.mobile} {
    width: 210px;
    height: 24px;
  }
`;

const StyledInfoHeading = styled(Heading)`
  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledInfoIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 48px);
  gap: 24px;

  @media ${device.mobile} {
    gap: 11px;
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

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

const StyledInfoAwards = styled.div`
  display: flex;
`;

const StyledInfoAward = styled.div<{
  $cloudComputing?: boolean;
  $slashdot?: boolean;
  $capterra?: boolean;
}>`
  width: ${(props) => (props.$cloudComputing ? "200px" : "72px")};
  height: 72px;
  background-image: url("/images/templates/docspace-registration/hero/awards.svg");
  background-repeat: no-repeat;
  background-position-x: ${(props) =>
    props.$slashdot ? "-222px" : props.$capterra ? "-320px" : null};

  &:not(:last-child) {
    margin-right: 24px;

    @media ${device.tablet} {
      margin-right: 16px;
    }

    @media ${device.tabletS} {
      margin-right: 24px;
    }

    @media ${device.mobile} {
      margin-right: 8px;
    }
  }

  @media ${device.tablet} {
    width: ${(props) => (props.$cloudComputing ? "156px" : "56px")};
    height: 56px;
    background-size: auto 56px;
    background-position-x: ${(props) =>
      props.$slashdot ? "-173px" : props.$capterra ? "-248px" : null};
  }

  @media ${device.tabletS} {
    width: ${(props) => (props.$cloudComputing ? "200px" : "72px")};
    height: 72px;
    background-size: auto 72px;
    background-position-x: ${(props) =>
      props.$slashdot ? "-222px" : props.$capterra ? "-320px" : null};
  }

  @media ${device.mobile} {
    width: ${(props) => (props.$cloudComputing ? "156px" : "56px")};
    height: 56px;
    background-size: auto 56px;
    background-position-x: ${(props) =>
      props.$slashdot ? "-173px" : props.$capterra ? "-248px" : null};
  }
`;

export {
  StyledInfoBackLink,
  StyledInfoWrapper,
  StyledInfoBox,
  StyledInfoLogo,
  StyledInfoHeading,
  StyledInfoIcons,
  StyledInfoTrusted,
  StyledInfoAwards,
  StyledInfoAward,
};
