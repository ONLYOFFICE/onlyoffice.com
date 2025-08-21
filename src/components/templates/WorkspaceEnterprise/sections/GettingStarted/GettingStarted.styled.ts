import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledText = styled(Text)`
  padding: 16px 0 0;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 32px;
  padding: 56px 0 0;

  @media ${device.desktop} {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${device.tabletS} {
    gap: 24px;
  }

  @media ${device.mobile} {
    gap: 16px;
    padding: 24px 0 0;
  }
`;

const OptionCard = styled.div`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  flex-shrink: 0;
  display: grid;
  align-items: start;
  grid-template-rows: 160px 1fr;
  grid-template-columns: 1fr;
  gap: 32px;
  min-height: 416px;
  width: 352px;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 14px 25px rgba(85, 85, 85, 0.25);
  }

  @media ${device.tablet} {
    width: 328px;
  }
  
  @media ${device.mobile} {
    grid-template-rows: 160px 1fr;
    gap: 24px;
    min-height: 372px;
    width: 100%;
  }
`;

const IconContainer = styled.div<{ $color: string; $icon: string }>`
  background-color: ${(props) => props.$color};
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 160px;
  position: relative;

  &::after {
    content: "";
    display: block;
    background-image: ${(props) => `url(${props.$icon})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 70px;
    width: 223px;
    position: absolute;
    left: calc(50% - 112px);
    top: calc(50% - 35px);
  }

  @media ${device.mobile} {
    height: 160px;

    &::after {
      height: 64px;
      width: 244px;
      left: calc(50% - 122px);
      top: calc(50% - 32px);
    }
  }
`;

const OptionDescription = styled(Text)`
  color: #666666;
  font-size: 14px;
  line-height: 1.6em;
  padding: 16px 0 0;

  @media ${device.mobile} {
    padding: 8px 0 0;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px 32px;
  text-align: left;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media ${device.mobile} {
    padding: 0 24px 24px;
  }
`;

export {
  StyledContainer,
  OptionsContainer,
  OptionCard,
  IconContainer,
  OptionDescription,
  OptionContainer,
  StyledText,
};
