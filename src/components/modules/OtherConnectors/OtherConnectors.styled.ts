import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledOtherConnectors = styled(Section)`
  border-top: 1px solid #e2e2e2;
  background-color: #f9f9f9;
`;

const StyledOtherConnectorsWrapper = styled.div`
  display: grid;
  align-items: start;
  row-gap: 40px;

  @media ${device.mobile} {
    row-gap: 32px;
  }
`;

const StyledOtherConnectorsBlock = styled.div`
  h4 {
    margin-bottom: 16px;
  }
`;

const StyledOtherConnectorsItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -16px;

  li {
    margin-bottom: 16px;

    &:not(:last-child) {
      margin-right: 16px;

      @media ${device.mobile} {
        margin-right: 12px;
      }
    }

    @media ${device.mobile} {
      margin-bottom: 0;
    }
  }

  .connector-btn {
    padding: 14px 16px;
    background-color: #ffffff;
    filter: grayscale(100%);
    transition: filter 0.2s, box-shadow 0.2s;

    &.active,
    &:hover {
      filter: grayscale(0);
      box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
    }
  }

  .connector-img-btn {
    width: 48px;
    height: 28px;
    background-image: url("/images/modules/connector-links/connectors.svg");
    background-repeat: no-repeat;

    &--confluence {
      width: 128px;
      background-position-x: -67px;
    }

    &--dropbox {
      width: 112px;
      background-position-x: -211px;
    }

    &--moodle {
      width: 64px;
      background-position-x: -338px;
    }

    &--nextcloud {
      width: 40px;
      background-position-x: -418px;
    }

    &--odoo {
      width: 56px;
      background-position-x: -474px;
    }

    &--owncloud {
      width: 52px;
      background-position-x: -547px;
    }
  }

  @media ${device.mobile} {
    flex-wrap: initial;
    padding: 0 16px 32px;
    margin: 0 -16px -32px;
    overflow-x: auto;
  }
`;

const StyledOtherConnectorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -16px;

  li {
    margin-bottom: 16px;

    &:not(:last-child) {
      margin-right: 16px;

      @media ${device.mobile} {
        margin-right: 8px;
      }
    }
  }

  .connector-link {
    padding: 11px 18px;
    font-size: 16px;
    font-weight: 400;
    text-transform: initial;

    &--partners {
      &:hover,
      &:active {
        border-color: #aaaaaa;
        color: #444444;
        cursor: default;
      }
    }

    &.active {
      border-color: #ff6f3d;
      color: #ff6f3d;
    }

    @media ${device.mobile} {
      padding: 6px 11px;
      font-size: 14px;
      line-height: 21px;
    }
  }
`;

export {
  StyledOtherConnectors,
  StyledOtherConnectorsWrapper,
  StyledOtherConnectorsItems,
  StyledOtherConnectorsBlock,
  StyledOtherConnectorsList,
};
