import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledHeading = styled(Heading)`
  font-size: 40px;
  text-align: center;
  position: relative;

  &::before {
    background-image: url("/images/templates/technology-partners/heading-icons/tech-h-icons.svg");
    background-position: -389px 0px;
    content: "";
    height: 56px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    top: -70px;
    width: 56px;
  }

  @media ${device.tablet} {
    letter-spacing: -0.01em;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  text-align: center;
  margin: 24px auto 40px;
  max-width: 717px;
  width: 100%;

  @media ${device.mobile} {
    font-size: 16px;
    margin: 16px auto 32px;
  }
`;

const WrapperLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 0 auto 40px;
  max-width: 900px;

  @media ${device.mobile} {
    gap: 8px;
    margin-bottom: 32px;
  }
`;

const StyledLink = styled(Link)`
  background-color: #ffffff;
  border: 1px solid #efefef;
  border-radius: 6px;
  box-sizing: border-box;
  display: block;
  height: 96px;
  padding: 32px;
  position: relative;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 3px 9px rgba(85, 85, 85, 0.1);
  }

  &::before {
    background-image: url("/images/templates/technology-partners/image-link/marketplaces.svg");
    background-position: 0 0;
    background-repeat: no-repeat;
    content: "";
    height: 32px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 167px;
  }

  &:first-child {
    width: 232px;
  }

  &:nth-child(2) {
    width: 344px;

    &::before {
      background-position: -190px 0;
      width: 282px;
    }
  }

  &:nth-child(3) {
    width: 260px;

    &::before {
      background-position: -495.5px;
      width: 197px;
    }
  }

  &:nth-child(4) {
    width: 232px;

    &::before {
      background-position: -717px 0;
      width: 169px;
    }
  }

  &:nth-child(5) {
    width: 178px;

    &::before {
      background-position: -911px 0;
      width: 116px;
    }
  }

  @media ${device.mobile} {
    padding: 24px;

    &:nth-child(n) {
      height: 72px;
      width: 100%;

      &::before {
        height: 24px;
      }
    }

    &:first-child::before {
      background-size: auto 28px;
      width: 146px;
    }

    &:nth-child(2)::before {
      background-position: -163px 0px;
      background-size: auto 27.5px;
      width: 242px;
    }

    &:nth-child(3)::before {
      background-position: -418px 0px;
      background-size: auto 27px;
      width: 166px;
    }

    &:nth-child(4)::before {
      background-position: -578px -1px;
      background-size: auto 26px;
      width: 148px;
    }

    &:nth-child(5)::before {
      background-position: -684px 1px;
      background-size: auto 24px;
      width: 86px;
    }
  }
`;

export { StyledContainer, StyledHeading, StyledText, WrapperLink, StyledLink };
