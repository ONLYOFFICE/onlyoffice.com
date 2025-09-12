import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const TableWrapper = styled.div`
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #e2e2e2;
  max-width: 928px;
  margin: 56px auto 32px;

  @media ${device.mobile} {
    margin: 32px auto;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  text-align: left;

  th,
  td {
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #e2e2e2;
  }

  td:first-child,
  th:first-child {
    text-align: left;
    background: #f9f9f9;
  }

  thead {
    background: #f9f9f9;

    tr th:first-child {
      background-color: #ffffff;
      border-top-left-radius: 6px;
      text-align: left;
      text-transform: uppercase;
      font-size: 14px;
    }

    tr th:last-child {
      border-top-right-radius: 6px;
      background-color: #ff6f3d;
      color: #fff;
    }
  }

  tr:last-child {
    border-bottom: none;
  }

  td + td,
  th + th {
    border-left: 1px solid #e2e2e2;
  }
  tr:last-child td {
    border-bottom: none;
  }

  th:first-child,
  td:first-child {
    width: 256px;
  }

  th:not(:first-child),
  td:not(:first-child) {
    width: 224px;
  }

  @media ${device.mobile} {
    font-size: 14px;

    thead {
      tr th:not(:first-child) {
        display: none;
      }

      tr th:first-child {
        border-bottom: none;
        grid-column: span 3;
        width: 100%;
      }
    }

    tbody {
      display: flex;
      flex-direction: column;
    }

    tr {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      &:last-child td:first-child {
        border-bottom: 1px solid #e2e2e2;
      }
    }

    td {
      display: block;
      border: none;
      text-align: left;
      font-weight: 400;
    }

    td:first-child {
      background-color: #f9f9f9;
      font-weight: 700;
      grid-column: span 3;
      border-bottom: 1px solid #e2e2e2;
      border-top: 1px solid #e2e2e2;
      width: 100%;
    }

    td:not(:first-child) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      width: 100%;
    }

    td:not(:first-child)::before {
      content: attr(data-plan);
      font-weight: 700;
    }

    td + td,
    th + th {
      &:nth-child(2) {
        border-left: none;
      }
    }
  }
`;

const TableCell = styled.td<{ $icon?: string }>`
  &:first-child {
    background: #f9f9f9;
    text-align: left;
  }
  ${(props) =>
    props.$icon &&
    `
      &::after {
        background-image: url(${getAssetUrl('/images/templates/academy/table/${props.$icon}.svg')});
        background-repeat: no-repeat;
        content: "";
        background-position: center;
        display: block;
        width: 24px;
        height: 24px;
        position: relative;
        left: calc(50% - 12px);

        @media ${device.mobile} {
          position: initial;
        }
      }
    `}
`;

const TableNote = styled(Text)`
  font-size: 14px;
  color: #666666;
  text-align: center;
`;

export { StyledTable, TableCell, TableNote, TableWrapper };
