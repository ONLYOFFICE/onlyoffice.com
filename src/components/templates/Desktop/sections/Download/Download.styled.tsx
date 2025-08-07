import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 24px 0 32px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 15px;
    width: 100%;
    justify-content: center;
    max-width: 500px;
    margin: auto;
  }
  @media ${device.mobile} {
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
`;

const StyledSection = styled(Section)`
  background:
    url("/images/templates/desktop/download/bg.svg") center/cover no-repeat,
    linear-gradient(162.82deg, #ffc671 0%, #ff7541 64.06%, #ff6f3d 100%);
  text-align: center;
`;

const StyledContainer = styled(Container)`
  max-width: 850px;
  text-align: center;
`;

export { StyledSection, ButtonRow, StyledContainer };
