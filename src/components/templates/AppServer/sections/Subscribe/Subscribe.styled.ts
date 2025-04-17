import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { Link } from "@src/components/ui/Link";
import { LoaderButton } from "@src/components/ui/LoaderButton";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled, { css } from "styled-components";

const StyledSubscribeSection = styled(Section)`
  background-color: #f9f9f9;
  background-image: url("/images/templates/app-server/subscribe/section-top.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  box-sizing: 1700px 53px;
  margin-top: -170px;

  @media ${device.tabletS} {
    margin-top: -100px;
  }

  @media ${device.mobile} {
    margin-top: -47px;
  }
`;

const StyledSubscribeWrapper = styled.div`
  max-width: 976px;
  margin: 0 auto;
  text-align: center;
`;

const StyledSubscribeHeading = styled(Heading)`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 54px;
  color: #ff6f3d;

  @media ${device.tabletS} {
    margin-bottom: 39px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 29px;
  }
`;

const StyledSubscribeFormWrapper = styled.div`
  background-image: url("/images/templates/app-server/subscribe/form-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 90px;

  @media ${device.tabletS} {
    margin-bottom: 75px;
  }

  @media ${device.mobile} {
    margin-bottom: 55px;
  }
`;

const StyledSubscribeFormContainer = styled.div`
  max-width: 928px;
  margin: 0 auto;
  padding: 79px 128px 86px;
  border: 1px dashed #ccc;
  border-radius: 10px;
  display: grid;
  gap: 30px;

  @media ${device.tabletS} {
    padding: 53px 32px 72px;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }

  @media ${device.mobile} {
    padding: 52px 16px 56px;
    gap: 21px;
  }
`;

const StyledSubscribeFormHeading = styled(Heading)`
  font-size: 18px;
  line-height: 29px;
  font-weight: 600;
  letter-spacing: -0.01em;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 25px;
  }
`;

const StyledSubscribeForm = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  > div {
    position: relative;

    .input-caption {
      position: absolute;
    }
  }
`;

const StyledSubscribeFormInput = styled(Input)<{ $status: string }>`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding-right: 24px;

  ${({ $status }) =>
    $status === "default" &&
    css`
      background-color: #fff;
    `}
`;

const StyledSubscribeFormButton = styled(LoaderButton)<{ $status: string }>`
  margin-left: -8px;
  z-index: 1;

  @media ${device.mobile} {
    padding: 0;
    min-height: 48px;
    height: 48px;
    width: 64px;

    ${({ $status }) =>
      $status === "default" &&
      css`
        background-image: url("/images/icons/chevron-right-white.svg");
        background-repeat: no-repeat;
        background-position: center;
      `}

    span {
      display: none;
    }
  }
`;

const StyledReadConceptText = styled(Text)`
  position: relative;
  padding-top: 54px;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: -0.01em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 38px;
    background-image: url("/images/templates/app-server/subscribe/read.svg");
    background-repeat: no-repeat;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 28px;
  }
`;

const StyledReadConceptLink = styled(Link)`
  position: relative;
  background-image: url("/images/icons/chevron-right-orange.svg");
  background-repeat: no-repeat;
  background-position: 100% center;
  padding-right: 23px;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledSubscribeSection,
  StyledSubscribeWrapper,
  StyledSubscribeHeading,
  StyledSubscribeFormWrapper,
  StyledSubscribeFormContainer,
  StyledSubscribeFormHeading,
  StyledSubscribeForm,
  StyledSubscribeFormInput,
  StyledSubscribeFormButton,
  StyledReadConceptText,
  StyledReadConceptLink,
};
