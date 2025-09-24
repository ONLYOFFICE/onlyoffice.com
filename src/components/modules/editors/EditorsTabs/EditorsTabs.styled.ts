import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Container } from "@src/components/ui/Container";

const StyledEditorsTabs = styled.ul`
  max-width: 1120px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  text-align: center;
`;

const StyledEditorsTab = styled.li`
  position: relative;
`;

const StyledEditorsTabLink = styled(Link)`
  border-bottom: 1px solid transparent;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 26px 28px 25px;
  text-decoration: none;
  color: #333;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  transition-duration: 0.2s;

  &:hover {
    border-bottom: 1px solid #ff6f3d;
    color: #ff6f3d;
  }

  @media ${device.tablet} {
    padding: 22px 16px;
    font-size: 12px;
    white-space: nowrap;
  }

  @media ${device.mobile} {
    padding: 13px 20px;
  }
`;

const StyledContainer = styled(Container)<{ $isFixed: boolean }>`
  border-bottom: 1px solid #e2e2e2;
  background-color: #f5f5f5;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  max-width: 100%;

  ${(props) => props.$isFixed &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
    `}
`;

export {
  StyledEditorsTabs,
  StyledEditorsTab,
  StyledEditorsTabLink,
  StyledContainer,
};
