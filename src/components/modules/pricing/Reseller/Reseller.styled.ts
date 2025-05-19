import styled from "styled-components";

const StyledReseller = styled.div`
  position: relative;
  display: grid;
  row-gap: 8px;
  padding-top: 56px;
  text-align: center;
  background-image: url("/images/modules/pricing/reseller/map.svg");
  background-repeat: no-repeat;
  background-size: 58px 32px;
  background-position: top center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 16px;
    width: calc(50% - 39px);
    height: 1px;
    background-color: #cccccc;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export { StyledReseller };
