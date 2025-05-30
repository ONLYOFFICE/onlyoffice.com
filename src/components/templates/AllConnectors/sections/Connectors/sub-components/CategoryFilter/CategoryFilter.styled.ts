import styled, { css } from "styled-components";
import { device } from "@src/utils/device";

const StyledCategoryFilterBtn = styled.button<{ $isOpen: boolean }>`
  position: relative;
  border: none;
  padding-right: 32px;
  background-color: transparent;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 24px;
    height: 24px;
    background: url("/images/icons/chevron-down.svg");
    transform: ${(props) =>
      props.$isOpen ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)"};
  }

  @media ${device.mobile} {
    padding-right: 28px;
  }
`;

const StyledCategoryFilterLabel = styled.span`
  margin-right: 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18.62px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #808080;

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledCategoryFilterText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #333333;

  @media ${device.mobile} {
    font-weight: 600;
    font-size: 12px;
    letter-spacing: initial;
  }
`;

const StyledCategoryFilterDropdown = styled.div`
  position: absolute;
  padding-top: 20px;

  > ul {
    > li {
      position: relative;

      > ul {
        > li {
          button {
            font-size: 16px;
            font-weight: 400;
          }
        }
      }

      &:first-child {
        > button {
          font-size: 16px;
        }
      }

      &:not(:first-child) {
        > button {
          text-transform: uppercase;
        }
      }
    }
  }

  @media ${device.mobile} {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 0;
    width: 100%;
    height: 100%;
    z-index: 101;
    background-color: #ffffff;
  }
`;

const StyledCategoryFilterDropdownHeader = styled.div<{ $border?: boolean }>`
  display: none;

  @media ${device.mobile} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: ${(props) => props.$border && "1px solid #e5e5e5"};
    padding: 12px 16px;
    height: 48px;
    z-index: 102;
  }
`;

const StyledCategoryFilterDropdownHeaderBtn = styled.button<{
  $isBack?: boolean;
  $isCross?: boolean;
}>`
  border: none;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  cursor: pointer;

  ${(props) =>
    props.$isBack &&
    css`
      background-image: url("/images/icons/chevron-left.svg");
    `}

  ${(props) =>
    props.$isCross &&
    css`
      background-image: url("/images/icons/cross.svg");
    `}
`;

const StyledCategoryFilterDropdownContent = styled.ul<{ $isMain?: boolean }>`
  border-radius: 0 0 6px 6px;
  padding: 16px 0;
  width: max-content;
  background-color: #ffffff;
  box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);

  ${(props) =>
    props.$isMain
      ? css`
          min-width: 270px;

          @media ${device.mobile} {
            padding: 0;
            min-width: 100%;
          }
        `
      : css`
          position: absolute;
          top: 0;
          left: 100%;
          min-width: 206px;

          @media ${device.mobile} {
            position: fixed;
            left: 0;
            padding: 64px 0 16px;
            min-width: 100%;
            z-index: 101;
          }
        `}

  @media ${device.mobile} {
    border-radius: initial;
    width: 100%;
    height: 100%;
    box-shadow: initial;
  }
`;

const StyledCategoryFilterDropdownBtn = styled.button<{ $isActive?: boolean }>`
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  letter-spacing: 0.04em;
  width: 100%;
  color: ${(props) => (props.$isActive ? "#ff6f3d" : "#333333")};
  background-color: ${(props) => (props.$isActive ? "#f5f5f5" : "transparent")};
  transition:
    color 0.2s,
    background-color 0.2s;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 32px;

    path {
      transition: fill 0.2s;
    }
  }

  &:hover {
    color: #ff6f3d;
    background-color: #f5f5f5;

    svg {
      path {
        fill: #ff6f3d;
      }
    }
  }

  @media ${device.mobile} {
    padding: 12px 16px 12px 24px;
    font-size: 16px;
  }
`;

export {
  StyledCategoryFilterBtn,
  StyledCategoryFilterLabel,
  StyledCategoryFilterText,
  StyledCategoryFilterDropdown,
  StyledCategoryFilterDropdownHeader,
  StyledCategoryFilterDropdownHeaderBtn,
  StyledCategoryFilterDropdownContent,
  StyledCategoryFilterDropdownBtn,
};
