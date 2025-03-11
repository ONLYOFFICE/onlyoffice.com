import styled from "styled-components";

export const StyledFeatureList = styled.ul`
  list-style: none;
  font-size: 16px;
`;

export const StyledFeatureListItem = styled.li`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    display: inline-block;
    content: "";
    background: #ff6f3d;
    width: 6px;
    height: 6px;
    margin: 0 16px 0 8px;
    top: -2px;
    position: relative;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
