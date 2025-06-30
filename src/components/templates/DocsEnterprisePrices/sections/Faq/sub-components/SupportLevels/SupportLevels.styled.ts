import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledSupportLevelsTable = styled.div`
  margin-bottom: 24px;

  table {
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;

    thead {
      th {
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: -0.02em;
        color: #333333;

        &:first-child {
          background-color: #f5f5f5;

          @media ${device.mobile} {
            display: none;
          }
        }

        &:not(:first-child) {
          border-bottom: 1px solid #e5e5e5;
          background-color: #f5f5f5;

          &:not(:last-child) {
            @media ${device.mobile} {
              border-right: none;
            }
          }

          @media ${device.mobile} {
            border: 1px solid #e5e5e5;
          }
        }

        @media ${device.mobile} {
          padding: 8px;
          font-size: 12px;
        }
      }
    }

    tbody {
      td {
        font-size: 14px;
        line-height: 19px;

        &:not(:first-child) {
          text-align: center;
        }

        @media ${device.mobile} {
          font-size: 13px;
          line-height: 18px;
        }
      }

      tr {
        &:nth-child(even) {
          display: none;

          td {
            &:first-child {
              display: none;
            }

            &:not(:first-child) {
              border: 1px solid #e5e5e5;

              &:not(:last-child) {
                border-right: none;
              }
            }

            @media ${device.mobile} {
              padding: 8px;
              font-size: 12px;
              font-weight: 700;
              line-height: 19px;
              color: #333333;
            }
          }

          @media ${device.mobile} {
            display: flex;
            background-color: #f5f5f5;
          }
        }
      }
    }

    tr {
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

      @media ${device.mobile} {
        display: flex;
        flex-wrap: wrap;
      }
    }

    th,
    td {
      padding: 14px 12px;

      &:not(:last-child) {
        border-right: 1px solid #e5e5e5;

        @media ${device.mobile} {
          border-right: none;
        }
      }

      &:first-child {
        background-color: #f9f9f9;

        @media ${device.mobile} {
          border: 1px solid #e5e5e5;
          border-top: none;
          flex: 0 1 100%;
          width: initial;
          text-align: center;
          background-color: transparent;
        }
      }

      &:not(:first-child) {
        @media ${device.tabletS} {
          flex: 0 1 33.333%;
          width: initial;
        }
      }

      @media ${device.mobile} {
        padding: 10px 12px;
      }
    }

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      border: none;
    }
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledSupportLevelsIcon = styled.span<{ $icon: string }>`
  display: inline-flex;
  width: 20px;
  height: 20px;
  background-image: ${({ $icon }) =>
    $icon === "check"
      ? "url('/images/icons/check.svg')"
      : $icon === "dash"
        ? "url('/images/icons/dash.svg')"
        : "none"};
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
`;

export { StyledSupportLevelsTable, StyledSupportLevelsIcon };
