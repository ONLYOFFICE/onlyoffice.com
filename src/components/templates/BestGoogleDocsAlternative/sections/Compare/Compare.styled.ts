import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCompareWrapper = styled.div`
  display: grid;
  gap: 40px;
  justify-items: center;
  text-align: center;

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const StyledCompareContent = styled.div`
  display: grid;
  gap: 16px;
  justify-items: center;

  @media ${device.mobile} {
    gap: 8px;
  }
`;

const StyledCompareText = styled(Text)`
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledCompareTextLink = styled(Link)<{ $type: "docx" | "xlsx" }>`
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
        ? "url('/images/templates/best-google-docs-alternative/compatibility/file_docx.svg')"
        : $type === "xlsx"
        ? "url('/images/templates/best-google-docs-alternative/compatibility/file_xlsx.svg')"
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
  StyledCompareText,
  StyledCompareTextLink,
  StyledCompareLink,
  StyledCompareButtonWrapper,
};
