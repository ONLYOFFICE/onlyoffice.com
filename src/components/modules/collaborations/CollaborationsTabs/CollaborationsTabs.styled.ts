import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledCollaborationsTabs = styled.ul`
  display: flex;
  border-top: 1px solid #cccccc;
  overflow-x: auto;
`;

const StyledCollaborationsTab = styled.li<{
  $active?: boolean;
}>`
  position: relative;
  min-width: 191.5px;
  width: 100%;

  ${(props) =>
    !props.$active &&
    css`
      &:not(:last-child) {
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          border-right: 1px solid #cccccc;
          height: 56px;
          transform: translateY(-50%);
        }
      }
    `}
`;

const StyledCollaborationsTabLink = styled(Link)<{
  $active?: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 37px 12px;
  font-size: 13px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${(props) => (props.$active ? "#ff6f3d" : "#444")};
  background-color: ${(props) => (props.$active ? "#ffffff" : "#f5f5f5")};
  transition: background-color 0.2s;

  &:hover {
    ${(props) =>
      !props.$active &&
      css`
        background-color: #efefef;
      `}
  }

  @media ${device.mobile} {
    padding: 23px 12px;
  }
`;

export {
  StyledCollaborationsTabs,
  StyledCollaborationsTab,
  StyledCollaborationsTabLink,
};
