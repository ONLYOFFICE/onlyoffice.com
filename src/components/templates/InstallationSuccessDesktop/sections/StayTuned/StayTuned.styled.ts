import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledStayTunedSection = styled(Section)`
  overflow: hidden;
`;

const StyledStayTunedContainer = styled(Container)`
  position: relative;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    left: -62%;
    bottom: -67px;
    width: 1403px;
    height: 939px;
    background-image: url(${getAssetUrl('/images/templates/installation-success-desktop/stay-tuned/left.svg')});
    background-repeat: no-repeat;

    @media ${device.tablet} {
      left: -90%;
      bottom: -100px;
    }

    @media ${device.tabletS} {
      left: -130%;
    }

    @media ${device.mobile} {
      left: -170%;
    }

    @media screen and (max-width: 475px) {
      left: -220%;
    }

    @media screen and (max-width: 430px) {
      left: -270%;
    }

    @media screen and (max-width: 400px) {
      left: -300%;
    }

    @media ${device.mobileS} {
      left: -380%;
      bottom: -70px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    right: -40%;
    bottom: -152px;
    width: 972px;
    height: 757px;
    background-image: url(${getAssetUrl('/images/templates/installation-success-desktop/stay-tuned/right.svg')});
    background-repeat: no-repeat;

    @media ${device.tablet} {
      right: -80%;
      bottom: -200px;
    }

    @media ${device.tabletS} {
      right: -110%;
      bottom: -150px;
    }

    @media ${device.mobile} {
      right: -145%;
      bottom: -145px;
    }

    @media screen and (max-width: 475px) {
      right: -190%;
    }

    @media screen and (max-width: 400px) {
      right: -220%;
    }

    @media ${device.mobileS} {
      right: -290%;
    }
  }
`;

const StyledStayTunedWrapper = styled.div`
  max-width: 736px;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  position: relative;
  z-index: 2;
`;

const StyledStayTunedTitle = styled(Heading)`
  position: relative;
  padding-top: 72px;
  margin-bottom: 24px;
  color: #fff;

  @media ${device.mobile} {
    padding-top: 64px;
    margin-bottom: 16px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
    height: 48px;
    background-image: url(${getAssetUrl('/images/templates/installation-success-desktop/stay-tuned/logo.svg')});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const StyledStayTunedSubTitle = styled(Text)`
  color: #fff;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFormWrapper = styled.div`
  max-width: 736px;
  width: 100%;
  display: grid;
  gap: 16px;
  padding: 48px;
  margin: 32px auto 24px;
  background: #fff;
  box-shadow: 0 7px 15px 0 rgba(85, 85, 85, 0.1);
  border-radius: 5px;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

const StyledForm = styled.form<{ $locale?: string }>`
  position: relative;
  display: flex;

  .input-wrapper {
    border-radius: 9px 0px 0px 9px;

    @media ${device.mobileS} {
      height: 48px;
    }
  }

  .input-caption {
    position: absolute;
    top: -62px;
    left: 57%;
    transform: translateX(-50%);
    color: #cb0000;
    border-radius: 5px;
    padding: 19px 24px;
    box-shadow: 0 7px 25px 0 rgba(85, 85, 85, 0.15);
    background: #fff;
    margin-top: 0;

    @media ${device.tabletS} {
      left: 33.3%;
      transform: translateX(0);
    }

    @media screen and (max-width: 650px) {
      top: -56px;
    }

    @media ${device.mobileS} {
      left: 27%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -9px;
      left: 0;
      right: 0;
      margin: 0 auto;
      background-image: url(${getAssetUrl('/images/templates/installation-success-desktop/stay-tuned/triangle.svg')});
      background-repeat: no-repeat;
      width: 17px;
      height: 9px;
    }
  }

  > button {
    border-radius: 0px 9px 9px 0px;
    min-width: ${({ $locale }) =>
      $locale === "ja"
        ? "103px"
        : $locale === "zh"
          ? "76px"
          : $locale === "sr"
            ? "154px"
            : "56px"};
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 16px;

    .input-wrapper,
    button {
      border-radius: 9px;
    }
  }
`;

export {
  StyledStayTunedSection,
  StyledStayTunedContainer,
  StyledStayTunedWrapper,
  StyledStayTunedTitle,
  StyledStayTunedSubTitle,
  StyledFormWrapper,
  StyledForm,
};
