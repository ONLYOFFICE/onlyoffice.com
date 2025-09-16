import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledChooseAccount = styled.div`
  display: grid;
  row-gap: 32px;
  margin-top: 72px;
  width: 100%;
  max-width: 472px;

  @media ${device.tabletS} {
    margin: 0 auto;
  }
`;

const StyledChooseAccountHeader = styled.div`
  display: grid;
  row-gap: 16px;
`;

const StyledChooseAccountText = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;

const StyledChooseAccountItems = styled.div`
  display: grid;
  row-gap: 16px;
`;

const StyledChooseAccountItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 15px 24px;
  background-color: #f5f5f5;
  transition:
    border-color 0.2s,
    background-color 0.2s;

  svg {
    margin-left: 8px;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s,
      visibility 0.2s;

    path {
      fill: #ff6f3d;
    }
  }

  &:hover {
    border-color: #ff6f3d;
    background-color: #ffffff;

    svg {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const StyledChooseAccountButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledChooseAccountButton = styled.button`
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #ff6f3d;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledChooseAccountLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid #e2e2e2;
    margin: 0 8px;
  }
`;

export {
  StyledChooseAccount,
  StyledChooseAccountHeader,
  StyledChooseAccountText,
  StyledChooseAccountItems,
  StyledChooseAccountItem,
  StyledChooseAccountButton,
  StyledChooseAccountButtons,
  StyledChooseAccountLabel,
};
