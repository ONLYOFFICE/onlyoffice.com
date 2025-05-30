import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledCompareFeatures = styled.div`
  display: none;
  margin-top: 48px;

  @media ${device.mobile} {
    display: block;
  }
`;

const StyledCompareFeaturesHeading = styled(Heading)`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`;

const StyledCompareFeaturesWrapper = styled.div`
  margin: 0 -16px;
`;

const StyledCompareFeaturesTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  font-size: 12px;
  line-height: 1.33em;
  color: #333333;
  width: 100%;
  text-align: center;

  tr {
    th,
    td {
      &:nth-child(2) {
        background-color: #efefef;
      }
    }
  }

  td {
    vertical-align: top;
  }

  .compare-features-plan {
    padding: 16px 8px 0;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
  }

  .compare-features-item {
    padding: 8px 8px 0;

    &:last-child {
      padding-bottom: 16px;
    }
  }

  .compare-features-number {
    padding: 8px 8px 16px;
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
  }

  .compare-features-heading {
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding: 12px;
    background-color: #f9f9f9;
  }
`;

export {
  StyledCompareFeatures,
  StyledCompareFeaturesHeading,
  StyledCompareFeaturesWrapper,
  StyledCompareFeaturesTable,
};
