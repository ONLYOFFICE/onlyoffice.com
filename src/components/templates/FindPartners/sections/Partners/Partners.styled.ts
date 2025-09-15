import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";

const StyledPartnersKeyList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-bottom: 32px;
`;

const StyledPartnersCountryWrapper = styled.div`
  width: 454px;
  margin: 0 auto 48px;
  position: relative;

  @media ${device.mobile} {
    width: 100%;
    margin-bottom: 32px;
  }
`;

const StyledPartnersCardList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export {
  StyledPartnersKeyList,
  StyledPartnersCountryWrapper,
  StyledPartnersCardList,
};