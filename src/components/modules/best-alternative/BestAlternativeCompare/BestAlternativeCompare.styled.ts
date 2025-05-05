import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledBestAlternativeCompareWrapper = styled.div`
  display: grid;
  gap: 40px;
  justify-items: center;
  text-align: center;

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const StyledBestAlternativeCompareContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 16px;
  justify-items: center;

  @media ${device.tabletS} {
    max-width: 100%;
  }

  @media ${device.mobile} {
    gap: 8px;
  }
`;

const StyledBestAlternativeCompareTextLink = styled(Link)<{
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
        ? "url('/images/modules/best-alternative/best-alternative-compare/file_docx.svg')"
        : $type === "xlsx"
        ? "url('/images/modules/best-alternative/best-alternative-compare/file_xlsx.svg')"
        : undefined};
  }
`;

const StyledBestAlternativeCompareLink = styled(Link)`
  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledBestAlternativeCompareButtonWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    display: grid;
    width: 100%;
  }
`;

export {
  StyledBestAlternativeCompareWrapper,
  StyledBestAlternativeCompareContent,
  StyledBestAlternativeCompareTextLink,
  StyledBestAlternativeCompareLink,
  StyledBestAlternativeCompareButtonWrapper,
};
