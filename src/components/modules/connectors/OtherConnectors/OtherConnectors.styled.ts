import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";

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

  @media ${device.mobile} {
    flex-wrap: initial;
    padding: 0 16px 32px;
    margin: 0 -16px -32px;
    overflow-x: auto;
  }
`;

const StyledOtherConnectorsItem = styled(Button)<{
  $active?: boolean;
}>`
  padding: 14px 16px;
  background-color: #ffffff;
  filter: grayscale(100%);
  transition:
    filter 0.2s,
    box-shadow 0.2s;

  ${(props) =>
    props.$active &&
    css`
      filter: grayscale(0);
      box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
    `}

  &:hover {
    filter: grayscale(0);
    box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
  }
`;

const connectorStyles: Record<
  string,
  { width: number; backgroundPositionX: number }
> = {
  confluence: { width: 128, backgroundPositionX: -67 },
  dropbox: { width: 112, backgroundPositionX: -211 },
  moodle: { width: 64, backgroundPositionX: -338 },
  nextcloud: { width: 40, backgroundPositionX: -418 },
  odoo: { width: 56, backgroundPositionX: -474 },
  owncloud: { width: 52, backgroundPositionX: -547 },
};

const StyledOtherConnectorsItemImg = styled.span<{ $id: string }>`
  width: ${({ $id }) => connectorStyles[$id]?.width || 48}px;
  height: 28px;
  background-image: url("/images/modules/other-connectors/connectors.svg");
  background-repeat: no-repeat;
  background-position-x: ${({ $id }) =>
    connectorStyles[$id]?.backgroundPositionX || 0}px;
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
`;

const StyledOtherConnectorsButton = styled(Button)<{
  $active?: boolean;
  $disabled?: boolean;
}>`
  min-height: 46px;
  padding: 10px 18px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  text-transform: initial;

  ${(props) =>
    props.$active &&
    css`
      border-color: #ff6f3d;
      color: #ff6f3d;
    `}

  ${(props) =>
    props.$disabled &&
    css`
      &:hover {
        border-color: #aaaaaa;
        color: #444444;
        cursor: default;
      }
    `}

  @media ${device.mobile} {
    padding: 6px 11px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export {
  StyledOtherConnectors,
  StyledOtherConnectorsWrapper,
  StyledOtherConnectorsItems,
  StyledOtherConnectorsItem,
  StyledOtherConnectorsItemImg,
  StyledOtherConnectorsBlock,
  StyledOtherConnectorsList,
  StyledOtherConnectorsButton,
};
