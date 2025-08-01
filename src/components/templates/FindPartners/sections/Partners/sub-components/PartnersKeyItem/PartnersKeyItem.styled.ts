import styled from "styled-components";

const StyledPartnersKeyItem = styled.li`
  & > button {
    padding: 8px 7.9px;
    font-size: 16px;
    line-height: 22px;
    border: 1px solid #ebebeb;

    &:first-child {
      text-transform: none;
    }
  }
`;

export { StyledPartnersKeyItem };