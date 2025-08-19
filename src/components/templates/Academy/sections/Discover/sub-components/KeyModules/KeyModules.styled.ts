import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledKeyModules = styled.div`
  max-width: 1071px;
  background-color: #ffffff;
  margin: auto;
  border-radius: 6px;
  border: 1px solid #cccccc;
  padding: 24px 24px 56px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 32px auto;
  gap: 24px 0px;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);

  @media ${device.desktop} {
    max-width: 90vw;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    padding: 24px 16px 40px;
    gap: 16px 0px;
  }
`;

const StyledHeading = styled(Heading)`
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  background-color: #f9f9f9;
  padding: 19px 32px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  display: block;
  grid-column: span 2;
  margin-bottom: 16px;

  @media ${device.mobile} {
    padding: 13px 32px;
    font-size: 14px;
  }
`;

const KeyModule = styled.div`
  display: grid;
  grid-template-columns: 48px auto;
  gap: 16px;
  padding: 0 32px;

  @media ${device.tabletS} {
    &:nth-child(6) {
      grid-column: span 2;
    }
  }

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const KeyIcon = styled.div<{ $src: string }>`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  content: "";
`;

const KeyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;

  @media ${device.tabletS} {
    justify-content: start;
  }
`;

export { StyledKeyModules, StyledHeading, KeyModule, KeyIcon, KeyText };
