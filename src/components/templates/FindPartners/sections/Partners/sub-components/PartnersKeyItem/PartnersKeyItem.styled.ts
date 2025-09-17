import styled from "styled-components";

const StyledPartnersKeyItem = styled.li`
  & > button {
    height: 40px;
    min-width: 36px;
    min-height: auto;
    font-size: 16px;
    line-height: 22px;
    padding: 8px;
    border: 1px solid #ebebeb;
    border-radius: 6px;
  }

  &:first-child {
    & > button {
      height: 40px;
      min-width: 43px;
      text-transform: none;
    }
  }
`;

export { StyledPartnersKeyItem };