import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledManageTabs = styled.ul`
  list-style-type: none;
  max-width: 734px;
  width: 100%;
  margin: 72px auto;
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    max-width: 100%;
    padding-bottom: 8px;
    gap: 16px;
    margin: 32px auto;
  }
`;

const StyledManageTabsItem = styled.li<{ $icon: string; $isActive: boolean }>`
  min-width: 64px;
  padding: 78px 0 3px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? "#ff6f3d" : "#444444")};
  border-bottom: ${({ $isActive }) =>
    $isActive ? "1px solid #ff6f3d" : "none"};
  position: relative;
  text-align: center;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 62px;
    background-image: url(${({ $icon }) => $icon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    @media ${device.mobile} {
      width: 48px;
      height: 48px;
    }
  }

  @media ${device.tabletS} {
    min-width: 84px;
  }

  @media ${device.mobile} {
    padding: 64px 0 3px;
  }
`;

export { StyledManageTabs, StyledManageTabsItem };
