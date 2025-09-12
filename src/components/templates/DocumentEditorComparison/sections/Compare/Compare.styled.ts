import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCompareWrapper = styled.div`
  display: grid;
  gap: 32px;
  justify-items: center;
  text-align: center;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledCompareContent = styled.div`
  max-width: 736px;
  margin: 0 auto;
  display: grid;
  gap: 8px;
  justify-items: center;

  @media ${device.tabletS} {
    max-width: 100%;
  }
`;

const StyledCompareTextLink = styled(Link)<{
  $type: "docx" | "xlsx";
}>`
  display: inline-block;

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 5px;
    background-image: ${({ $type }) =>
      $type === "docx"
        ? `url(${getAssetUrl('/images/templates/document-editor-comparison/compare/file_docx.svg')})`
        : $type === "xlsx"
        ? `url(${getAssetUrl('/images/templates/document-editor-comparison/compare/file_xlsx.svg')})`
        : undefined};
  }
`;

const StyledCompareLink = styled(Link)`
  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledCompareButtonWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    display: grid;
    width: 100%;
  }
`;

export {
  StyledCompareWrapper,
  StyledCompareContent,
  StyledCompareTextLink,
  StyledCompareLink,
  StyledCompareButtonWrapper,
};
