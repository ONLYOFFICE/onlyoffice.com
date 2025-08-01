import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";

const StyledOtherEditors = styled(Section)`
  border-top: 1px solid #e2e2e2;
  background-color: #f9f9f9;
`;

const StyledOtherEditorsWrapper = styled.div`
  display: grid;
  align-items: start;
  row-gap: 40px;

  @media ${device.mobile} {
    row-gap: 32px;
  }
`;

const StyledOtherEditorsItems = styled.ul`
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

const StyledOtherEditorsItem = styled(Button)<{
  $active?: boolean;
}>`
  gap: 10px;
  padding: 14px 16px;
  background-color: #ffffff;
  transition: filter 0.2s, box-shadow 0.2s;
  letter-spacing: -0.01em;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: initial;
  white-space: nowrap;

  ${(props) =>
    props.$active &&
    css`
      box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
      color: #ff6f3d;
    `}

  &:hover {
    box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
    color: #ff6f3d;
  }

  @media ${device.mobile} {
    padding: 12px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const editorStyles: Record<string, { backgroundPositionY: number }> = {
  document_editor: { backgroundPositionY: 0 },
  spreadsheet_editor: { backgroundPositionY: -26 },
  presentation_editor: { backgroundPositionY: -52 },
  form_creator: { backgroundPositionY: -78 },
  pdf_editor: { backgroundPositionY: -104 },
  ebook_creator: { backgroundPositionY: -130 },
  diagram_viewer: { backgroundPositionY: -156 },
};

const StyledOtherEditorsItemImg = styled.span<{ $id: string }>`
  width: 24px;
  height: 24px;
  background-image: url("/images/modules/other-editors/editor-selector.svg");
  background-repeat: no-repeat;
  background-position-y: ${({ $id }) =>
    editorStyles[$id]?.backgroundPositionY || 0}px;
`;

export {
  StyledOtherEditors,
  StyledOtherEditorsWrapper,
  StyledOtherEditorsItems,
  StyledOtherEditorsItem,
  StyledOtherEditorsItemImg,
};
