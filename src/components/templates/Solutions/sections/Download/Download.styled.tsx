import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

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
    url("/images/templates/desktop/download/bg.svg") center / 2350px auto
      no-repeat,
    linear-gradient(162.82deg, #ffc671 0%, #ff7541 64.06%, #ff6f3d 100%);
  text-align: center;
`;

const StyledDownloadButton = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: #ffffff;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  padding: 24px;
  text-transform: capitalize;
  gap: 0 24px;

  @media ${device.mobile} {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
`;

const IconsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const Icon = styled.div<{ $positionX: number }>`
  display: block;
  height: 32px;
  background-image: url(/images/templates/solutions/platforms.svg);
  background-position: ${(props) => props.$positionX}px center;
  filter: grayscale(100%);
  transition: filter 0.5s;
  width: 32px;

  &:not(:first-child) {
    &::before {
      content: " ";
      width: 1px;
      height: 24px;
      opacity: 0.5;
      display: block;
      background-color: #ffffff;
      position: relative;
      left: -24px;
      top: 4px;
    }
  }
`;

const StyledText = styled(Text)`
  font-size: 18px;
  padding: 24px 0 40px;

  @media ${device.tabletS} {
    font-size: 16px;
  }
`;

export {
  StyledSection,
  ButtonRow,
  StyledDownloadButton,
  IconsRow,
  Icon,
  StyledText,
};
