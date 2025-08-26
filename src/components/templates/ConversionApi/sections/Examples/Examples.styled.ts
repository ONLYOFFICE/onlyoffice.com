import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledExamplesSection = styled(Section)`
  border-bottom: 1px solid #e2e2e2;
`;

const StyledExamplesHeading = styled(Heading)`
  max-width: 736px;
  margin: 0 auto;
  text-align: center;
`;

const StyledExamplesLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 80px 0 56px;
  justify-content: center;
  align-items: center;
  gap: 40px 32px;

  @media ${device.tablet} {
    padding: 0 16px;
    margin: 64px 0 56px;
  }

  @media ${device.mobile} {
    padding: 0;
    margin: 40px 0 32px;
  }
`;

const StyledExamplesLogo = styled(Link)`
  display: block;
  width: 140px;
  height: 40px;
  background-image: url("/images/templates/conversion-api/examples/logo_connectors.svg");
  background-size: 140px auto;
  background-repeat: no-repeat;
  background-position-y: 0;
  filter: grayscale(1);
  transition: filter 0.2s;

  &:hover,
  &:focus-visible {
    filter: grayscale(0);
  }

  &.plone {
    background-position-y: -70px;

    @media ${device.mobile} {
      background-position-y: -58px;
    }
  }

  &.owncloud {
    background-position-y: -144px;

    @media ${device.mobile} {
      background-position-y: -115px;
    }
  }

  &.nextcloud {
    background-position-y: -216px;

    @media ${device.mobile} {
      background-position-y: -173px;
    }
  }

  &.confluence {
    background-position-y: -286px;

    @media ${device.mobile} {
      background-position-y: -232px;
    }
  }

  &.dropbox {
    background-position-y: -358px;

    @media ${device.mobile} {
      background-position-y: -288px;
    }
  }

  &.nuxeo {
    background-position-y: -430px;

    @media ${device.mobile} {
      background-position-y: -346px;
    }
  }

  &.liferay {
    background-position-y: -502px;

    @media ${device.mobile} {
      background-position-y: -402px;
    }
  }

  &.jira {
    background-position-y: -574px;

    @media ${device.mobile} {
      background-position-y: -460px;
    }
  }

  &.box {
    background-position-y: -648px;

    @media ${device.mobile} {
      background-position-y: -520px;
    }
  }

  &.redmine {
    background-position-y: -720px;

    @media ${device.mobile} {
      background-position-y: -576px;
    }
  }

  @media ${device.tabletS} {
    &:nth-child(5) {
      margin-left: 40px;
    }

    &:nth-child(7) {
      margin-right: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    &:nth-child(5) {
      margin-left: 0;
    }

    &:nth-child(7) {
      margin-right: 0;
    }
  }

  @media ${device.mobile} {
    width: 112px;
    height: 32px;
    background-size: 112px auto;
  }
`;

export {
  StyledExamplesSection,
  StyledExamplesHeading,
  StyledExamplesLogosWrapper,
  StyledExamplesLogo,
};
