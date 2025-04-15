import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledInfoCard = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
  }
`;

const StyledInfoCardImage = styled.div`
  width: 100%;
  height: 144px;
  background-color: #f9f9f9;
  position: relative;

  &:before {
    content: "";
    width: 96px;
    height: 96px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("/images/templates/affiliates/useful-info/icons.svg");
    background-repeat: no-repeat;
  }

  &.marketing-kit:before {
    background-position-x: -140px;
  }

  &.affiliate-policy:before {
    background-position-x: -280px;
  }

  &.contact-us:before {
    background-position-x: -420px;
  }

  &.help-from-oomarketing:before {
    background-position-x: -560px;
  }
`;

const StyledInfoCardContent = styled.div`
  padding: 31px;
  display: grid;
  row-gap: 16px;
  text-align: center;

  @media ${device.tablet} {
    padding: 23px;
  }

  @media ${device.mobile} {
    padding: 15px;
    gap: 12px;

    p {
      font-size: 13px;
      line-height: 20px;
    }

    a {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const StyledInfoCardHeading = styled(Heading)`
  line-height: 24px;

  @media ${device.mobile} {
    line-height: 22px;
  }
`;

const StyledInfoCardLink = styled.a`
  color: #ff6f3d;
  line-height: 24px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export {
  StyledInfoCard,
  StyledInfoCardImage,
  StyledInfoCardContent,
  StyledInfoCardHeading,
  StyledInfoCardLink,
};
