import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFeaturesTable = styled.table`
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  border-collapse: collapse;
  table-layout: fixed;
  margin: 0 auto 56px;
  background-color: #ffffff;
  filter: drop-shadow(0px 7px 15px rgba(85, 85, 85, 0.1));

  tr {
    border-bottom: 1px solid #e2e2e2;

    @media ${device.mobile} {
      display: flex;
      flex-wrap: wrap;
    }
  }

  td {
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    padding: 24px;
    vertical-align: top;

    &:first-child {
      max-width: 352px;
      background-color: #f9f9f9;

      > span {
        font-size: 18px;
        line-height: 12px;
        font-weight: 700;
      }

      @media ${device.mobile} {
        max-width: 100%;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
        border-bottom: 1px solid #e2e2e2;
        vertical-align: baseline;
        padding: 12px 24px;

        > span {
          font-size: 16px;
        }
      }
    }

    &:not(:first-child) {
      width: 33%;
      padding: 24px;

      @media ${device.mobile} {
        width: 50%;
        font-size: 12px;
        line-height: 12px;
        padding: 12px;
      }
    }
  }

  @media ${device.tablet} {
    margin: 0 auto 40px;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    min-width: 200px;
    border-right: none;
    border-left: none;
    margin: 0 auto 36px;
  }
`;

const StyledFeaturesTableItems = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  line-height: 1.6em;
  gap: 10px;
  text-align: left;

  @media ${device.mobile} {
    height: 100%;
    justify-content: start;
  }
`;

const StyledFeaturesTableItemHeader = styled(Text)`
  text-align: left;
  font-size: 15px;
  line-height: 1.6em;
  font-weight: 600;

  @media ${device.mobile} {
    font-size: 13px;
    width: 100%;
  }
`;

const StyledFeaturesTableItemParagraph = styled.span`
  text-align: left;
  font-size: 15px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFeaturesTableItemList = styled.ol`
  list-style-type: none;
`;

const StyledFeaturesTableItemListItem = styled.li`
  background-image: url(${getAssetUrl('/images/icons/check.svg')});
  background-repeat: no-repeat;
  margin-bottom: 9px;
  padding-left: 32px;
  text-align: start;
  font-size: 15px;

  @media ${device.mobile} {
    background-image: none;
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 13px;
    line-height: 16px;
  }
`;

const StyledFeaturesTableOutro = styled(Text)`
  font-style: italic;
  padding-left: 32px;
  font-size: 15px;
  text-align: left;

  @media ${device.mobile} {
    font-size: 13px;
    padding: 0;
  }
`;

const StyledFeaturesTableMainTr = styled.tr`
  border-bottom: 1px solid #e2e2e2;
  @media ${device.mobile} {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #f9f9f9;
  }
`;

const StyledFeaturesTableMainTh = styled.th`
  background-color: #f9f9f9;
  line-height: 1.6em;
  font-size: 18px;
  padding: 15px 24px;
  font-weight: 700;

  &:first-child {
    @media ${device.mobile} {
      display: none;
    }
  }

  @media ${device.mobile} {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

export {
  StyledFeaturesTable,
  StyledFeaturesTableItems,
  StyledFeaturesTableItemHeader,
  StyledFeaturesTableItemParagraph,
  StyledFeaturesTableItemList,
  StyledFeaturesTableItemListItem,
  StyledFeaturesTableOutro,
  StyledFeaturesTableMainTr,
  StyledFeaturesTableMainTh,
  StyledContainer,
};
