import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

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

const PlatformButton = styled(Button)`
  background-color: #fff;
  color: #333333;
  font-size: 16px;
  font-weight: 400;
  width: 170px;
  height: 64px;
  display: flex;
  gap: 8px;
  padding: 0;
  letter-spacing: 0.04em;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #ddd;
  text-transform: capitalize;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition:
    background 0.2s,
    box-shadow 0.2s,
    border 0.2s;

  &:hover {
    background: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    border: 1px solid #bbb;
    text-decoration: none;
  }

  @media ${device.tablet} {
    width: calc(50% - 15px);
  }

  @media ${device.mobile} {
    width: 170px;
  }
`;

const PlatformIcon = styled.div<{ $positionX: string; $width: string }>`
  background-image: url("/images/templates/desktop/download/download.svg");
  background-position: ${(props) => props.$positionX} center;
  background-repeat: no-repeat;
  content: "";
  height: 32px;
  width: ${(props) => props.$width};
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

export {
  StyledSection,
  ButtonRow,
  PlatformButton,
  PlatformIcon,
  StyledContainer,
};
