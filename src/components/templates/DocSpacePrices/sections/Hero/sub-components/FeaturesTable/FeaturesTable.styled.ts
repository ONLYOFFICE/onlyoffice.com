import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFeaturesTable = styled.div`
  table {
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;

    thead {
      th {
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.02em;

        &:first-child {
          @media ${device.tabletS} {
            display: none;
          }
        }
      }
    }

    tbody {
      .tbody-head-td {
        background-color: #f9f9f9;

        &:first-child {
          font-size: 14px;
          font-weight: 600;
          line-height: 19px;
          letter-spacing: 0.04em;
          color: #333333;
          text-align: initial;
          text-transform: uppercase;
          background-color: #f5f5f5;
        }

        &:not(:first-child) {
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          letter-spacing: -0.02em;
          background-color: #f9f9f9;

          @media ${device.tabletS} {
            display: none;
          }
        }
      }

      tr {
        &:hover {
          th {
            &:first-child {
              background-color: #efefef;
            }
          }

          td {
            &:first-child {
              background-color: #f5f5f5;
            }
          }

          th,
          td {
            &:not(:first-child) {
              background-color: #f5f5f5;
            }
          }
        }
      }
    }

    tfoot {
      tr {
        td {
          padding-left: 32px;
          padding-right: 32px;

          &:first-child {
            @media ${device.tabletS} {
              display: none;
            }
          }

          @media ${device.tabletS} {
            padding-left: 8px;
            padding-right: 8px;
          }
        }

        &:first-child {
          td {
            padding-top: 32px;
            padding-bottom: 12px;

            @media ${device.tabletS} {
              padding-top: 14px;
              padding-bottom: 8px;
            }
          }
        }

        &:last-child {
          td {
            padding-top: 12px;
            padding-bottom: 32px;

            @media ${device.tabletS} {
              padding-top: 8px;
              padding-bottom: 16px;
            }
          }
        }
      }

      &:hover {
        td {
          &:first-child {
            background-color: #efefef;
          }

          &:not(:first-child) {
            background-color: #f5f5f5;
          }
        }
      }
    }

    tr {
      @media ${device.tabletS} {
        display: flex;
        flex-wrap: wrap;
      }
    }

    td {
      font-size: 14px;
      line-height: 14px;

      &:first-child {
        @media ${device.tabletS} {
          color: #808080;
          text-align: center;
        }
      }

      &:not(:first-child) {
        text-align: center;

        @media ${device.tabletS} {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          line-height: 12px;
        }
      }
    }

    th,
    td {
      padding: 14px 12px;

      &:first-child {
        width: 352px;
        background-color: #f9f9f9;

        @media ${device.tablet} {
          width: calc((100% - 352px) / 1);
        }

        @media ${device.tabletS} {
          width: initial;
          flex: 0 1 100%;
        }
      }

      &:not(:first-child) {
        width: calc((100% - 352px) / 3);
        background-color: #ffffff;

        @media ${device.tabletS} {
          width: initial;
          flex: 0 1 33.333%;
        }
      }
    }

    @media ${device.tabletS} {
      display: flex;
      flex-direction: column;
      min-width: 430px;
      border-right: none;
      border-left: none;
    }
  }

  @media ${device.tabletS} {
    margin: 0 -16px;
    overflow-x: auto;
  }
`;

const StyledFeaturesTableIcon = styled.span<{ $icon: string }>`
  display: inline-flex;
  width: 24px;
  height: 24px;
  background-image: ${({ $icon }) =>
    $icon === "check"
      ? `url(${getAssetUrl('/images/icons/check.svg')})`
      : $icon === "dash"
        ? `url(${getAssetUrl('/images/icons/dash.svg')})`
        : "none"};
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledFeaturesTableButton = styled(Button)`
  @media ${device.mobile} {
    padding: 15px 16px;
    font-size: 12px;
    line-height: 16px;
  }
`;

const StyledFeaturesTableTooltip = styled.span`
  border-bottom: 1px dashed #ff6f3d;
  font-size: 14px;
  line-height: 19px;
  color: #ff6f3d;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 12px;
  }
`;

export {
  StyledFeaturesTable,
  StyledFeaturesTableIcon,
  StyledFeaturesTableButton,
  StyledFeaturesTableTooltip,
};
