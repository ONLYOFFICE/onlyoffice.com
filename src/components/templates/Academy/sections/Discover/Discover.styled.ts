import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const ButtonsArea = styled.div`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 24px 0 112px;

  @media ${device.tablet} {
    padding: 24px 0 88px;
  }

  @media ${device.tabletS} {
    padding: 24px 0 80px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 24px 24px 48px;
    width: 100%;
  }
`;

const StyledSection = styled(Section)`
  overflow: hidden;
`;

export { ButtonsArea, StyledSection };
