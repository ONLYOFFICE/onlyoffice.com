import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledSupportedFormatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: start;

  @media (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledSupportedFormatsColumn = styled.div`
  margin-top: 48px;
  display: grid;
  gap: 24px;
  text-align: center;
  padding-top: 72px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 48px;
    height: 48px;
    background-image: url("/images/modules/converter/convert_icons.svg");
    background-repeat: no-repeat;
    background-position-y: bottom;
  }

  &.TextDocuments::before {
    background-position-x: -72px;
  }

  &.Presentations::before {
    background-position-x: -144px;
  }

  @media ${device.tablet} {
    max-width: 352px;
  }
`;

const StyledSupportedFormatsItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const StyledSupportedFormatsItem = styled.li`
  padding: 8px 16px;
  border-radius: 3px;
  background-color: #f9f9f9;
  font-size: 16px;
  line-height: 24px;
`;

export {
  StyledSupportedFormatsWrapper,
  StyledSupportedFormatsColumn,
  StyledSupportedFormatsItems,
  StyledSupportedFormatsItem,
};
